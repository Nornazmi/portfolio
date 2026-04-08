import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  // Read saved preference, fall back to OS preference
  isDark = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Whenever isDark changes, sync to <body> class + localStorage
    effect(() => {
      const dark = this.isDark();
      document.body.classList.toggle('dark', dark);
      localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
    });
  }

  toggle() {
    this.isDark.update(v => !v);
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) return saved === 'dark';
    // Fall back to OS-level preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
