import React from 'react';

export interface OrnamentProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

export interface TreeLayerProps {
  position: [number, number, number];
  scale: number;
}

export interface GreetingResponse {
  message: string;
  style: string;
}

export enum AppState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  SHOWING_WISH = 'SHOWING_WISH',
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      spotLight: any;
      pointLight: any;
      ambientLight: any;
      instancedMesh: any;
      sphereGeometry: any;
      tetrahedronGeometry: any;
      octahedronGeometry: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      color: any;
      boxGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      shaderMaterial: any;
      primitive: any;
      extrudeGeometry: any;
      icosahedronGeometry: any;
      torusGeometry: any;
      torusKnotGeometry: any;
      tubeGeometry: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      spotLight: any;
      pointLight: any;
      ambientLight: any;
      instancedMesh: any;
      sphereGeometry: any;
      tetrahedronGeometry: any;
      octahedronGeometry: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      color: any;
      boxGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      shaderMaterial: any;
      primitive: any;
      extrudeGeometry: any;
      icosahedronGeometry: any;
      torusGeometry: any;
      torusKnotGeometry: any;
      tubeGeometry: any;
    }
  }
}