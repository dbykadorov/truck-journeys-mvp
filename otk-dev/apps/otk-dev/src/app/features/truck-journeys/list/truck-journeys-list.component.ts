import { Component, DestroyRef } from '@angular/core';
import {TrackJourneysRepository} from "../track-journeys.repository";
import {AsyncPipe, DatePipe} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: "app-truck-journeys",
  templateUrl: "./truck-journeys-list.component.html",
  styleUrls: ["./truck-journeys-list.component.scss"],
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatButtonModule,
    MatButton,
  ],
})
export class TruckJourneysListComponent {

  public journeys = this.trackJourneysRepository.getList();

  protected displayedColumns = [
    'id', 'title', 'description', 'arrivedOn', 'departedOn'
  ]

  public constructor(
    private readonly trackJourneysRepository: TrackJourneysRepository,
    private readonly destroyRef: DestroyRef,
  ) {
  }

  public create(): void {
    this.trackJourneysRepository
      .create()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => {
          this.journeys = this.trackJourneysRepository.getList();
        })
      )
      .subscribe();
  }
}
