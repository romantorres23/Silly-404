import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./components/Model";

export default function App() {
  return (
    <>
      <div className="copy">
        <h1>Lost in the dungeon?</h1>
        <p>That which you seek does not exist</p>
      </div>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "#0b1217",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
