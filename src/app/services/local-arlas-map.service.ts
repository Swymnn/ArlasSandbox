import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeatureCollection, Geometry } from 'geojson';

@Injectable({
  providedIn: 'root'
})
export class LocalArlasMapService {

  constructor() { }

  getAois(): Observable<FeatureCollection<Geometry>> {
    return of({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: 1,
            name: "Area of Interest 1",
            category: "urban",
            area: 2.5,
          },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-3.000, 48.000],
              [10.000, 48.000],
              [10.000, 40.000],
              [-3.000, 40.000],
              [-3.000, 48.000]
            ]]
          }
        }
      ]
    })
  }
}
