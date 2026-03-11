import Bytez from "bytez.js";

const key = process.env.NEXT_PUBLIC_BYTEZ_API_KEY || "";
const sdk = new Bytez(key);

export const qwenModel = sdk.model("Qwen/Qwen3-4B-Instruct-2507");

export async function askAI(message: string, modelType: "qwen" = "qwen"): Promise<string> {
  try {
    const selectedModel = qwenModel;
    
    const { error, output } = await selectedModel.run([
      {
        role: "user",
        content: message,
      },
    ]);

    if (error) {
      throw new Error(error);
    }

    let responseText = "";

    // Handle different output formats
    if (typeof output === "string") {
      responseText = output;
    } else if (output && typeof output === "object" && "content" in output) {
      // Extract content from object response
      responseText = String(output.content);
    } else if (output) {
      responseText = JSON.stringify(output);
    } else {
      return "No response from AI.";
    }

    // Remove <think> tags and their content
    responseText = responseText.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();

    return responseText || "No response from AI.";
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Something went wrong. Please try again.");
  }
}
