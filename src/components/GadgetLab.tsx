import { Cpu, Zap, Lightbulb, ArrowUpRight, ShieldCheck, Microscope } from 'lucide-react';

const gadgets = [
  {
    title: "Apple Vision Pro 2 (Rumors)",
    status: "Leak",
    description: "New reports suggest a significantly lighter design with an upgraded M5 chip. Focus on 'spatial intelligence' and peripheral AI sensing.",
    tech: "M5 / micro-OLED",
    date: "Late 2026",
    color: "from-purple-500/20 to-blue-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Rabbit R2: Neural Link",
    status: "Upcoming",
    description: "Next-gen LAM (Large Action Model) device featuring a high-refresh e-ink display and dedicated 'offline-first' AI mode.",
    tech: "LAM 2.0 / E-Ink",
    date: "Q3 2026",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "group-hover:border-orange-500/50"
  },
  {
    title: "Meta 'Orion' Consumer Edition",
    status: "Rumor",
    description: "Leaked specs suggest a slimmed-down version of the Orion AR glasses, focusing on lightweight frames and multimodal Llama 4 integration.",
    tech: "Micro-LED / Llama 4",
    date: "Early 2027",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "OpenAI 'Hermes' Handheld",
    status: "Secret Project",
    description: "Whispers of a collaborative device with Jony Ive's LoveFrom. A screenless interface driven entirely by voice and visual context.",
    tech: "GPT-5 / Neural Engine",
    date: "Winter 2026",
    color: "from-gray-500/20 to-black/20",
    borderColor: "group-hover:border-gray-500/50"
  },
  {
    title: "Humane Wearable Hub",
    status: "In Beta",
    description: "A redesigned form factor that moves away from the 'pin' to a wrist-based projector hub with improved thermal management.",
    tech: "Laser-UI / Snapdragon AI",
    date: "Aug 2026",
    color: "from-pink-500/20 to-yellow-500/20",
    borderColor: "group-hover:border-pink-500/50"
  },
  {
    title: "Framework Laptop 16 AI Edition",
    status: "Pre-order",
    description: "Fully modular laptop with dedicated NPU expansion cards and open-source local LLM integration at the BIOS level.",
    tech: "AMD Ryzen AI / Modular",
    date: "June 2026",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Nothing Phone (3a) AI",
    status: "Leak",
    description: "The first budget phone built around a physical 'AI Action' button and deep OS integration for autonomous task execution.",
    tech: "Dimensity 9400 AI",
    date: "Sept 2026",
    color: "from-red-500/20 to-white/20",
    borderColor: "group-hover:border-red-500/50"
  },
  {
    title: "Sony PlayStation VR 3",
    status: "Concept",
    description: "Focusing on 'AI-generated environments' that adapt to player bio-feedback and eye-tracking patterns in real-time.",
    tech: "Sense-AI / Dual 4K",
    date: "2027",
    color: "from-blue-700/20 to-indigo-900/20",
    borderColor: "group-hover:border-blue-700/50"
  }
];

export default function GadgetLab() {
  return (
    <div className="space-y-8 py-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black flex items-center gap-3 tracking-tight">
            <span className="p-2 bg-brand-primary/10 rounded-xl">
              <Cpu className="text-brand-primary" size={28} />
            </span>
            Gadget Lab
          </h2>
          <p className="text-gray-500 mt-2 font-medium max-w-xl">
            Exploring the bleeding edge of AI hardware. From spatial computing to neural-linked wearables, these are the tools of tomorrow.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
            Future-Tech Mode
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gadgets.map((gadget, idx) => (
          <div 
            key={idx} 
            className={`group relative cu-card overflow-hidden border-2 border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${gadget.borderColor}`}
          >
            {/* Glassmorphism Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gadget.color} opacity-30 group-hover:opacity-60 transition-opacity`}></div>
            
            <div className="relative p-6 h-full flex flex-col backdrop-blur-[2px]">
              <div className="flex justify-between items-start mb-6">
                <span className="px-2 py-0.5 bg-white/80 border border-gray-100 rounded text-[10px] font-bold uppercase tracking-tighter text-gray-600">
                  {gadget.status}
                </span>
                <div className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <h3 className="text-xl font-black mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                {gadget.title}
              </h3>
              
              <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 flex-grow">
                {gadget.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100/50">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Zap size={14} className="text-brand-warning" />
                  {gadget.tech}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Microscope size={14} className="text-brand-info" />
                  Est. Release: {gadget.date}
                </div>
              </div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Insider Leak Section */}
      <div className="mt-12 cu-card bg-black p-8 text-white relative overflow-hidden group border-none">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-brand-success" size={24} />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-success">Encrypted Dispatch</span>
            </div>
            <h3 className="text-3xl font-black mb-4">Rumor: NVIDIA's Dedicated Consumer 'AI-Box'</h3>
            <p className="text-white/60 font-medium text-lg leading-relaxed">
              Whispers from supply chains suggest NVIDIA is prototyping a standalone home appliance designed to run local LLMs and agentic workflows without needing a PC. Codename: <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">Project G-Brain</span>.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-none hover:bg-brand-primary hover:text-white transition-all transform hover:scale-105 active:scale-95">
              Read Deep Dive
            </button>
          </div>
        </div>
        
        {/* Techy background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/20 rounded-full blur-[80px] -ml-24 -mb-24"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>
    </div>
  );
}
