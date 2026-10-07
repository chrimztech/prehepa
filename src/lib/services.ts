import {
  Box,
  Building2,
  Eye,
  Gem,
  Layers,
  Leaf,
  Map,
  Mountain,
  Pickaxe,
  Radar,
  RefreshCw,
  Route,
  Ruler,
  Satellite,
  ShieldCheck,
  Thermometer,
  TreePine,
  Zap,
} from "lucide-react";

import lidarImg from "@/assets/services/lidar-surveying.webp";
import multispecImg from "@/assets/services/multispectral-imaging.webp";
import thermalImg from "@/assets/services/thermal-imagery.webp";
import surveillanceImg from "@/assets/services/aerial-surveillance.webp";
import conservationImg from "@/assets/services/conservation-monitoring.webp";
import topoImg from "@/assets/services/topographic-survey.webp";
import modelImg from "@/assets/services/3d-modelling.webp";
import inspectionImg from "@/assets/services/infrastructure-inspection.webp";
import mineralImg from "@/assets/services/mineral-exploration.webp";
import stockpileImg from "@/assets/services/stockpile-calculation.webp";
import corridorImg from "@/assets/services/corridor-survey.webp";
import gisImg from "@/assets/services/gis-mapping.webp";

export const company = {
  name: "Rehepa Aerospace Ltd",
  tagline: "Aerial Intelligence • Surveying • Mapping",
  phone: "+260 972 830 832",
  phoneHref: "tel:+260972830832",
  whatsappHref: "https://wa.me/260972830832",
  email: "onijahzani@yahoo.com",
  address: "05/07 Simon Mwansa Kapwepwe Road, Chainda Compound, Lusaka, Zambia",
  addressShort: "05/07 Simon Mwansa Kapwepwe Rd, Chainda, Lusaka",
} as const;

export const services = [
  {
    icon: Radar,
    title: "LiDAR Surveying",
    desc: "High-density laser scanning from UAV platforms for terrain, vegetation and asset mapping. Outputs can include classified point clouds, DTM/DSM, contours and survey-ready spatial data.",
    image: lidarImg,
  },
  {
    icon: Leaf,
    title: "Multispectral Imaging",
    desc: "Capture of visible and near-infrared spectral information for vegetation assessment, crop-health mapping, environmental monitoring and targeted field analysis.",
    image: multispecImg,
  },
  {
    icon: Thermometer,
    title: "Thermal Imagery",
    desc: "Radiometric thermal surveys to identify heat patterns and anomalies across solar assets, buildings, electrical equipment, industrial facilities and selected environmental applications.",
    image: thermalImg,
  },
  {
    icon: Eye,
    title: "Aerial Surveillance",
    desc: "High-resolution aerial observation for site security, asset monitoring, incident documentation and situational awareness over large or difficult-to-access areas.",
    image: surveillanceImg,
  },
  {
    icon: TreePine,
    title: "Conservation & Environmental Monitoring",
    desc: "Drone-based mapping and observation for habitat monitoring, wildlife surveys, vegetation assessment, erosion/change detection and environmental documentation.",
    image: conservationImg,
  },
  {
    icon: Mountain,
    title: "Topographic Survey",
    desc: "Detailed terrain capture for engineering, planning, construction and land development, including contours, spot elevations, orthomosaics and digital elevation models.",
    image: topoImg,
  },
  {
    icon: Box,
    title: "3D Modelling & Reality Capture",
    desc: "Photogrammetric and LiDAR workflows that convert aerial data into measurable 3D meshes, point clouds and digital representations of sites and structures.",
    image: modelImg,
  },
  {
    icon: Building2,
    title: "Infrastructure Inspection",
    desc: "Close-range aerial inspection of bridges, roofs, towers, industrial structures and other assets, reducing the need for difficult access while creating visual records for assessment.",
    image: inspectionImg,
  },
  {
    icon: Gem,
    title: "Mineral Exploration",
    desc: "UAV-enabled geological and geophysical data acquisition, including aerial imagery, terrain mapping and compatible geophysical sensor surveys to support exploration targeting.",
    image: mineralImg,
  },
  {
    icon: Ruler,
    title: "Stockpile Calculation",
    desc: "Rapid aerial measurement of stockpiles, quarry materials, dumps and earthworks, producing mapped boundaries, surface models and volume calculations for inventory and project control.",
    image: stockpileImg,
  },
  {
    icon: Route,
    title: "Corridor Survey",
    desc: "Linear mapping of roads, railways, pipelines, powerlines and other corridors using UAV imagery and/or LiDAR for route planning, inspection, design and monitoring.",
    image: corridorImg,
  },
  {
    icon: Map,
    title: "GIS & Mapping Support",
    desc: "Integration of aerial survey outputs into GIS workflows for mapping, spatial analysis, asset inventories, change detection and decision-support products.",
    image: gisImg,
  },
] as const;

export const deliverables = [
  "Orthomosaics",
  "DTM / DSM / DEM",
  "Contours",
  "Point clouds",
  "3D models",
  "GIS layers",
  "Thermal maps",
  "Multispectral indices",
  "Stockpile volumes",
  "Inspection imagery",
  "Mission reports",
];

export const capabilities = [
  {
    icon: Map,
    title: "Survey & Mapping",
    items: ["LiDAR", "Topographic", "Corridor", "GIS", "3D modelling"],
  },
  {
    icon: Satellite,
    title: "Remote Sensing",
    items: ["Multispectral", "Thermal", "Aerial imagery", "Change detection"],
  },
  {
    icon: ShieldCheck,
    title: "Inspection & Monitoring",
    items: ["Infrastructure", "Surveillance", "Asset documentation"],
  },
  {
    icon: Pickaxe,
    title: "Mining & Environment",
    items: ["Mineral exploration", "Stockpiles", "Conservation", "Environmental mapping"],
  },
];

export const workflow = [
  {
    step: "01",
    title: "Capture",
    desc: "Plan safe missions with the appropriate UAV and sensor for the site and objective.",
  },
  {
    step: "02",
    title: "Process",
    desc: "Convert raw observations into structured, quality-checked geospatial information.",
  },
  {
    step: "03",
    title: "Analyse",
    desc: "Extract measurements, anomalies, volumes and terrain information.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Hand over practical outputs for engineering, GIS, planning, operations and management.",
  },
];

export const benefits = [
  {
    icon: Zap,
    title: "Faster field capture",
    desc: "Cover large or difficult sites efficiently and collect repeatable aerial records.",
  },
  {
    icon: ShieldCheck,
    title: "Safer access",
    desc: "Reduce the need for personnel to enter hazardous, steep, congested or hard-to-reach areas.",
  },
  {
    icon: Layers,
    title: "Rich spatial information",
    desc: "Combine imagery, elevation and sensor data to support measurement and analysis.",
  },
  {
    icon: RefreshCw,
    title: "Repeatable monitoring",
    desc: "Repeat missions over time to quantify progress, change, encroachment or asset condition.",
  },
];

export const industries = [
  "Mining & Minerals",
  "Construction & Engineering",
  "Roads & Transport",
  "Power & Utilities",
  "Agriculture",
  "Forestry & Conservation",
  "Government",
  "Property & Land Development",
  "Industrial Facilities",
  "Security & Monitoring",
  "Environmental & Development",
];

export const investmentPriorities = [
  "Professional mapping, LiDAR and RTK/PPK UAV systems",
  "Multispectral and thermal imaging sensors",
  "SLAM/LiDAR systems and GNSS/RTK surveying equipment",
  "High-performance GIS and photogrammetry workstations and software",
  "Agricultural spraying drones",
  "Staff training and professional development",
  "Working capital for larger contracts and project mobilisation",
];
