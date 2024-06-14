import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITruckJourney} from "@otk-dev/shared";

@Injectable()
export class TrackJourneysRepository {
  public constructor(
    private http: HttpClient,
  ) {
  }

  public getList(): Observable<ITruckJourney[]> {
    return this.http.get('http://localhost:3000/api/track-journeys/list') as Observable<ITruckJourney[]>;
  }

  public create(): Observable<ITruckJourney[]> {
    const dto = {
      "title": Math.random(),
      "description": Math.random(),
      "departedOn": (new Date().toDateString()),
      "arrivedOn": (new Date().toDateString()),
      "createdBy": Math.random(),
    }

    return this.http.post('http://localhost:3000/api/track-journeys/create', dto) as Observable<ITruckJourney[]>;
  }
}
