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

import { ArlasDataLayer, ArlasMapSource, MapLayers, VisualisationSetConfig } from 'arlas-map';

export const defaultBasemapStyle = {
  name: 'Basic',
  styleFile: 'https://api.maptiler.com/maps/basic/style.json?key=xIhbu1RwgdbxfZNmoXn4',
  image: 'https://cloud.maptiler.com/static/img/maps/basic.png'
};

export function getStyle(name: string) {
  return ({
    name,
    styleFile: `https://api.maptiler.com/maps/${name}/style.json?key=xIhbu1RwgdbxfZNmoXn4`,
    image: `https://cloud.maptiler.com/static/img/maps/${name}.png`
  })
}

export const basemapStyles = [
  getStyle('basic'),
  getStyle('bright'),
  getStyle('hybrid')
];

export const geojsondata = {
  'type': 'FeatureCollection',
  'features': []
};

export const mapLayers: MapLayers<ArlasDataLayer> = {
  layers: [{
    id: 'arlas_id:polygon_layer',
    type: 'fill',
    source: 'polygon_map',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'fill-opacity': 1,
      'fill-color': '#000000'
    },
    metadata: {
      collection: 'polygon',
      collectionDisplayName: 'polygon',
      stroke: {
        'color': '#000000',
        'width': 3,
        'opacity': 1
      },
      isScrollableLayer: true
    },
  },
    {
      id: 'arlas_id:mesh_layer',
      type: 'fill',
      source: 'mesh_map',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'fill-opacity': 1,
        'fill-color': '#000000'
      },
      metadata: {
        collection: 'mesh',
        collectionDisplayName: 'mesh',
        stroke: {
          'color': '#000000',
          'width': 3,
          'opacity': 1
        },
        isScrollableLayer: true
      },
    }],
  events: {
    zoomOnClick: new Set(),
    emitOnClick: new Set(),
    onHover: new Set(),
  }
};

export const drawOptions = {
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true
  },
  userProperties: true,
};

export const mapDataSources = new Set(['polygon_map', 'mesh_map']);

export const mapSources: Array<ArlasMapSource<any>> = [
  {
    id: 'arlas_id:polygon_layer',
    source: 'polygon_map',
  },
  {
    id: 'arlas_id:mesh_layer',
    source: 'mesh_map',
  },
];

export const visualisationSets: Array<VisualisationSetConfig> = [
  {
    name: 'Polygon',
    layers: [
      'arlas_id:polygon_layer'
    ],
    enabled: true
  },
  {
    name: 'Mesh',
    layers: [
      'arlas_id:mesh_layer',
    ],
    enabled: false
  }
];
