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

import { VisualisationSetConfig } from 'arlas-map';

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

export const mapLayers = {
  layers: [{
    id: 'arlas_id:polygon_layer',
    type: 'fill',
    source: 'feature-_geometry_wkt-window-demo_eo',
    minzoom: 0,
    maxzoom: 22,
    layout: {
      visibility: 'visible'
    },
    paint: {
      'fill-opacity': 0,
      'fill-color': [
        'match',
        [
          'get',
          'metadata_ObservationContext_processusUsed_platform'
        ],
        'SENTINEL 2',
        '#ff61ec',
        'PLEIADES',
        '#ec4040',
        'SPOT 6',
        '#0087e9',
        'SPOT 5',
        '#0041ff',
        'SPOT 4',
        '#00b4ff',
        'SPOT 7',
        '#1102c6',
        'TerraSAR-X 1',
        '#5e5e5e',
        'ALOS2',
        '#00c926',
        'SENTINEL 2A',
        '#ff0094',
        'DRONE',
        '#ffe300',
        '#9d9ca9'
      ]
    },
    metadata: {
      collection: 'demo_eo',
      'collection-display-name': 'demo_eo',
      stroke: {
        'color': [
          'get',
          'metadata_ObservationContext_processusUsed_platform_arlas__color'
        ],
        'width': 3,
        'opacity': 0.7
      },
      'is-scrollable-layer': true
    },
    filter: [
      'all',
      [
        'all'
      ]
    ]
  },
    {
      id: 'arlas_id:mesh_layer',
      type: 'symbol',
      source: 'cluster-_centroid_wkt-Coarse-tile-centroid-demo_eo',
      minzoom: 0,
      maxzoom: 15,
      layout: {
        visibility: 'visible',
        'text-field': [
          'get',
          'count_:_arlas__short_format'
        ],
        'text-font': [
          'Open Sans Bold',
          'Arial Unicode MS Bold'
        ],
        'text-size': [
          'interpolate',
          [
            'linear'
          ],
          [
            'get',
            'count_:normalized'
          ],
          0,
          8,
          0.2,
          13.2,
          0.4,
          18.4,
          0.6,
          23.6,
          0.8,
          28.8,
          1,
          34
        ],
        'text-rotate': 0,
        'text-allow-overlap': true,
        'text-anchor': 'center',
        'symbol-placement': 'point'
      },
      paint: {
        'text-color': '#ffffff',
        'text-opacity': 1,
        'text-halo-color': '#000',
        'text-halo-width': 1.3,
        'text-halo-blur': 2,
        'text-translate': [
          0,
          0
        ]
      },
      metadata: {
        'collection': 'demo_eo',
        'collection-display-name': 'demo_eo'
      },
      filter: [
        'all',
        [
          'all'
        ]
      ]
    }],
  events: {
    zoomOnClick: [],
    emitOnClick: [],
    onHover: []
  }
} as any;

export const drawOptions = {
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true
  },
  userProperties: true,
};

export const mapDataSources = new Set(['feature-_geometry_wkt-window-demo_eo', 'cluster-_centroid_wkt-Coarse-tile-centroid-demo_eo']);

export const mapSources = [
  {
    'id': 'arlas_id:polygon_layer',
    'name': 'Polygon',
    'source': 'feature-_geometry_wkt-window-demo_eo',
    'minzoom': 0,
    'maxzoom': 22,
    'include_fields': [
      'metadata.ObservationContext.processusUsed.platform'
    ],
    'short_form_fields': [],
    'colors_from_fields': [
      'metadata.ObservationContext.processusUsed.platform'
    ],
    'provided_fields': [],
    'normalization_fields': [],
    'metrics': [],
    'returned_geometry': '_geometry_wkt',
    'render_mode': 'window'
  },
  {
    'id': 'arlas_id:mesh_layer',
    'name': 'Mesh',
    'source': 'cluster-_centroid_wkt-Coarse-tile-centroid-demo_eo',
    'minzoom': 0,
    'maxzoom': 15,
    'include_fields': [],
    'short_form_fields': [],
    'colors_from_fields': [],
    'provided_fields': [],
    'normalization_fields': [],
    'metrics': [
      {
        'field': '',
        'metric': 'count',
        'normalize': true
      },
      {
        'field': '',
        'metric': 'count',
        'normalize': false,
        'short_format': true
      }
    ],
    'agg_geo_field': '_centroid_wkt',
    'aggType': 'tile',
    'granularity': 'Coarse',
    'minfeatures': 1000,
    'aggregated_geometry': 'centroid'
  }
];

export const visualisationSets: Array<VisualisationSetConfig> = [
  {
    'name': 'Polygon',
    'layers': [
      'arlas_id:polygon_layer'
    ],
    'enabled': true
  },
  {
    'name': 'Mesh',
    'layers': [
      'arlas_id:mesh_layer',
    ],
    'enabled': false
  }
];
