import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'track-journeys',
    loadChildren: () => import('./features/truck-journeys').then((m) => m.TruckJourneysModule),
  }
];
