export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Pro';
  estimatedTime: string;
  category: string[];
  slug: string;
  content?: TutorialStep[];
  prerequisites?: string[];
}

export interface TutorialStep {
  title: string;
  content: string;
  code?: string;
  language?: string;
  proTip?: string;
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'How to integrate Gemini API into your project',
    description: 'Learn how to leverage Google\'s powerful Gemini models for AI-driven features in your applications.',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    category: ['API', 'Automation'],
    slug: 'integrate-gemini-api',
    prerequisites: [
      'A Google Cloud Project',
      'An API Key from Google AI Studio',
      'Basic knowledge of JavaScript/TypeScript'
    ],
    content: [
      {
        title: 'Install the Google AI SDK',
        content: 'First, you need to install the `@google/generative-ai` package in your project.',
        code: 'npm install @google/generative-ai',
        language: 'bash'
      },
      {
        title: 'Initialize the API Client',
        content: 'Set up your Gemini client using your API Key.',
        code: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });`,
        language: 'typescript',
        proTip: 'Always use environment variables for your API keys. Never hardcode them into your source code.'
      },
      {
        title: 'Generate Content',
        content: 'Now you can send prompts to the model and receive responses.',
        code: `const prompt = "Explain how AI works to a five-year-old.";
const result = await model.generateContent(prompt);
console.log(result.response.text());`,
        language: 'typescript'
      }
    ]
  },
  {
    id: '2',
    title: 'Setting up your first OpenClaw node on Android/iOS',
    description: 'Turn your mobile device into a powerful AI node using the OpenClaw mobile agent.',
    difficulty: 'Pro',
    estimatedTime: '25 min',
    category: ['OpenClaw', 'Automation'],
    slug: 'setup-openclaw-node-mobile',
    prerequisites: [
      'An Android or iOS device',
      'OpenClaw Desktop installed on your host machine',
      'Both devices on the same Wi-Fi network'
    ],
    content: [
      {
        title: 'Download the OpenClaw App',
        content: 'Search for "OpenClaw" on the Google Play Store or Apple App Store and install it on your device.'
      },
      {
        title: 'Enable Developer Options',
        content: 'For Android, you\'ll need to enable USB debugging or Wireless debugging to allow OpenClaw to interact with the system.',
        proTip: 'On Android, tap "Build Number" 7 times in Settings > About Phone to unlock Developer Options.'
      },
      {
        title: 'Pair with Desktop',
        content: 'Open the app, go to "Nodes" and tap "Add New Node". Scan the QR code displayed in your OpenClaw Desktop dashboard.',
        code: 'openclaw nodes pairing --show-qr',
        language: 'bash'
      }
    ]
  }
];
