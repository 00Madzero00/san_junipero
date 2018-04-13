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
      left: '-50%',
    })),
    transition('collapsed => expanded', animate('700ms ease-in')),
    transition('expanded => collapsed', animate('700ms ease-out')),
  ])
];
