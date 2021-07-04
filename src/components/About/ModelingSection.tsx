import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useTranslation } from "react-i18next";

interface props {
  sectionRef: any;
}

interface ModelProps {
  props: any;
  controllerStatus: boolean;
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

const CarModel: React.FC<ModelProps> = ({ props, controllerStatus }) => {
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

const BmoModel: React.FC<ModelProps> = ({ props, controllerStatus }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3DModels/microModel/optScene.gltf");

  return (
    <>
      <group ref={group} {...props} dispose={null} position={[0, -100, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[181.92, 98.98, 188.89]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group position={[0, 5.24, 27.61]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Switch_1_Material_#184_0'].geometry} material={nodes['Switch_1_Material_#184_0'].material}
              />
              </group>
            </group>
            <group
              position={[-214.07, 125, 159.16]}
              rotation={[-Math.PI / 2, 0, -0.44]}
            >
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Handle_Material_#193_0'].geometry} material={materials.Material_193} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Parts_Material_#203_0'].geometry} material={materials.Material_203} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Door_part_Material_#188_0'].geometry} material={materials.Material_188} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Glass_Material_#192_0'].geometry} material={materials.Material_192} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Door_Material_#187_0'].geometry} material={materials.Material_187} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Door_side_Material_#204_0'].geometry} material={materials.Material_204} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Door_Box_Material_#198_0'].geometry} material={materials.Material_198} />
                </group>
              </group>
              <group rotation={[0, 0, 0]}>
                <group position={[216.27, 496.72, -125]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Lock_Material_#197_0'].geometry} material={materials.Material_197} />
                </group>
              </group>
            </group>
            <group
              position={[181.92, 57.78, 191.39]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group position={[0, 7.74, 68.8]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Switch_2_Material_#184_0'].geometry} material={nodes['Switch_2_Material_#184_0'].material}
              />
              </group>
            </group>
            <group
              position={[-34.04, 117.71, -23.97]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group position={[36.25, -31.61, -117.71]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Back_Material_#105_0'].geometry} material={materials.Material_105} />
              </group>
              <group
                position={[235.55, 141.81, -84.43]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[1, 1, 1]}
              >
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Block_Material_#181_0'].geometry} material={materials.Material_181} />
              </group>
              <group position={[36.25, -31.61, -117.71]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Box_Material_#182_0'].geometry} material={materials.Material_182} />
              </group>
              <group
                position={[235.55, 141.81, -84.43]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[1, 1, 1]}
              >
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Cord_Material_#183_0'].geometry} material={materials.Material_183} />
              </group>
              <group position={[215.97, -205.11, 78.55]}>
                <group position={[-179.72, 173, -196.26]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Display_Material_#200_0'].geometry} material={materials.Material_200} />
                </group>
              </group>
              <group position={[-211.6, -169.05, -117.71]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Door_mecha_Material_#186_0'].geometry} material={materials.Material_186} />
              </group>
              <group position={[36.25, -31.61, -117.71]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Inside_Material_#194_0'].geometry} material={materials.Material_194} />
              </group>
              <group position={[36.39, -16.31, -126]}>
                <group position={[-172.21, -140.29, 8.29]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Legs_Material_#191_0'].geometry} material={materials.Material_191} />
                </group>
              </group>
              <group position={[-6.58, -31.48, 110.22]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Light_Material_#190_0'].geometry} material={materials.Material_190} />
              </group>
              <group position={[-6.58, -31.48, 109.81]}>
                <group position={[42.83, -0.13, -227.51]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Light_Glass_Material_#196_0'].geometry} material={materials.Material_196} />
                </group>
              </group>
              <group position={[36.25, -31.61, -117.71]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Menu_Material_#199_0'].geometry} material={materials.Material_199} />
              </group>
              <group position={[137.86, -49.09, 6.86]}>
                <group position={[-101.62, 17.48, -177.05]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Plane_Material_#195_0'].geometry} material={materials.Material_195} />
                </group>
              </group>
              <group position={[-6.58, -49.09, -87.35]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Plate_Material_#202_0'].geometry} material={materials.Material_202} />
              </group>
              <group
                position={[-6.58, -49, -88.58]}
                rotation={[0, 0, -Math.PI / 6]}
                scale={[1, 1, 1]}
              >
                <group position={[4.21, -20.01, -29.95]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Plate_part_Material_#201_0'].geometry} material={materials.Material_201} />
                </group>
              </group>
              <group
                position={[224.11, 143.39, 126.33]}
                rotation={[-Math.PI / 2, 0, 2.88]}
                scale={[1, 1, 1]}
              >
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Screws_Material_#185_0'].geometry} material={materials.Material_185} />
              </group>
              <group
                position={[-6.58, -49, -88.58]}
                rotation={[0, 0, -Math.PI / 6]}
                scale={[1, 1, 1]}
              >
                <group position={[4.21, -20.01, -29.95]}>
                  {/* @ts-ignore */} {/* prettier-ignore */}
                  <mesh geometry={nodes['Wheels_Material_#205_0'].geometry} material={materials.Material_205} />
                </group>
              </group>
            </group>
            <group
              position={[-34.08, 117.7, 57.41]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group position={[443.27, 186.41, -117.7]}>
                {/* @ts-ignore */} {/* prettier-ignore */}
                <mesh geometry={nodes['Cell_Material_#576_0'].geometry} material={materials.Material_576} />
              </group>
            </group>
          </group>
        </group>
      </group>
      {controllerStatus ? <OrbitControls /> : null}
    </>
  );
};

useGLTF.preload("/3DModels/carModel/optScene.gltf");
useGLTF.preload("/3DModels/microModel/optScene.gltf");

const ModelingSection: React.FC<props> = ({ sectionRef }) => {
  const [controllerStatus, setControllerStatus] = useState<boolean>(true);
  const [displayedModel, setDisplayedModel] = useState<"bmo" | "car">("bmo");
  const { t } = useTranslation();

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
                camera={{ position: [270, 270, 450], fov: 100 }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[300, 500, 0]} intensity={2} />
                <directionalLight
                  castShadow
                  position={[0, 0, 0]}
                  shadow-camera-far={50}
                />
                <Suspense fallback={<LoadingModel />}>
                  <BmoModel props controllerStatus={controllerStatus} />
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
                  <CarModel props controllerStatus={controllerStatus} />
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
              onClick={() =>
                controllerStatus
                  ? setControllerStatus(false)
                  : setControllerStatus(true)
              }
            >
              <p
                style={
                  controllerStatus
                    ? { opacity: 1, transition: "opacity 500ms" }
                    : { opacity: 0, transition: "opacity 500ms" }
                }
              >
                3D 🕹: ON
              </p>
              <p
                style={
                  controllerStatus
                    ? { opacity: 0, transition: "opacity 500ms" }
                    : { opacity: 1, transition: "opacity 500ms" }
                }
              >
                3D 🕹: OFF
              </p>
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
            "Microwave [XYZ School Homework]" (https://skfb.ly/oo8Tt) by Maria
            Savelyeva is licensed under Creative Commons Attribution
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
        <h1>{t("ModelingSection.Title")}</h1>
        <p>
          {t("ModelingSection.Text")}
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
