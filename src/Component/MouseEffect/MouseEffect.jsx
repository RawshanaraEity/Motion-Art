
import { useEffect, useRef } from 'react';
import webglFluidUmd from 'webgl-fluid/dist/webgl-fluid.umd.js';


const MouseEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
        webglFluidUmd(canvasRef.current, {
            TRIGGER: 'hover',
            IMMEDIATE: true,
            AUTO: false,
            INTERVAL: 3000,
            SIM_RESOLUTION: 256,
            DYE_RESOLUTION: 700,
            CAPTURE_RESOLUTION: 400,
            DENSITY_DISSIPATION: 3,
            VELOCITY_DISSIPATION: 0.99,
            PRESSURE: 0.5,
            PRESSURE_ITERATIONS: 25,
            CURL: 50,
            SPLAT_RADIUS: 0.1,
            SPLAT_FORCE: 8000,
            SPLAT_COUNT: 30,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 5,
            PAUSED: false,
            BACK_COLOR: { r: 0, g: 0, b: 0 },
            TRANSPARENT: false,
            BLOOM: true,
            BLOOM_ITERATIONS: 6,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.6,
            BLOOM_THRESHOLD: 0.5,
            BLOOM_SOFT_KNEE: 0.9,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: 1.0,
      });
    }
  }, []);

  return <canvas  className="w-full h-screen inset-0 fixed z-0 pointer-events-auto" ref={canvasRef}></canvas>;
};

export default MouseEffect;
