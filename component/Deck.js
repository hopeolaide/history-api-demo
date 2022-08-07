import React, {useState} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {MapView} from '@deck.gl/core';
import {IconLayer} from '@deck.gl/layers';
import Image from 'next/image';

import IconClusterLayer from './icon-cluster-layer';

// Source data CSV
const DATA_URL = 'museum-objects.json'
// 'meteorites.json'
  // 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json'; // eslint-disable-line

const MAP_VIEW = new MapView({repeat: true});
const INITIAL_VIEW_STATE = {
  longitude: -35,
  latitude: 36.7,
  zoom: 1.8,
  maxZoom: 20,
  pitch: 0,
  bearing: 0
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';


function renderTooltip(info) {
  const {object, x, y} = info;


  // {"coordinates":[40.070900,-74.855087],"name":"Tea Spoon","objectID":"8435","primaryImage": "https://images.metmuseum.org/CRDImages/ad/original/97954.jpg", "objectDate": "ca. 1790"}

  if (info.objects) {
    return (
      // <div className="tooltip interactive" style={{left: x, top: y}}>
      <div className="tooltip interactive" style={{left: x, top: y}}>

        {/* {info.objects.map(({name, year, mass, class: meteorClass}) => { */}
        {info.objects.map(({name, objectID, primaryImage, objectDate, culture}) => {

          return (
            <div key={objectID}>
            <h5>{name}</h5>
            <div>Object Id: {objectID}</div>
            <div>Image: {primaryImage}</div>
            <div>Date: {objectDate || 'unknown'}</div>
            <div>Culture: {culture || 'unknown'}</div>
          </div>
            // <div key={name}>
            //   <h5>{name}</h5>
            //   <div>Year: {year || 'unknown'}</div>
            //   <div>Class: {meteorClass}</div>
            //   <div>Mass: {mass}g</div>
            // </div>
          );
        })}
      </div>
    );
  }

  if (!object) {
    return null;
  }

  return object.cluster ? (
    <div className="tooltip" style={{left: x, top: y}}>
      {object.point_count} records
    </div>
  ) : (
    <div className="tooltip" style={{left: x, top: y}}>
      {/* {object.name} {object.year ? `(${object.year})` : ''} */}
      
      <h3>
        {object.name}
      </h3>
      <div>
        Date: {object.objectDate ? `${object.objectDate}` : ''} 
      </div>
      <div>
        Culture: {object.culture ? `${object.culture}` : ''} 
      </div>
      <div>
        {/* <img src={object.primaryImage} alt="object image" width={144} height={32} /> */}
        Image(s): 
        <div>
          <img src={object.primaryImage} alt="object image" width={500} height={175} />

          {/* <Image src={object.primaryImage} alt="object image" width={500} height={75} /> */}
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-deprecated */
export default function Deck({
  data = DATA_URL,
  iconMapping = 'location-icon-mapping.json',
  iconAtlas = 'location-icon-atlas.png',
  showCluster = true,
  mapStyle = MAP_STYLE
}) {
  const [hoverInfo, setHoverInfo] = useState({});

  const hideTooltip = () => {
    setHoverInfo({});
  };
  const expandTooltip = info => {
    if (info.picked && showCluster) {
      setHoverInfo(info);
    } else {
      setHoverInfo({});
    }
  };

  const layerProps = {
    data,
    pickable: true,
    getPosition: d => d.coordinates,
    iconAtlas,
    iconMapping,
    onHover: !hoverInfo.objects && setHoverInfo
  };

  const layer = showCluster
    ? new IconClusterLayer({...layerProps, id: 'icon-cluster', sizeScale: 40})
    : new IconLayer({
        ...layerProps,
        id: 'icon',
        getIcon: d => 'marker',
        sizeUnits: 'meters',
        sizeScale: 2000,
        sizeMinPixels: 6
      });

  return (
    <DeckGL
      layers={[layer]}
      views={MAP_VIEW}
      initialViewState={INITIAL_VIEW_STATE}
      controller={{dragRotate: false}}
      onViewStateChange={hideTooltip}
      onClick={expandTooltip}
    >
      <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />

      {renderTooltip(hoverInfo)}
    </DeckGL>
  );
}
