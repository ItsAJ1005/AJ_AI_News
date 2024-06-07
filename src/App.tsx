import React, {useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web'
import { World, GlobeConfig, Position } from "./components/ui/WorldComponent.tsx";
import './css/app.css';
import Header from "./components/ui/Header.jsx";


const ajKey = 'adcafd1fb6f76c301ff0460a1aa7e0db2e956eca572e1d8b807a3e2338fdd0dc/stage';

const globeConfig: GlobeConfig = {
  pointSize: 1.5,
  globeColor: "#1d072e",
  showAtmosphere: true,
  atmosphereColor: "#88ccff",
  atmosphereAltitude: 0.2,
  emissive: "#111111",
  emissiveIntensity: 0.5,
  shininess: 0.5,
  polygonColor: "rgba(200, 200, 200, 0.8)",
  ambientLight: "#888888",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1400,
  arcLength: 0.7,
  rings: 2,
  maxRings: 5,
  initialPosition: {
    lat: 0,
    lng: 0,
  },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const data: Position[] = [
  {
    order: 0,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: "#00ffff",
  },
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#00ff00",
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.2,
    color: "#0000ff", 
  },
  {
    order: 3,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.3,
    color: "#00ff00", 
  },
  {
    order: 4,
    startLat: -33.865,
    startLng: 151.2094,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.4,
    color: "#0000ff", 
  },
  {
    order: 5,
    startLat: 35.6895,
    startLng: 139.6917,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.5,
    color: "#00ff00", 
  },
  {
    order: 6,
    startLat: 52.5200,
    startLng: 13.4050,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.6,
    color: "#00ffff", // Neon blue color
  },
  {
    order: 7,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.7,
    color: "#00ffff", // Neon blue color
  },
  {
    order: 8,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.8,
    color: "#00ffff", // Neon blue color
  },
  {
    order: 9,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.9,
    color: "#00ffff", // Neon blue color
  },
  {
    order: 10,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 35.6895,
    endLng: 139.6917,
    arcAlt: 1.0,
    color: "#00ffff", // Neon blue color
  },

  // Add more data as needed
];

function App() {

  useEffect(() => {
    alanBtn({
      key: ajKey,
      onCommand: (commandData: any) => {
        if (commandData.command === 'testCommand') {
          alert('This code was executed');
        }
      }
    });
  }, []);

  return (
    <>
    <Header/>

    <div className="hero">
      <div className="hero-head">
        <h1>AI News Application</h1>
        <p>Discover the World of News: Interact, Customize, and Stay Informed with Our Voice-Assisted News Application!</p>
      </div>

      {/* GLOBE DIV */}
      <div className="globe">
        <div style={{ width: "55vw", height: "80vh" }}>
          <World globeConfig={globeConfig} data={data} />
        </div>
      </div>

    </div>


    </>

    
  );
}

export default App;
