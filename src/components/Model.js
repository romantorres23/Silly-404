import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Guard02"
            geometry={nodes.Guard02.geometry}
            material={materials.Guard_02}
            skeleton={nodes.Guard02.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model.glb");
