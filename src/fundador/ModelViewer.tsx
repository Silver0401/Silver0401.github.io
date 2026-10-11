import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";

const BASE = import.meta.env.BASE_URL;
const MODELS = {
  car: `${BASE}3DModels/carModel/optScene.gltf`,
  micro: `${BASE}3DModels/microModel/optScene.gltf`,
} as const;
type ModelKey = keyof typeof MODELS;

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

// Visor del modelado 3D; se carga bajo demanda para no pesar en el arranque.
export default function ModelViewer({ labels, hint }: { labels: Record<ModelKey, string>; hint: string }) {
  const [model, setModel] = useState<ModelKey>("car");
  return (
    <div className="viewer-live">
      <div className="viewer-switch" role="tablist">
        {(Object.keys(MODELS) as ModelKey[]).map((k) => (
          <button key={k} role="tab" aria-selected={model === k} className={model === k ? "on" : ""} onClick={() => setModel(k)}>
            {labels[k]}
          </button>
        ))}
      </div>
      <Canvas camera={{ position: [4, 2.5, 6], fov: 40 }} dpr={[1, 1.75]}>
        <hemisphereLight args={["#ffffff", "#334", 1.1]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} />
        <Suspense fallback={null}>
          <Bounds key={model} fit clip observe margin={1.15}>
            <Model url={MODELS[model]} />
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <p className="viewer-hint">{hint}</p>
    </div>
  );
}
