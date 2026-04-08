import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="theme.toggle()"
      [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
      class="relative w-9 h-9 flex items-center justify-center rounded-lg border
             border-zinc-200 dark:border-zinc-700 bg-transparent
             text-zinc-500 dark:text-zinc-400
             hover:bg-zinc-100 dark:hover:bg-zinc-800
             hover:text-zinc-900 dark:hover:text-zinc-100
             hover:border-accent transition-all duration-150">

      <!-- Sun -->
      <svg *ngIf="theme.isDark()" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="transition-transform duration-300 hover:rotate-45">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41
                 M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>

      <!-- Moon -->
      <svg *ngIf="!theme.isDark()" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
      </svg>
    </button>
  `
})
export class ThemeToggleComponent {
  theme = inject(ThemeService);
}
