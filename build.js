const fs = require('fs');
const path = require('path');

// Configuration
const DATA_DIR = path.join(__dirname, 'scraped_data');
const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// Load Data
const tools = loadJson('tools.json');
const news = loadJson('news.json');
const llms = loadJson('llms.json');
const tutorials = loadJson('tutorials.json');

// Ensure dist exists
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });
if (!fs.existsSync(path.join(DIST_DIR, 'tutorials'))) fs.mkdirSync(path.join(DIST_DIR, 'tutorials'), { recursive: true });

// --- BUILD PAGES ---

// 1. Dashboard (index.html)
buildPage('index.html', 'Dashboard', generateDashboardContent());

// 2. News (news.html)
buildPage('news.html', 'Intel', generateNewsPage());

// 3. Models (models.html)
buildPage('models.html', 'Models', generateModelsPage());

// 4. Tutorials (tutorials.html)
buildPage('tutorials.html', 'Tutorials', generateTutorialsPage());

// 5. Individual Tutorials
tutorials.forEach(tut => {
    buildPage(`tutorials/${tut.id}.html`, 'Tutorials', generateTutorialDetail(tut));
});


// --- GENERATORS ---

function generateDashboardContent() {
    return `
    <div class="relative pt-16 pb-20 px-4 text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            The <span class="gradient-text">Intelligence Hub</span>
        </h1>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Your central command for AI tools, model benchmarks, and intelligence briefings.
        </p>
    </div>

    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Column 1: Intel -->
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-bold text-white flex items-center gap-2">
                    <span class="text-indigo-400">●</span> Latest Intel
                </h2>
                <a href="news.html" class="text-xs text-slate-500 hover:text-white transition">View All</a>
            </div>
            <div class="space-y-4">
                ${news.slice(0, 3).map(item => {
                    const type = item.title.toLowerCase().includes('rumor') || item.title.toLowerCase().includes('leak') ? 'Rumor' : 'Official';
                    return `
                    <div class="glass p-5 rounded-2xl card-hover cursor-pointer group">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider ${type === 'Rumor' ? 'text-pink-400' : 'text-emerald-400'}">${type}</span>
                            <span class="text-[10px] text-slate-500">${item.date}</span>
                        </div>
                        <h3 class="font-bold text-slate-200 group-hover:text-white transition mb-1">${item.title}</h3>
                        <p class="text-xs text-slate-500 line-clamp-2">${item.summary}</p>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Column 2: Tools -->
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-bold text-white flex items-center gap-2">
                    <span class="text-pink-400">●</span> Trending Tools
                </h2>
                <span class="text-xs text-slate-500">Updated Daily</span>
            </div>
            <div class="space-y-4">
                ${tools.slice(0, 3).map(tool => `
                    <div class="glass p-5 rounded-2xl card-hover flex gap-4">
                        <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-lg font-bold text-white/50 shrink-0">
                            ${tool.name.charAt(0)}
                        </div>
                        <div>
                            <h3 class="font-bold text-white text-sm">${tool.name}</h3>
                            <p class="text-xs text-slate-400 mb-2">${tool.category}</p>
                            <p class="text-xs text-slate-500 line-clamp-1">${tool.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Column 3: Arena -->
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-bold text-white flex items-center gap-2">
                    <span class="text-amber-400">●</span> The Arena
                </h2>
                <a href="models.html" class="text-xs text-slate-500 hover:text-white transition">Full Rankings</a>
            </div>
            <div class="space-y-4">
                ${llms.slice(0, 3).map((model, i) => `
                    <div class="glass p-4 rounded-xl flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="text-xl font-black text-white/10">0${i+1}</span>
                            <div>
                                <h4 class="font-bold text-slate-200 text-sm">${model.name}</h4>
                                <span class="text-[10px] text-slate-500">${model.provider}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="block text-xs font-bold text-indigo-400">${model.performance}</span>
                            <span class="text-[10px] text-slate-600">${model.context} ctx</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    `;
}

function generateNewsPage() {
    return `
    <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold text-white mb-8">Intelligence & Rumors</h1>
        <div class="grid gap-6">
            ${news.map(item => {
                const dateObj = new Date(item.date);
                const month = dateObj.toLocaleString('default', { month: 'short' });
                const day = dateObj.getDate();
                const type = item.title.toLowerCase().includes('rumor') || item.title.toLowerCase().includes('leak') ? 'Rumor' : 'Official';
                
                return `
                <div class="glass p-6 rounded-2xl flex flex-col md:flex-row gap-6">
                    <div class="shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/5">
                        <span class="text-xs font-bold text-slate-400">${month}</span>
                        <span class="text-lg font-black text-white">${day}</span>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <span class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${type === 'Rumor' ? 'bg-pink-500/10 text-pink-400' : 'bg-emerald-500/10 text-emerald-400'} border border-white/5">
                                ${type}
                            </span>
                        </div>
                        <h2 class="text-xl font-bold text-white mb-2">${item.title}</h2>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">${item.summary}</p>
                        <a href="${item.url}" target="_blank" class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                            Read Source <span>→</span>
                        </a>
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    </div>
    `;
}

function generateModelsPage() {
    return `
    <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-white mb-4">The Arena</h1>
            <p class="text-slate-400">Benchmark comparisons and capability analysis.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${llms.map(model => `
                <div class="glass p-6 rounded-3xl flex flex-col h-full relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:scale-110 transition-transform select-none">
                        ${model.name.charAt(0)}
                    </div>
                    
                    <div class="relative z-10">
                        <span class="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-slate-300 mb-4 border border-white/5">${model.provider}</span>
                        <h2 class="text-2xl font-bold text-white mb-2">${model.name}</h2>
                        <p class="text-sm text-slate-400 mb-6 h-10">${model.description}</p>
                        
                        <div class="space-y-3 mb-8">
                            <div class="flex justify-between text-sm border-b border-white/5 pb-2">
                                <span class="text-slate-500">Context Window</span>
                                <span class="text-slate-200 font-mono">${model.context}</span>
                            </div>
                            <div class="flex justify-between text-sm border-b border-white/5 pb-2">
                                <span class="text-slate-500">Performance</span>
                                <span class="text-indigo-400 font-bold">${model.performance}</span>
                            </div>
                            <div class="flex justify-between text-sm border-b border-white/5 pb-2">
                                <span class="text-slate-500">Cost</span>
                                <span class="text-emerald-400 font-bold">${model.price}</span>
                            </div>
                        </div>

                        <a href="${model.url}" target="_blank" class="block w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-bold rounded-xl transition shadow-lg shadow-indigo-500/20">
                            Access Model
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    `;
}

function generateTutorialsPage() {
    return `
    <div class="max-w-5xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold text-white mb-8">Workshop</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${tutorials.map(tut => `
                <a href="tutorials/${tut.id}.html" class="glass p-8 rounded-3xl card-hover group block">
                    <div class="flex justify-between items-start mb-4">
                        <span class="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-lg border border-indigo-500/10">
                            ${tut.level}
                        </span>
                        <span class="text-xs text-slate-500 font-mono flex items-center gap-1">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            ${tut.duration}
                        </span>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition">${tut.title}</h2>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">${tut.summary}</p>
                    <div class="text-sm font-bold text-white flex items-center gap-2">
                        Start Tutorial <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </a>
            `).join('')}
        </div>
    </div>
    `;
}

function generateTutorialDetail(tut) {
    return `
    <div class="max-w-3xl mx-auto px-4 py-12">
        <a href="../tutorials.html" class="text-slate-500 hover:text-white mb-8 inline-flex items-center gap-2 text-sm transition">
            ← Back to Workshop
        </a>
        
        <header class="mb-10">
            <div class="flex gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>${tut.level}</span>
                <span>•</span>
                <span>${tut.duration}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">${tut.title}</h1>
            <p class="text-xl text-slate-400 leading-relaxed">${tut.summary}</p>
        </header>

        <div class="prose prose-invert prose-lg max-w-none">
            ${tut.content}
        </div>
    </div>
    `;
}


// --- UTILS ---

function loadJson(filename) {
    try {
        return JSON.parse(fs.readFileSync(path.join(DATA_DIR, filename), 'utf8'));
    } catch (e) {
        console.warn(`Warning: Could not load ${filename}`);
        return [];
    }
}

function buildPage(filename, activeNav, content) {
    let html = TEMPLATE;
    
    // Inject content
    html = html.replace('<!-- PAGE_CONTENT -->', content);
    
    // Set active nav state
    const navKey = `<!-- ACTIVE_${activeNav.toUpperCase()} -->`;
    html = html.replace(navKey, 'active');
    
    // Clean up other nav placeholders
    html = html.replace(/<!-- ACTIVE_[A-Z]+ -->/g, '');

    // Adjust relative links for subdirectories
    if (filename.includes('/')) {
        html = html.replace(/href="index.html"/g, 'href="../index.html"');
        html = html.replace(/href="news.html"/g, 'href="../news.html"');
        html = html.replace(/href="models.html"/g, 'href="../models.html"');
        html = html.replace(/href="tutorials.html"/g, 'href="../tutorials.html"');
        // Fix asset paths if any (simple approach)
        // html = html.replace(/src="assets\//g, 'src="../assets/'); 
    }

    const outPath = path.join(DIST_DIR, filename);
    fs.writeFileSync(outPath, html);
    console.log(`Generated: ${filename}`);
}
