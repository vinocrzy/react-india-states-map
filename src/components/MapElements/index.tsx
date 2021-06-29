import * as React from "react";

import DataMap from "./DataMap";
import { MapLayout } from "../../index";

const DEFAULT_WIDTH = 400;

interface MapElementsProps {
  mouseMoveOnDatamap(data: any): void;
  mouseEnterOnDatamap(): void;
  mouseLeaveDatamap(): void;
  onClick(data: any, name: string): void;
  mouseEnterOnState(name: string, value: number): void;
  regionData: any;
  mapLayout: MapLayout;
  topoData: any[];
  infoWindowPos: {
    x: number;
    y: number;
  };
  activeState: {
    data: any;
    name: string;
  };
}

const MapElements = (props: MapElementsProps) => {
  const svgWidth = DEFAULT_WIDTH;
  const svgHeight = svgWidth;

  const { mapLayout, regionData, onClick, activeState } = props;
  const { noDataColor, borderColor, hoverColor, hoverBorderColor } = mapLayout;

  // console.log(regionData);

  const svgStyle: React.CSSProperties = {
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <svg
      style={svgStyle}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 400 400"
    >
      <g id="root-svg-group">
        <DataMap
          topoData={props.topoData}
          regionData={regionData}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          onClick={onClick}
          noDataColor={noDataColor}
          borderColor={borderColor}
          hoverColor={hoverColor}
          hoverBorderColor={hoverBorderColor}
          mouseMoveOnDatamap={props.mouseMoveOnDatamap}
          mouseEnterOnDatamap={props.mouseEnterOnDatamap}
          mouseLeaveDatamap={props.mouseLeaveDatamap}
          mouseEnterOnState={props.mouseEnterOnState}
          activeState={activeState}
        />
      </g>
    </svg>
  );
};

const arePropsEqual = (
  prevProps: MapElementsProps,
  nextProps: MapElementsProps
) => {
  return (
    prevProps.infoWindowPos.x === nextProps.infoWindowPos.x &&
    prevProps.infoWindowPos.y === nextProps.infoWindowPos.y &&
    prevProps.regionData === nextProps.regionData
  );
};

export default React.memo(MapElements, arePropsEqual);
