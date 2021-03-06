import { Geometry, MeshPhongMaterial, Fog, Light, Vector3, Material, Vector2 } from 'three';
import Cell from '../grids/Cell';
import Tile from '../grids/Tile';

// Should return TRUE/FALSE
export type heuristic = (origin: Cell, next: Cell) => boolean;

/* CONFIG OBJECT INTERFACES */
export interface TileSettings {
  cell: Cell;
  geometry: Geometry;
  material?: MeshPhongMaterial;
  scale?: number;
};

export interface GridSettings {
  gridShape?: string;
  gridSize?: number;
  cellSize?: number;
  cellShape?: string;
};

export interface MapSettings {
  tileScale?: number;
  material?: Material;
  extrudeSettings?: ExtrudeSettings;
}

export interface ExtrudeSettings {
  amount?: number;
  bevelEnabled?: boolean;
  bevelSegments?: number;
  steps?: number;
  bevelSize?: number;
  bevelThickness?: number;
};

export interface PathfinderSettings {
  allowDiagonal?: boolean;
  heuristicFilter?: heuristic;
}

export interface ViewSettings {
  element?: HTMLElement;
  alpha?: boolean;
  antialias?: boolean;
  clearColor?: number;
  sortObjects?: boolean;
  fog?: Fog;
  light?: Light;
  lightPosition?: Vector3;
  cameraPosition?: Vector3; 
  sceneMarginSize?: number;
  cameraControlSettings?: CameraControlSettings;
}

export interface CameraControlSettings {
  controlled?: boolean;
  enableDamping?: boolean;
  dampingFactor?: number;
  minDistance?: number;
  maxDistance?: number;
  zoomSpeed?: number;
  hotEdges?: boolean;
  autoRotate?: boolean;
  screenSpacePanning?: boolean;
  minPolarAngle?: number;
  maxPolarAngle?: number;
  maxAzimuthAngle?: number;
  minAzimuthAngle?: number;
  horizontalRotation?: boolean;  
}

export interface GridJSONData {
  size: number;
  cellSize: number;
  cells: Cell[];
  extrudeSettings: ExtrudeSettings;
  autogenerated: boolean;
}

/*******************************************/

/*MAP INTERFACES*/
export interface ViewController {
  dispose(): void;
  updateControlSettings(config: CameraControlSettings): void;
  toggleControls(): void;
  toggleHorizontalRotation(bool: boolean): void;
  panInDirection(direction: Vector2): void;
  panCameraTo(tile: Tile | Cell, durationMs: number): void;
}