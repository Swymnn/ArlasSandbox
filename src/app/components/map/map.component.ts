// <youcomponent>.component.ts
/*
 * Licensed to Gisaïa under one or more contributor
 * license agreements. See the NOTICE.txt file distributed with
 * this work for additional information regarding copyright
 * ownership. Gisaïa licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import { Component, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import {
  ARLAS_VSET,
  ArlasMapComponent,
  MapImportComponent,
  MapSettingsComponent,
  VisualisationSetConfig
} from 'arlas-map';
import {
  defaultBasemapStyle, basemapStyles, geojsondata, drawOptions, mapDataSources, mapLayers,
  mapSources, visualisationSets
} from '../../../utils/map.constants';
import { FeatureCollection, Geometry } from 'geojson';
import { LocalArlasMapService } from '../../services/local-arlas-map.service';
import { DefaultMapSettingsService } from '../../services/default-map-settings.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent<L, S, M>  {

  @ViewChild('demoMap', { static: true })
  public mapComponent!: ArlasMapComponent<L, S, M>;

  @ViewChild('demoImportMap', { static: true })
  public mapImportComponent!: MapImportComponent<L, S, M>;

  @ViewChild('mapSettings', { static: true })
  public mapSettings!: MapSettingsComponent;

  public modeChoice = 'all';
  public idToSelect: number = 0;
  public actionDisabled = false;
  public drawEnabled = true;
  public defaultBasemapStyle = defaultBasemapStyle
  public basemapStyles = basemapStyles;

  public geojsondata = geojsondata;

  public mapLayers = mapLayers;
  public drawOptions = drawOptions;

  public mapDataSources = mapDataSources;
  public mapSources = mapSources
  public visualisationSets: Array<VisualisationSetConfig> = visualisationSets;

  public visibilityUpdater = new Subject<Map<string, boolean>>();

  public drawData: FeatureCollection<Geometry> = {
    'type': 'FeatureCollection',
    'features': []
  };

  public meshDataToDraw: FeatureCollection<Geometry> = {
    'type': 'FeatureCollection',
    'features': []
  }

  public polygonDataToDrow: FeatureCollection<Geometry> = {
    'type': 'FeatureCollection',
    'features': []
  }

  public constructor(
    private readonly localArlasMapService: LocalArlasMapService,
    private readonly defaultMapSettingsService: DefaultMapSettingsService
  ) { }

  public polygonChange(event: any) {
    console.log(event);
  }

  public getWKT() {
    switch (this.modeChoice) {
      case 'all':
        console.log(this.mapComponent.getAllPolygon('wkt'));
        break;
      case 'selected':
        console.log(this.mapComponent.getSelectedPolygon('wkt'));
        break;
    }
  }

  public getGeojson() {
    switch (this.modeChoice) {
      case 'all':
        console.log(JSON.stringify(this.mapComponent.getAllPolygon('geojson')));
        break;
      case 'selected':
        console.log(JSON.stringify(this.mapComponent.getSelectedPolygon('geojson')));
        break;
    }
  }

  public switchToDrawMode(mode?: string | undefined, opts?: any) {
    this.mapComponent.switchToDrawMode(mode, opts);
  }

  public delete() {
    this.mapComponent.deleteSelectedItem();
  }

  public polygonSelect(event: any) {
    console.log(event);
  }

  public onAoiChanged(event: any) {
    this.drawData = event;
    console.log(event);
  }

  public transformRequest = (url: string, resourceType: string) => ({
    url: url.replace('http', 'http'),
  });

  public openSettings() {
    this.mapSettings.openDialog(this.defaultMapSettingsService);
  }

  public onMapLoaded() {
    this.localArlasMapService.getAois().subscribe({
      next: (aois) => {
        this.polygonDataToDrow = aois;
      }
    });

    this.localArlasMapService.getMeshs().subscribe({
      next: (meshs) => {
        this.meshDataToDraw = meshs;
      }
    });

    this.mapComponent.visualisations.subscribe({
      next: (layers: Set<string>) => this.updateDrawData(layers),
      error: (err: never) => console.error(err)
    });

    const layersDisplayed = visualisationSets
      .filter(vset => vset.enabled === true)
      .map(vset => vset.layers[0]);

    this.updateDrawData(new Set(layersDisplayed))
  }

  private updateDrawData(layers: Set<string>) {
    const polygonLayerName = 'arlas_id:polygon_layer';
    const meshLayerName = 'arlas_id:mesh_layer';

    const updatedDrawData: FeatureCollection<Geometry> = {
      type: 'FeatureCollection',
      features: []
    }

    if (layers.has(polygonLayerName)) {
      updatedDrawData.features = updatedDrawData.features.concat(this.polygonDataToDrow.features);
    }

    if (layers.has(meshLayerName)) {
      updatedDrawData.features = updatedDrawData.features.concat(this.meshDataToDraw.features);
    }

    this.drawData = updatedDrawData;
  }
}
