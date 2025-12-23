export enum AppMode {
  TREE = 'TREE',
  SCATTER = 'SCATTER',
  FOCUS = 'FOCUS',
}

export interface HandState {
  detected: boolean;
  x: number;
  y: number;
  depthFactor: number; // 0.1 (far) to 0.4 (close)
  pinchDist: number;
  avgFingerDist: number;
  gesture: 'NONE' | 'PINCH' | 'OPEN' | 'CLOSED';
}

export interface SceneConfig {
  colors: {
    bg: number;
    champagneGold: number;
    deepGreen: number;
    accentRed: number;
  };
  particles: {
    count: number;
    dustCount: number;
    treeHeight: number;
    treeRadius: number;
  };
  camera: {
    defaultZ: number;
  };
}