import {
  Directive, ElementRef, OnInit, Input, inject
} from '@angular/core';

@Directive({
  selector: '[appFadeUp]',
  standalone: true,
})
export class FadeUpDirective implements OnInit {
  @Input('appFadeUp') delay = 0; // delay in ms

  private el = inject(ElementRef);

  ngOnInit() {
    const el: HTMLElement = this.el.nativeElement;

    Object.assign(el.style, {
      opacity:         '0',
      transform:       'translateY(16px)',
      transition:      `opacity 360ms cubic-bezier(0.4,0,0.2,1) ${this.delay}ms,
                        transform 360ms cubic-bezier(0.4,0,0.2,1) ${this.delay}ms`,
    });

    // Defer to next frame so the start state renders before we transition
    requestAnimationFrame(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    });
  }
}
