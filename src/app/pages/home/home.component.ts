import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-[72vh] flex flex-col justify-center max-w-4xl mx-auto px-6 pt-24 pb-16">

      <p class="font-mono text-sm uppercase tracking-[0.2em] text-accent mb-5 animate-fade-up">
        Software developer
      </p>

      <!-- Identity -->
      <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight
                 text-zinc-900 dark:text-white mb-8"
          style="animation: fade-up 0.4s ease 0.1s both">
        Mohamad<br>Nornazmi
      </h1>

      <!-- Value proposition -->
      <h2 class="font-display text-3xl sm:text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 mb-5"
          style="animation: fade-up 0.4s ease 0.2s both">
        I build things <span class="text-accent">for the web.</span>
      </h2>

      <!-- Summary -->
      <p class="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-10"
         style="animation: fade-up 0.4s ease 0.3s both">
        Full-stack developer building maintainable web applications with Angular,
        ASP.NET, and SQL—turning operational needs into reliable, user-friendly systems.
      </p>

    </section>

    <section class="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <div class="max-w-2xl">
        <p class="font-mono text-xs uppercase tracking-widest text-accent mb-3">About & availability</p>
        <h2 class="font-display text-3xl font-bold text-zinc-900 dark:text-white mb-4">Built around real-world systems.</h2>
        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          I began by building and improving document management, helpdesk, and call-center systems. That experience shaped how I approach software: clear workflows, dependable architecture, and tools that make daily work easier.
        </p>
        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          Currently open to full-stack development opportunities and project collaborations.
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <a routerLink="/about" fragment="contact"
             class="px-5 py-2.5 rounded-xl bg-blue-600 text-white dark:bg-black dark:text-white font-medium text-sm
                    hover:bg-blue-700 dark:hover:bg-gray-900 active:scale-95 transition-all duration-150 shadow-lg shadow-blue-200 dark:shadow-black/30">
            Get in touch
          </a>
          <a routerLink="/about" fragment="experience" class="text-sm font-medium text-accent hover:underline">
            Explore my experience →
          </a>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-accent mb-3">Selected work</p>
          <h2 class="font-display text-3xl font-bold text-zinc-900 dark:text-white">Experience in practice.</h2>
        </div>
        <a routerLink="/projects" class="text-sm font-medium text-accent hover:underline">
          See all projects →
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-5">
        <a *ngFor="let project of featuredProjects()"
           [routerLink]="['/projects', project.id]"
           class="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6
                  hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-indigo-100
                  dark:hover:shadow-indigo-950/30 transition-all duration-200">
          <h3 class="font-display text-xl font-bold text-zinc-900 dark:text-white mb-3">{{ project.title }}</h3>
          <p class="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-5">{{ project.tagline }}</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span *ngFor="let tech of project.tech.slice(0, 3)"
                  class="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-50 dark:bg-indigo-950/60 text-accent">
              {{ tech }}
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16">
      <p class="font-mono text-xs uppercase tracking-widest text-accent mb-3">Experience snapshot</p>
      <h2 class="font-display text-3xl font-bold text-zinc-900 dark:text-white mb-8">How I contribute.</h2>
      <div class="grid sm:grid-cols-3 gap-5">
        <article class="rounded-2xl bg-blue-50 dark:bg-blue-950/30 p-6 border border-blue-100 dark:border-blue-900">
          <h3 class="font-semibold text-zinc-900 dark:text-white mb-2">Full-stack delivery</h3>
          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Build responsive interfaces and dependable application features from idea to release.</p>
        </article>
        <article class="rounded-2xl bg-green-50 dark:bg-green-950/30 p-6 border border-green-100 dark:border-green-900">
          <h3 class="font-semibold text-zinc-900 dark:text-white mb-2">Business systems</h3>
          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Simplify everyday workflows with structured data, clear status tracking, and practical reporting.</p>
        </article>
        <article class="rounded-2xl bg-purple-50 dark:bg-purple-950/30 p-6 border border-purple-100 dark:border-purple-900">
          <h3 class="font-semibold text-zinc-900 dark:text-white mb-2">Reliable operations</h3>
          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Maintain production systems through debugging, performance improvements, and thoughtful support.</p>
        </article>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  featuredProjects = signal<Project[]>([]);

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.featuredProjects.set(projects.slice(0, 3));
    });
  }
}
