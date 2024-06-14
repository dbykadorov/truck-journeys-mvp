import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TruckJourneysListComponent} from "./list/truck-journeys-list.component";
import {TrackJourneysRepository} from "./track-journeys.repository";
import {HttpClientModule} from "@angular/common/http";

const ROUTES: Routes = [
  {
    path: '',
    component: TruckJourneysListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule],
  providers: [
    TrackJourneysRepository,
  ]
})
export class TruckJourneysModule {
}
