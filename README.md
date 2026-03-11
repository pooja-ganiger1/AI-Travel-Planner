# AI Travel Planner 🌍✈️

A modern AI-powered Travel Planner Web Application built with Next.js and ShadCN UI.

## Features

- 🏠 **Home Page**: Hero section with features and popular destinations
- 🧳 **Travel Planner**: Generate personalized itineraries with AI
- 🤖 **AI Chatbot**: Interactive travel assistant for instant recommendations
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- 🌙 **Dark Mode Support**: Built-in theme support

## Tech Stack

- **Next.js 14+** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI Components**
- **Lucide Icons**
- **Framer Motion** (Animations)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd ai-travel-planner
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with your API keys if needed.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ai-travel-planner/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── chat/
│   │   └── page.tsx          # Chatbot page
│   └── planner/
│       └── page.tsx          # Travel planner page
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Chatbot.tsx           # AI chatbot component
│   ├── DestinationCard.tsx   # Destination display card
│   └── TravelForm.tsx        # Travel planning form
├── lib/
│   └── gemini.ts             # AI integration
└── .env.local                # Environment variables
```

## Usage

### Home Page
- View features and popular destinations
- Navigate to Planner or Chat Assistant

### Travel Planner
1. Fill in the travel form:
   - Destination
   - Budget (Low/Medium/High)
   - Number of days
   - Travel type (Adventure/Relaxation/Family/Solo)
2. Click "Generate Itinerary"
3. View your AI-generated travel plan with:
   - Daily activities
   - Places to visit
   - Food recommendations
   - Budget breakdown
   - Travel tips

### AI Chat Assistant
- Ask questions about travel destinations
- Get instant recommendations
- Use suggested questions or type your own
- Examples:
  - "Best places to visit in Goa?"
  - "3 day trip plan for Mysore"
  - "Cheap international trips from India"
  - "Best hill stations in Karnataka"

## Components

### Navbar
- Responsive navigation with mobile menu
- Links to Home, Planner, and Chat pages

### TravelForm
- Input fields for trip details
- Form validation
- Loading states

### Chatbot
- Real-time AI responses
- Message history
- Suggested questions
- Auto-scroll to latest message

### DestinationCard
- Display destination information
- Hover effects
- Responsive layout

## AI Integration

The app uses AI for:
- Generating travel itineraries
- Answering travel-related questions
- Providing destination recommendations

## Build for Production

```bash
npm run build
npm start
```

## Customization

- Modify components in `/components` directory
- Update AI prompts in `/lib/gemini.ts`
- Customize styles using Tailwind CSS classes
- Add more destinations in the home page

## License

MIT

## Support

For issues or questions, please open an issue on the repository.
