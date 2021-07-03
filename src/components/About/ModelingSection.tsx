import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

interface props {
  sectionRef: any;
}

interface ModelProps {
  props: any;
  controllerStatus: boolean;
  modelToDisplay: "bmo" | "car";
}

const LoadingModel = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

const CarModel: React.FC<ModelProps> = ({
  props,
  controllerStatus,
  modelToDisplay,
}) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3DModels/carModel/optScene.gltf");
  // console.log(`controllerStatus: ${controllerStatus}`)

  return (
    <>
      <group ref={group} {...props} dispose={null} position={[0, -5, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          {/* @ts-ignore */} {/* prettier-ignore */}
          <lineSegments geometry={nodes.Material2_7.geometry} material={nodes.Material2_7.material} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <lineSegments geometry={nodes.Material2_10.geometry} material={nodes.Material2_10.material} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2.geometry} material={materials.material} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_1.geometry} material={materials.Color_B01} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_2.geometry} material={materials.Color_006} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_3.geometry} material={materials.Color_003} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_4.geometry} material={materials.Color_009} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_5.geometry} material={materials.grille1_alpha} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_6.geometry} material={materials.Translucent_Glass_Gray} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_8.geometry} material={materials.Color_004} />
          {/* @ts-ignore */} {/* prettier-ignore */}
          <mesh geometry={nodes.Material2_9.geometry} material={materials.Color_007} />
        </group>

        {controllerStatus ? <OrbitControls /> : null}
      </group>
    </>
  );
};

const BmoModel: React.FC<ModelProps> = ({
  props,
  controllerStatus,
  modelToDisplay,
}) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3DModels/bmoModel/optScene.gltf");

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.2}
          position={[-100, -100, 100]}
        >
          <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <group
              position={[72.33, 344.66, -713.22]}
              rotation={[-Math.PI / 2, -0.12, 0]}
              scale={100}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Cubo_cuerpo__0.geometry} material={materials.cuerpo} />
            </group>
            <group
              position={[159.5, 528.35, -486.07]}
              rotation={[-Math.PI / 2, -0.12, 0]}
              scale={[95.73, 95.73, 105.63]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Cubo002_cuerpo_2_0.geometry} material={materials.cuerpo_2} />
            </group>
            <group
              position={[174.97, 426.04, -467.31]}
              rotation={[-Math.PI / 2, 1.45, 0]}
              scale={[42.31, 42.31, 42.31]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Plano002_botones__0.geometry} material={nodes.Plano002_botones__0.material} />
            </group>
            <group
              position={[176.56, 311.8, -507.26]}
              rotation={[-Math.PI / 2, -0.12, 0]}
              scale={[3.14, 4.17, 2.67]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Cubo005_cable__0.geometry} material={materials.cable} />
            </group>
            <group
              position={[171.62, 458.14, -662.2]}
              rotation={[-Math.PI / 2, 1.45, 0]}
              scale={[32.23, 32.23, 32.23]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Plano005_botones__0.geometry} material={nodes.Plano005_botones__0.material} />
            </group>
            <group
              position={[177.13, 411.18, -745.28]}
              rotation={[-Math.PI / 2, 1.45, 0]}
              scale={[20.82, 20.82, 20.82]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes['C��rculo_botones__0'].geometry} material={nodes['C��rculo_botones__0'].material} />
            </group>
            <group
              position={[183.43, 353.3, -686.8]}
              rotation={[-Math.PI / 2, 1.45, 0]}
              scale={[26.48, 26.48, 26.48]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes['C��rculo001_botones__0'].geometry} material={nodes['C��rculo001_botones__0'].material}
            />
            </group>
            <group
              position={[157.28, 527.11, -744.68]}
              rotation={[-Math.PI / 2, -0.12, 0]}
              scale={[9, 14.57, 14.57]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Esfera_botones__0.geometry} material={nodes.Esfera_botones__0.material} />
            </group>
            <group
              position={[160.11, 527.58, -744.5]}
              rotation={[-Math.PI / 2, 1.45, 0]}
              scale={[17.1, 17.1, 17.1]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes['C��rculo002_negro__0'].geometry} material={nodes['C��rculo002_negro__0'].material} />
            </group>
            <group
              position={[-1.06, 411.74, -869.93]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[28.54, 28.54, 32.15]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Curva_NURBS_extremidades__0.geometry} material={materials.extremidades} />
            </group>
            <group
              position={[238.74, 327.4, -437.43]}
              rotation={[Math.PI, -1.48, 0]}
              scale={[6.77, 6.77, 2.95]}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Cilindro002_negro__0.geometry} material={nodes.Cilindro002_negro__0.material} />
            </group>
            <group
              position={[70.17, 344.4, -713.22]}
              rotation={[-Math.PI / 2, -0.12, 0]}
              scale={100}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes.Cubo001_pantalla_0.geometry} material={materials.pantalla} />
            </group>
            <group
              position={[486.63, 241.48, -530.74]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={32.31}
            >
              {/* @ts-ignore */} {/* prettier-ignore */}
              <mesh geometry={nodes['C��rculo003_botones__0'].geometry} material={nodes['C��rculo003_botones__0'].material}
            />
            </group>
          </group>
        </group>
      </group>
      {controllerStatus ? <OrbitControls /> : null}
    </>
  );
};

useGLTF.preload("/3DModels/carModel/optScene.gltf");
useGLTF.preload("/3DModels/bmoModel/optScene.gltf");

const ModelingSection: React.FC<props> = ({ sectionRef }) => {
  const [controllerStatus, setControllerStatus] = useState<boolean>(true);
  const [displayedModel, setDisplayedModel] = useState<"bmo" | "car">("car");

  return (
    <section id="ModelingSection" ref={sectionRef}>
      <div className="modelingLeftBox">
        <div className="modelDisplay">
          <div className="modelsContainer">
            <div
              className="bmoModelContainer"
              style={
                displayedModel === "bmo"
                  ? {
                      visibility: "visible",
                      opacity: 1,
                      transition: "opacity 1s",
                    }
                  : {
                      visibility: "hidden",
                      opacity: 0,
                      transition: "opacity 1s",
                    }
              }
            >
              <Canvas
                id="BmoCanvas"
                shadows
                camera={{ position: [30, 0, 0], fov: 100 }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[300, 500, 0]} intensity={2} />
                <directionalLight
                  castShadow
                  position={[0, 0, 0]}
                  shadow-camera-far={50}
                />
                <Suspense fallback={<LoadingModel />}>
                  <BmoModel
                    props
                    controllerStatus={controllerStatus}
                    modelToDisplay={displayedModel}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div
              className="carModelContainer"
              style={
                displayedModel === "car"
                  ? {
                      visibility: "visible",
                      opacity: 1,
                      transition: "opacity 1s",
                    }
                  : {
                      visibility: "hidden",
                      opacity: 0,
                      transition: "opacity 1s",
                    }
              }
            >
              <Canvas
                id="CarCanvas"
                shadows
                camera={{ position: [50, 50, 50], fov: 40 }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[300, 500, 0]} intensity={2} />
                <directionalLight
                  castShadow
                  position={[300, 500, 0]}
                  shadow-camera-far={50}
                />
                <Suspense fallback={<LoadingModel />}>
                  <CarModel
                    props
                    controllerStatus={controllerStatus}
                    modelToDisplay={displayedModel}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="platformContainer">
            <div className="circle"></div>
            <div className="border"></div>
          </div>
          <div className="controlersBox">
            <button
              className={controllerStatus ? "toggled" : "notToggled"}
              onClick={() => setControllerStatus(true)}
            >
              move
            </button>
            <button
              className={controllerStatus ? "notToggled" : "toggled"}
              onClick={() => setControllerStatus(false)}
            >
              stop
            </button>
          </div>
        </div>
        <div className="modelDescription">
          <p
            style={
              displayedModel === "bmo"
                ? { opacity: 1, transition: "opacity 500ms" }
                : { opacity: 0, transition: "opacity 500ms" }
            }
            id="blenderText"
          >
            "Realistic BMO" (https://skfb.ly/oorTP) by Benjamon321 is licensed
            under Creative Commons Attribution
            (http://creativecommons.org/licenses/by/4.0/).
          </p>
          <p
            style={
              displayedModel === "car"
                ? { opacity: 1, transition: "opacity 500ms" }
                : { opacity: 0, transition: "opacity 500ms" }
            }
            id="solidWorksText"
          >
            "Beck Kustoms F132" (https://skfb.ly/oo7DL) by Vyacheslav is
            licensed under Creative Commons Attribution
            (http://creativecommons.org/licenses/by/4.0/).
          </p>
        </div>
      </div>
      <div className="modelingRightBox">
        <h1>3D Modeling</h1>
        <p>
          I have also recently got interested in 3D modeling, the main two
          softwares I use (depending on the type of proyect) are:
        </p>
        <ul>
          <li
            className={displayedModel === "bmo" ? "toggled" : "notToggled"}
            onClick={() => setDisplayedModel("bmo")}
          >
            Blender
          </li>
          <li
            className={displayedModel === "car" ? "toggled" : "notToggled"}
            onClick={() => setDisplayedModel("car")}
          >
            Solid Works
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ModelingSection;
