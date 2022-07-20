module.exports = function ({ wmtsUrl, tmsUrl, wmsUrl, wcsUrl, k2Url, s3Url }) {
  return [{
    name: 'Layers.FIRMS',
    description: 'Layers.FIRMS_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          FIRMS: 'FIRMS',
          FIRMS_DESCRIPTION: 'Points chauds (Fire Information for Resource Management System)'
        }
      },
      en: {
        Layers: {
          FIRMS: 'FIRMS',
          FIRMS_DESCRIPTION: 'Thermal hotspots (Fire Information for Resource Management System)'
        }
      }
    },
    tags: [
      'fire', 'measure'
    ],
    icon: 'las la-fire',
    iconUrl: 'https://firms.modaps.eosdis.nasa.gov/images/nasa_logo_white.png',
    attribution: "<a href='https://www.earthdata.nasa.gov/learn/find-data/near-real-time/firms'>NASA FIRMS</a>",
    type: 'OverlayLayer',
    chromajs: {
      scale: 'OrRd',
      domain: [0, 100]
    },
    units: ['MW'],
    service: 'firms',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    from: 'P-7D',
    to: 'PT-1H',
    every: 'PT1H',
    queryFrom: 'PT-24H',
    leaflet: {
      type: 'geoJson',
      realtime: true,
      tiled: true,
      minZoom: 10,
      cluster: { disableClusteringAtZoom: 10 },
      'marker-type': 'circleMarker',
      radius: 8,
      'stroke-width': 0,
      'stroke-opacity': 0,
      'fill-opacity': 0.6,
      'fill-color': '<%= chroma.scale(\'OrRd\').domain([0, 100])(properties.frp).hex() %>',
      template: ['fill-color']
      /*
      type: 'heatmap',
      cfg: {
        valueField: 'frp',
        min: 0,
        max: 100
      },
      // The unit is in pixel, meaning
      // 1 pixel radius (2 pixel diameter) at zoom level 0
      // ...
      // 64 pixel radius (128 pixel diameter) at zoom level 6
      // ...
      // We'd like an event to cover a range expressed as Km
      // According to https://groups.google.com/forum/#!topic/google-maps-js-api-v3/hDRO4oHVSeM
      // this means 1 pixel at level 7 so at level 0 we get 1 / 2^7
      radius: 0.5 * 0.0078,
      minOpacity: 0,
      maxOpacity: 0.5,
      // scales the radius based on map zoom
      scaleRadius: true,
      // uses the data maximum within the current map boundaries
      // (there will always be a red spot with useLocalExtremas true)
      useLocalExtrema: true,
      // The higher the blur factor is, the smoother the gradients will be
      blur: 0.8
      */
    },
    cesium: {
      type: 'geoJson',
      realtime: true,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'fire-station',
      'marker-color': '#f09078'
    }
  }]
}
