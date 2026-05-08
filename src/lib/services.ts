import {
  Map, Mountain, Plane, Sprout, Camera, Wrench, Radar, Box, Ruler, Layers, Eye, Compass,
} from "lucide-react";

import lidarImg from "@/assets/LiDAR Surveying.png";
import topoImg from "@/assets/Topographic Survey.png";
import orthoImg from "@/assets/Orthomosaic Mapping.png";
import modelImg from "@/assets/3D Modelling.png";
import volumeImg from "@/assets/Volumetric & Stockpile.png";
import cadastralImg from "@/assets/Cadastral & Engineering.png";
import cropImg from "@/assets/Crop Spraying.png";
import multispecImg from "@/assets/Multispectral Surveying.png";
import filmImg from "@/assets/Aerial Filming.png";
import survImg from "@/assets/Surveillance.png";
import slamImg from "@/assets/SLAM Survey.png";
import repairImg from "@/assets/Drone Servicing & Repair.png";

export const services = [
  { icon: Mountain, title: "LiDAR Surveying", desc: "High-density point clouds for terrain, vegetation and infrastructure modelling.", image: lidarImg },
  { icon: Map, title: "Topographic Survey", desc: "Precision elevation and contour data for engineering and planning.", image: topoImg },
  { icon: Layers, title: "Orthomosaic Mapping", desc: "Geometrically corrected aerial maps for measurement and analysis.", image: orthoImg },
  { icon: Box, title: "3D Modelling", desc: "Photo-realistic and CAD-ready 3D models of sites and assets.", image: modelImg },
  { icon: Ruler, title: "Volumetric & Stockpile", desc: "Accurate volume and area computation for mining and quarry sites.", image: volumeImg },
  { icon: Compass, title: "Cadastral & Engineering", desc: "Land surveys and infrastructure setting out with survey-grade accuracy.", image: cadastralImg },
  { icon: Sprout, title: "Crop Spraying", desc: "Precision agriculture with spray drones for higher yield and lower input cost.", image: cropImg },
  { icon: Radar, title: "Multispectral Surveying", desc: "Crop health, mineral exploration and environmental monitoring.", image: multispecImg },
  { icon: Camera, title: "Aerial Filming", desc: "Cinematic aerial photography and videography for content and inspection.", image: filmImg },
  { icon: Eye, title: "Surveillance", desc: "Aerial monitoring for security, conservation and event management.", image: survImg },
  { icon: Plane, title: "SLAM Survey", desc: "GPS-denied indoor and underground 3D mapping using SLAM-equipped drones.", image: slamImg },
  { icon: Wrench, title: "Drone Servicing & Repair", desc: "Maintenance, repair and repurposing of UAV systems.", image: repairImg },
] as const;

export const industries = [
  "Mining", "Construction", "Agriculture", "Engineering", "Conservation", "Research", "Infrastructure", "Surveillance",
];
