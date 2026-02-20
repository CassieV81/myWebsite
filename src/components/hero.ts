import { icons } from '../icons';

const LINKEDIN = 'https://www.linkedin.com/in/cassandra-obiagwu-1aa7a81a9/';
const GITHUB = 'https://github.com/CassieV81';

export function renderHero(): string {
  return `
    <section id="home" class="min-h-screen flex items-center pt-16">
      <div class="section-container w-full">
        <div class="max-w-3xl">
          <!-- Greeting -->
          <div class="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-mono text-sm mb-6 fade-in">
            ${icons.sparkles}
            <span>Hello, I'm</span>
          </div>

          <!-- Name -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-white mb-4 fade-in" style="animation-delay: 0.1s">
            Cassandra<br/>
            <span class="text-gradient">Obiagwu</span>
          </h1>

          <!-- Tagline -->
          <p class="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 mb-6 fade-in" style="animation-delay: 0.2s">
            AI Developer &amp; Python Engineer
          </p>

          <!-- Description -->
          <p class="text-base text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed mb-8 fade-in" style="animation-delay: 0.3s">
            Building intelligent systems with Python, LLMs, and applied AI.
            Currently pursuing a Master's in AI while working as an AI developer where I am focused on making complex technology practical and accessible.
          </p>

          <!-- Focus areas -->
          <div class="flex flex-wrap gap-2 mb-10 fade-in" style="animation-delay: 0.4s">
            ${renderTag('Python')}
            ${renderTag('LlamaIndex')}
            ${renderTag('LLMs')}
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 mb-12 fade-in" style="animation-delay: 0.5s">
            <a href="#projects" class="btn-primary">
              View Projects ${icons.arrowDown}
            </a>
            <a href="#contact" class="btn-outline">
              ${icons.mail} Get in Touch
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-4 fade-in" style="animation-delay: 0.6s">
            <a href="${GITHUB}" target="_blank" rel="noopener noreferrer"
               class="p-2.5 rounded-xl border border-stone-200 dark:border-surface-800 text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 transition-all duration-200"
               aria-label="GitHub">
              ${icons.github}
            </a>
            <a href="${LINKEDIN}" target="_blank" rel="noopener noreferrer"
               class="p-2.5 rounded-xl border border-stone-200 dark:border-surface-800 text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 transition-all duration-200"
               aria-label="LinkedIn">
              ${icons.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTag(label: string): string {
  return `<span class="px-3 py-1 text-xs font-medium rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">${label}</span>`;
}
