(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const u="theme";function x(){const e=localStorage.getItem(u);e==="dark"||!e&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function g(){const e=document.documentElement.classList.toggle("dark");localStorage.setItem(u,e?"dark":"light")}function b(){return document.documentElement.classList.contains("dark")}const o={sun:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',github:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',externalLink:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',code:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',flask:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 9V3"/><path d="M14 9V3"/><path d="m10 9-4.5 7.5A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.7-3.5L14 9"/></svg>',brain:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>'};function f(){return`
    <header class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-surface-950/80 backdrop-blur-xl border-b border-stone-200/60 dark:border-surface-800/60 transition-colors duration-300">
      <nav class="section-container flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="group flex items-baseline gap-0.5">
          <span class="font-serif italic text-2xl font-bold text-brand-700 dark:text-brand-400 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-300 -mr-0.5">C</span>
          <span class="text-base font-semibold tracking-tight text-stone-900 dark:text-stone-200 transition-colors duration-300"></span>
          <!-- <span class="text-stone-300 dark:text-surface-700 mx-0.5 font-light">|</span> -->
          <span class="font-serif italic text-2xl font-bold text-accent-500 dark:text-accent-400 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors duration-300 -mr-0.5">O</span>
          <span class="text-base font-semibold tracking-tight text-stone-900 dark:text-stone-200 transition-colors duration-300"></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a href="#home" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Home</a>
          <a href="#projects" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Projects</a>
          <a href="#playground" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Playground</a>
          <a href="#contact" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Contact</a>
          <div class="w-px h-5 mx-2 bg-stone-200 dark:bg-surface-700"></div>
          <button id="theme-toggle" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400" aria-label="Toggle theme">
            <span id="theme-icon"></span>
          </button>
        </div>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-1.5 md:hidden">
          <button id="theme-toggle-mobile" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400" aria-label="Toggle theme">
            <span id="theme-icon-mobile"></span>
          </button>
          <button id="menu-toggle" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400" aria-label="Open menu">
            ${o.menu}
          </button>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu" class="hidden fixed inset-0 z-50 bg-stone-50 dark:bg-surface-950 md:hidden transition-colors duration-300">
        <div class="flex items-center justify-between px-4 h-16 border-b border-stone-200 dark:border-surface-800">
          <a href="#" class="group flex items-baseline gap-0.5">
            <span class="font-serif italic text-2xl font-bold text-brand-700 dark:text-brand-400">C</span>
            <span class="text-stone-300 dark:text-surface-700 mx-0.5 font-light">|</span>
            <span class="font-serif italic text-2xl font-bold text-accent-500 dark:text-accent-400">O</span>
          </a>
          <button id="menu-close" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400" aria-label="Close menu">
            ${o.close}
          </button>
        </div>
        <div class="flex flex-col items-center justify-center gap-6 h-[calc(100vh-4rem)]">
          <a href="#home" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Home</a>
          <a href="#projects" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Projects</a>
          <a href="#playground" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Playground</a>
          <a href="#contact" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Contact</a>
        </div>
      </div>
    </header>
  `}function v(){const e=document.getElementById("theme-toggle"),t=document.getElementById("theme-toggle-mobile");function a(){g(),c()}e==null||e.addEventListener("click",a),t==null||t.addEventListener("click",a),c();const s=document.getElementById("menu-toggle"),r=document.getElementById("menu-close"),n=document.getElementById("mobile-menu"),i=n==null?void 0:n.querySelectorAll("a");function l(){n==null||n.classList.add("hidden"),document.body.style.overflow=""}function p(){n==null||n.classList.remove("hidden"),document.body.style.overflow="hidden"}s==null||s.addEventListener("click",p),r==null||r.addEventListener("click",l),i==null||i.forEach(h=>h.addEventListener("click",l))}function c(){const t=b()?o.sun:o.moon,a=document.getElementById("theme-icon"),s=document.getElementById("theme-icon-mobile");a&&(a.innerHTML=t),s&&(s.innerHTML=t)}const k="https://www.linkedin.com/in/cassandra-obiagwu-1aa7a81a9/",w="https://github.com/CassieV81";function y(){return`
    <section id="home" class="min-h-screen flex items-center pt-16">
      <div class="section-container w-full">
        <div class="max-w-3xl">
          <!-- Greeting -->
          <div class="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-mono text-sm mb-6 fade-in">
            ${o.sparkles}
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
            ${d("Python")}
            ${d("LlamaIndex")}
            ${d("LLMs")}
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 mb-12 fade-in" style="animation-delay: 0.5s">
            <a href="#projects" class="btn-primary">
              View Projects ${o.arrowDown}
            </a>
            <a href="#contact" class="btn-outline">
              ${o.mail} Get in Touch
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-4 fade-in" style="animation-delay: 0.6s">
            <a href="${w}" target="_blank" rel="noopener noreferrer"
               class="p-2.5 rounded-xl border border-stone-200 dark:border-surface-800 text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 transition-all duration-200"
               aria-label="GitHub">
              ${o.github}
            </a>
            <a href="${k}" target="_blank" rel="noopener noreferrer"
               class="p-2.5 rounded-xl border border-stone-200 dark:border-surface-800 text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 transition-all duration-200"
               aria-label="LinkedIn">
              ${o.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function d(e){return`<span class="px-3 py-1 text-xs font-medium rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">${e}</span>`}const L=[{title:"Message-based Contract Processing",description:'A user-friendly solution for automated contract creation and management. Users interact through a chatbot built with Rasa, a conversational AI framework. Behind the scenes, a custom "Contract Manager" module powered by Python automates contract generation and processing using the Patti library for smart contracts. Users simply request services in plain language, and the system handles the entire contract lifecycle.',image:"project_images/closed_source.jpg",imageAlt:"Closed Source Project",viewUrl:null,codeUrl:null,techStack:["Python","Rasa","JavaScript","HTML/CSS"]},{title:"Portfolio Website",description:"This portfolio website showcases my work and skills. Originally built with Angular, it has been modernized with Vite, TypeScript, and Tailwind CSS for a faster, cleaner, and more maintainable codebase.",image:"project_images/website_page.jpeg",imageAlt:"Portfolio Website Screenshot",viewUrl:null,codeUrl:"https://github.com/CassieV81/myWebsite",techStack:["TypeScript","Tailwind CSS","Vite"]},{title:"Battleship",description:"A simplified implementation of the board game Battleship using JavaScript, HTML and CSS. Built to learn and practice unit testing with Jest.",image:"project_images/battleship_image.png",imageAlt:"Battleship Screenshot",viewUrl:"https://cassiev81.github.io/Battleship/",codeUrl:"https://github.com/CassieV81/Battleship",techStack:["JavaScript","HTML","CSS","Jest"]},{title:"Library",description:"A simple library management application where you can add, search, and edit books. Track reading progress and store information using IndexedDB.",image:"project_images/library_image.png",imageAlt:"Library Screenshot",viewUrl:"https://cassiev81.github.io/Library/",codeUrl:"https://github.com/CassieV81/Library",techStack:["JavaScript","HTML","CSS","IndexedDB"]},{title:"Tic-Tac-Toe",description:"An interactive Tic-Tac-Toe game with an AI opponent using the minimax algorithm. Features adjustable difficulty (easy, medium, hard), clear win detection with highlighted winning lines, and seamless restarts.",image:"project_images/tictactoe_image.png",imageAlt:"TicTacToe Screenshot",viewUrl:"https://cassiev81.github.io/TictactoeJS/",codeUrl:"https://github.com/CassieV81/TictactoeJS",techStack:["JavaScript","HTML","CSS"]}];function S(){return`
    <section id="projects" class="py-24">
      <div class="section-container">
        <!-- Section Header -->
        <div class="mb-12" data-animate>
          <h2 class="section-title text-stone-900 dark:text-white">Projects</h2>
          <p class="section-subtitle">
            A collection of projects from earlier explorations in web development.
          </p>
        </div>

        <!-- Project Grid -->
        <div class="grid gap-6 sm:grid-cols-2">
          ${L.map((e,t)=>$(e,t)).join("")}
        </div>
      </div>
    </section>
  `}function $(e,t){return`
    <article class="card overflow-hidden group" data-animate style="animation-delay: ${t*.1}s">
      <!-- Image -->
      <div class="aspect-video overflow-hidden bg-stone-100 dark:bg-surface-800">
        <img
          src="${e.image}"
          alt="${e.imageAlt}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <!-- Content -->
      <div class="p-5">
        <h3 class="text-lg font-semibold text-stone-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          ${e.title}
        </h3>

        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4 line-clamp-3">
          ${e.description}
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${e.techStack.map(s=>`<span class="px-2 py-0.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-surface-800 text-stone-600 dark:text-stone-400">${s}</span>`).join("")}
        </div>

        <!-- Links -->
        <div class="flex items-center gap-3">
          ${e.viewUrl?`<a href="${e.viewUrl}" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
                    ${o.externalLink} Live Demo
                  </a>`:""}
          ${e.codeUrl?`<a href="${e.codeUrl}" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">
                    ${o.code} Source
                  </a>`:""}
          ${!e.viewUrl&&!e.codeUrl?'<span class="inline-flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-600 italic">Closed source</span>':""}
        </div>
      </div>
    </article>
  `}const m=[];function C(){return`
    <section id="playground" class="py-24">
      <div class="section-container">
        <!-- Section Header -->
        <div class="mb-12" data-animate>
          <div class="flex items-center gap-3 mb-3">
            <h2 class="section-title text-stone-900 dark:text-white">Playground</h2>
            <span class="px-2.5 py-0.5 text-xs font-medium rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800">WIP</span>
          </div>
          <p class="section-subtitle">
            A space for experiments, thoughts, and interactive demos.
          </p>
        </div>

        ${m.length>0?T(m):I()}
      </div>
    </section>
  `}function T(e){return`
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${e.map((t,a)=>M(t,a)).join("")}
    </div>
  `}function M(e,t){const a=e.status==="live",s=t*.1;return`
    <div class="card p-5 group ${a?"cursor-pointer":""}" data-animate style="animation-delay: ${s}s"
         ${a&&e.url?`onclick="window.location.hash='${e.url}'"`:""}>
      <div class="flex items-start justify-between mb-3">
        <span class="px-2 py-0.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-surface-800 text-stone-600 dark:text-stone-400">${e.tag}</span>
        ${a?'<span class="flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400"><span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Live</span>':'<span class="text-xs font-medium text-stone-400 dark:text-stone-600">Coming soon</span>'}
      </div>
      <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2 ${a?"group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors":""}">${e.title}</h3>
      <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">${e.description}</p>
    </div>
  `}function I(){return`
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-animate>
      <!-- Placeholder cards -->
      <div class="card p-6 border-dashed">
        <div class="text-brand-600 dark:text-brand-400 mb-3">${o.brain}</div>
        <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2">LLM Experiments</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Interactive demos exploring prompt engineering, retrieval-augmented generation, and model behavior.
        </p>
      </div>
      <div class="card p-6 border-dashed">
        <div class="text-accent-500 dark:text-accent-400 mb-3">${o.flask}</div>
        <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2">AI Research Notes</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Thoughts and writeups from courses, papers, and hands-on work during my Master's program.
        </p>
      </div>
      <div class="card p-6 border-dashed">
        <div class="text-stone-500 dark:text-stone-400 mb-3">${o.sparkles}</div>
        <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2">Side Projects</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Small tools, visualizations, and creativity with code, things I build for fun and curiosity.
        </p>
      </div>
    </div>
  `}const j="https://formspree.io/f/mjvnpvnr";function A(){return setTimeout(E,0),`
    <section id="contact" class="py-24">
      <div class="section-container">
        <div class="max-w-2xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-12" data-animate>
            <h2 class="section-title text-stone-900 dark:text-white">Get in Touch</h2>
            <p class="section-subtitle mx-auto">
              Have a question, want to collaborate, or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <!-- Contact Form -->
          <form id="contact-form" class="card p-6 sm:p-8 space-y-6" data-animate>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="firstname" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                  First Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text" id="firstname" name="firstname" required
                  placeholder="Jane"
                  class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label for="lastname" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text" id="lastname" name="lastname"
                  placeholder="Doe"
                  class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email" id="email" name="email" required
                placeholder="jane@example.com"
                class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message" name="message" rows="5" required
                placeholder="What's on your mind?"
                class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm resize-y"
              ></textarea>
            </div>

            <!-- Status Message -->
            <div id="form-status" class="hidden text-sm font-medium text-center p-3 rounded-xl"></div>

            <button
              type="submit"
              class="btn-primary w-full justify-center"
            >
              ${o.mail} Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  `}function E(){const e=document.getElementById("contact-form"),t=document.getElementById("form-status");!e||!t||e.addEventListener("submit",async a=>{a.preventDefault();const s=e.querySelector('button[type="submit"]'),r=s.innerHTML;s.disabled=!0,s.innerHTML="Sending...";const n=new FormData(e);try{if((await fetch(j,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:`${n.get("firstname")} ${n.get("lastname")||""}`.trim(),email:n.get("email"),message:n.get("message")})})).ok)t.textContent="Message sent successfully! I'll get back to you soon.",t.className="text-sm font-medium text-center p-3 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",e.reset();else throw new Error("Failed")}catch{t.textContent="Failed to send message. Please try again or reach out on LinkedIn.",t.className="text-sm font-medium text-center p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"}finally{t.classList.remove("hidden"),s.disabled=!1,s.innerHTML=r,setTimeout(()=>{t.classList.add("hidden")},5e3)}})}const B="https://github.com/CassieV81",P="https://www.linkedin.com/in/cassandra-obiagwu-1aa7a81a9/";function H(){return`
    <footer class="border-t border-stone-200 dark:border-surface-800">
      <div class="section-container py-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-stone-500 dark:text-stone-400">
            &copy; ${new Date().getFullYear()} Cassandra Obiagwu. 
          </p>
          <div class="flex items-center gap-6">
            <a href="${B}" target="_blank" rel="noopener noreferrer" class="text-sm text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              GitHub
            </a>
            <a href="${P}" target="_blank" rel="noopener noreferrer" class="text-sm text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  `}function U(){const e=document.getElementById("app");e&&(e.innerHTML=`
    ${f()}
    <main>
      ${y()}
      ${S()}
      ${C()}
      ${A()}
    </main>
    ${H()}
  `,v(),O())}function O(){const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("slide-up"),e.unobserve(a.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll("[data-animate]").forEach(t=>{t.classList.add("opacity-0"),e.observe(t)})}x();U();
