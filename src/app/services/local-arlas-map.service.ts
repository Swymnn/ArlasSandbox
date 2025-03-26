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

  getMeshs(): Observable<FeatureCollection<Geometry>> {
    return of({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: 1,
            name: "Mesh of Area of Interest 1",
            category: "urban",
            area: 2.5,
          },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-9.000, 42.000],
              [4.000, 42.000],
              [4.000, 36.000],
              [-9.000, 36.000],
              [-9.000, 42.000]
            ]]
          }
        }
      ]
    })
  }
}
