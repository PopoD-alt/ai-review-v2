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
    description: 'Learn how to leverage Google\'s powerful Gemini models for AI-driven features in your applications using Node.js or Python.',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    category: ['API', 'Automation'],
    slug: 'integrate-gemini-api',
    prerequisites: [
      'A Google Cloud Project',
      'An API Key from Google AI Studio (aistudio.google.com)',
      'Basic knowledge of JavaScript or Python'
    ],
    content: [
      {
        title: 'Step 1: Get your API Key',
        content: 'Head over to Google AI Studio and create a new API key. Gemini Pro and Flash are available with generous free tiers. If you have a Google One AI Premium subscription, you can leverage higher rate limits.',
        proTip: 'Gemini 1.5 Flash is incredibly fast and cost-effective for most tasks, while Gemini 1.5 Pro excels at complex reasoning and large context windows.'
      },
      {
        title: 'Step 2: Install the SDK',
        content: 'Choose your preferred language and install the official Google Generative AI SDK.',
        code: `# For Node.js
npm install @google/generative-ai

# For Python
pip install -q -U google-generativeai`,
        language: 'bash'
      },
      {
        title: 'Step 3: Implementation (Node.js)',
        content: 'Initialize the model and generate a response using Node.js.',
        code: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const result = await model.generateContent("Explain Quantum Physics to a developer.");
console.log(result.response.text());`,
        language: 'typescript',
        proTip: 'Use environment variables to store your keys. Never commit your API key to GitHub!'
      },
      {
        title: 'Step 4: Implementation (Python)',
        content: 'Alternatively, you can use Python for your AI integration.',
        code: `import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-flash')

response = model.generate_content("Give me a 3-day itinerary for Tokyo.")
print(response.text)`,
        language: 'python'
      }
    ]
  },
  {
    id: '2',
    title: 'Setting up your first OpenClaw node on Android/iOS',
    description: 'Turn your mobile device into a powerful AI node. This allows OpenClaw to use your phone\'s camera, screen, and local compute.',
    difficulty: 'Pro',
    estimatedTime: '10 min',
    category: ['OpenClaw', 'Nodes'],
    slug: 'setup-openclaw-node-mobile',
    prerequisites: [
      'OpenClaw Desktop installed and running',
      'Android (10+) or iOS (15+) device',
      'Both devices on the same local network'
    ],
    content: [
      {
        title: '1. Download & Install',
        content: 'Download the OpenClaw Mobile APK from the official GitHub releases (for Android) or join the TestFlight beta (for iOS). Install the app and grant the requested permissions for Camera and Overlay.',
        proTip: 'The "Display over other apps" permission is required for the Canvas surface to appear over your mobile UI.'
      },
      {
        title: '2. Enable Gateway Pairing',
        content: 'On your Desktop terminal, run the pairing command to generate a secure connection token and QR code.',
        code: 'openclaw nodes pairing --show-qr',
        language: 'bash',
        proTip: 'If your firewall is active, ensure port 4444 is open for local peer-to-peer communication.'
      },
      {
        title: '3. Scan and Connect',
        content: 'Open the OpenClaw app on your phone, tap "Pair Node", and scan the QR code on your monitor. The node should appear in your Desktop "Nodes" list immediately.',
        proTip: 'Once paired, you can give your node a nickname like "Pixel-Node" or "iPhone-Primary" to easily target it in scripts.'
      },
      {
        title: '4. Enable Canvas Surface',
        content: 'In the app settings, toggle "Enable Canvas". This allows OpenClaw to draw a transparent UI layer over your phone, which it uses to show its "thoughts" or highlight UI elements it is interacting with.',
        code: 'openclaw nodes notify --target "my-phone" --title "Hello" --body "Canvas is active!"',
        language: 'bash'
      }
    ]
  }
];
