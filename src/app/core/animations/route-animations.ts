import {
  trigger,
  transition,
  style,
  animate,
  query,
  animateChild,
  group,
} from '@angular/animations';

// Shared timing - change once to retime everything
const DURATION = '320ms';
const EASING   = 'cubic-bezier(0.4, 0, 0.2, 1)'; // Material standard easing

// Reusable style snapshots
const hidden  = style({ opacity: 0, transform: 'translateY(14px)' });
const visible = style({ opacity: 1, transform: 'translateY(0)'    });

// - Slide-up fade (default, used for most route changes) -
export const slideUpFade = trigger('routeAnimations', [

  // Entering page slides up and fades in
  transition('* => *', [
    // Freeze the leaving page in place while new page enters
    query(':leave', [
      style({ position: 'absolute', width: '100%', opacity: 1 })
    ], { optional: true }),

    // Start the entering page invisible and slightly below
    query(':enter', [hidden], { optional: true }),

    group([
      // Fade out the leaving page quickly
      query(':leave', [
        animate(`${+DURATION.replace('ms','')/2}ms ${EASING}`,
          style({ opacity: 0 }))
      ], { optional: true }),

      // Slide up the entering page
      query(':enter', [
        animate(`${DURATION} ${EASING}`, visible)
      ], { optional: true }),
    ]),

    // Clean up leaving page after animation
    query(':leave', animateChild(), { optional: true }),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

// - Stagger children (use inside page components) -
export const staggerChildren = trigger('staggerIn', [
  transition(':enter', [
    query('.stagger-item', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate(`400ms ${EASING}`,
        style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true })
  ])
]);
