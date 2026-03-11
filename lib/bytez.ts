import Bytez from "bytez.js";
import { askGemini } from "./gemini";

const key = process.env.NEXT_PUBLIC_BYTEZ_API_KEY || "";
const sdk = new Bytez(key);

export const gptModel = sdk.model("openai/gpt-oss-20b");

export async function askAI(message: string, modelType: "gpt" | "gemini" = "gemini"): Promise<string> {
  try {
    // Use Gemini API directly if selected
    if (modelType === "gemini") {
      return await askGemini(message);
    }

    // Use Bytez for other models
    const selectedModel = gptModel;
    
    const { error, output } = await selectedModel.run([
      {
        role: "user",
        content: message,
      },
    ]);

    if (error) {
      // Don't log to console, just throw the error to be handled by the UI
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
    // Don't log to console, just throw the error to be handled by the UI
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Something went wrong. Please try again.");
  }
}
