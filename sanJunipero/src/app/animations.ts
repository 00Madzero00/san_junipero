import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const nav = [
  trigger('navbarState', [
    state('expanded', style({
      background: '#f8f9fa',
      height: '100%',
      left: '0',
      width: '100%'
    })),
    state('collapsed', style({
      background: '#f8f9fa',
      left: '-20%',
    })),
    transition('collapsed => expanded', animate('500ms ease-out')),
    transition('expanded => collapsed', animate('500ms ease-in')),
  ])
];
