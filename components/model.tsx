import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import React from "react";

interface ModelRenderProps {
  fileUrl: string;
  colorHex: string;
}

function ModelRender({ fileUrl, colorHex }: ModelRenderProps) {
  const geom = useLoader(STLLoader, fileUrl);
  return (
    <mesh geometry={geom}>
      <meshPhongMaterial color={colorHex} />
    </mesh>
  );
}

export default function Model({fileUrl, colorHex, cameraPosition}) {
  return (
      <Canvas
        style={{ height: "14rem", width: "100%" }}
        camera={cameraPosition}
      >
        <Suspense fallback={"loading..."}>
          <ModelRender fileUrl={fileUrl} colorHex={colorHex} />
        </Suspense>
        <OrbitControls panSpeed={0.5} rotateSpeed={0.4} />
        <ambientLight color={colorHex} intensity={1}/>
        <pointLight position={[100,100,100]} intensity="0.2"/>
      </Canvas>
  );
}
