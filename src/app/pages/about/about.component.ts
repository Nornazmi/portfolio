import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="max-w-2xl mx-auto px-6 py-20 animate-fade-up">
      <h1 class="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        About me
      </h1>
      <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
        A short bio about your background, what drives you, and what you're
        currently working on. Keep it human.
      </p>
    </section>
  `
})
export class AboutComponent {}
