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
           class="px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm
                  hover:bg-indigo-500 active:scale-95 transition-all duration-150 shadow-lg
                  shadow-indigo-200 dark:shadow-indigo-900/30">
          View projects →
        </a>
        <a routerLink="/about"
           class="px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                  text-zinc-700 dark:text-zinc-300 font-medium text-sm
                  hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 transition-all duration-150">
          About me
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {}
