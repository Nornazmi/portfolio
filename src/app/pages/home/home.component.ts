import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto px-6 py-24">

      <!-- Eyebrow -->
      <span class="font-mono text-sm text-accent tracking-widest uppercase mb-6 animate-fade-up">
        Available for work
      </span>

      <!-- Headline -->
      <h1 class="font-display text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight
                 text-zinc-900 dark:text-white mb-6"
          style="animation: fade-up 0.4s ease 0.1s both">
        I build things<br>
        <span class="text-accent">for the web.</span>
      </h1>

      <!-- Sub -->
      <p class="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-10"
         style="animation: fade-up 0.4s ease 0.2s both">
        Full-stack developer focused on clean architecture, thoughtful UX,
        and shipping products that actually work.
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-3" style="animation: fade-up 0.4s ease 0.3s both">
        <a routerLink="/projects"
           class="px-6 py-3 rounded-xl bg-blue-600 text-white dark:bg-black dark:text-white font-medium text-sm
                  hover:bg-blue-700 dark:hover:bg-gray-900 active:scale-95 transition-all duration-150 shadow-lg
                  shadow-blue-200 dark:shadow-black/30">
          View projects →
        </a>
        <a routerLink="/about"
           class="px-6 py-3 rounded-xl border border-accent dark:border-gray-600
                  text-accent dark:text-gray-300 font-medium text-sm
                  hover:bg-accent hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                  active:scale-95 transition-all duration-150">
          About me
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {}
