import {
  Box,
  Building2,
  Eye,
  Gem,
  Layers,
  Leaf,
  Magnet,
  Map,
  Mountain,
  Pickaxe,
  Radar,
  RefreshCw,
  Route,
  Ruler,
  Ship,
  Satellite,
  ShieldCheck,
  Thermometer,
  TreePine,
  Zap,
} from "lucide-react";

import lidarImg from "@/assets/projects/lidar-intensity.webp";
import multispecImg from "@/assets/services/multispectral-imaging.webp";
import thermalImg from "@/assets/services/thermal-imagery.webp";
import surveillanceImg from "@/assets/services/aerial-surveillance.webp";
import conservationImg from "@/assets/projects/orthomosaic-land-clearing.webp";
import topoImg from "@/assets/projects/dem-contours-cad.webp";
import modelImg from "@/assets/projects/lidar-rgb-point-cloud.webp";
import inspectionImg from "@/assets/services/infrastructure-inspection.webp";
import mineralImg from "@/assets/projects/analytic-signal-fort-rixon.webp";
import stockpileImg from "@/assets/services/stockpile-calculation.webp";
import corridorImg from "@/assets/services/corridor-survey.webp";
import gisImg from "@/assets/projects/contour-layer.webp";
import tmiImg from "@/assets/projects/total-magnetic-intensity.webp";
import magStructuresImg from "@/assets/projects/magnetic-structures-map.webp";
import ipSectionImg from "@/assets/projects/ip-resistivity-section.webp";
import vesselImg from "@/assets/projects/survey-vessel.webp";

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
    slug: "lidar-surveying",
    title: "LiDAR Surveying",
    gallery: [
      { src: modelImg, caption: "LiDAR point cloud, true-colour (RGB) view" },
      { src: lidarImg, caption: "Same LiDAR dataset coloured by return intensity" },
    ],
    uses: ["Terrain mapping", "Vegetation mapping", "Asset mapping", "Survey-ready spatial data"],
    outputs: ["Classified point clouds", "DTM / DSM", "Contours", "GIS layers", "Mission reports"],
    sectors: [
      "Mining & Minerals",
      "Construction & Engineering",
      "Roads & Transport",
      "Power & Utilities",
      "Forestry & Conservation",
    ],
    desc: "High-density laser scanning from UAV platforms for terrain, vegetation and asset mapping. Outputs can include classified point clouds, DTM/DSM, contours and survey-ready spatial data.",
    image: lidarImg,
  },
  {
    icon: Leaf,
    slug: "multispectral-imaging",
    title: "Multispectral Imaging",
    gallery: [],
    uses: [
      "Vegetation assessment",
      "Crop-health mapping",
      "Environmental monitoring",
      "Targeted field analysis",
    ],
    outputs: ["Multispectral indices", "Orthomosaics", "GIS layers", "Mission reports"],
    sectors: [
      "Agriculture",
      "Forestry & Conservation",
      "Environmental & Development",
      "Government",
    ],
    desc: "Capture of visible and near-infrared spectral information for vegetation assessment, crop-health mapping, environmental monitoring and targeted field analysis.",
    image: multispecImg,
  },
  {
    icon: Thermometer,
    slug: "thermal-imagery",
    title: "Thermal Imagery",
    gallery: [],
    uses: [
      "Solar assets",
      "Buildings",
      "Electrical equipment",
      "Industrial facilities",
      "Selected environmental applications",
    ],
    outputs: ["Thermal maps", "Inspection imagery", "Mission reports"],
    sectors: [
      "Power & Utilities",
      "Industrial Facilities",
      "Property & Land Development",
      "Environmental & Development",
    ],
    desc: "Radiometric thermal surveys to identify heat patterns and anomalies across solar assets, buildings, electrical equipment, industrial facilities and selected environmental applications.",
    image: thermalImg,
  },
  {
    icon: Eye,
    slug: "aerial-surveillance",
    title: "Aerial Surveillance",
    gallery: [],
    uses: [
      "Site security",
      "Asset monitoring",
      "Incident documentation",
      "Situational awareness over large or difficult-to-access areas",
    ],
    outputs: ["High-resolution aerial imagery", "Mission reports"],
    sectors: [
      "Security & Monitoring",
      "Mining & Minerals",
      "Industrial Facilities",
      "Government",
      "Forestry & Conservation",
    ],
    desc: "High-resolution aerial observation for site security, asset monitoring, incident documentation and situational awareness over large or difficult-to-access areas.",
    image: surveillanceImg,
  },
  {
    icon: TreePine,
    slug: "conservation-environmental-monitoring",
    title: "Conservation & Environmental Monitoring",
    gallery: [
      { src: conservationImg, caption: "Orthomosaic showing cleared land beside intact woodland" },
    ],
    uses: [
      "Habitat monitoring",
      "Wildlife surveys",
      "Vegetation assessment",
      "Erosion and change detection",
      "Environmental documentation",
    ],
    outputs: ["Orthomosaics", "Multispectral indices", "GIS layers", "Mission reports"],
    sectors: ["Forestry & Conservation", "Environmental & Development", "Government"],
    desc: "Drone-based mapping and observation for habitat monitoring, wildlife surveys, vegetation assessment, erosion/change detection and environmental documentation.",
    image: conservationImg,
  },
  {
    icon: Mountain,
    slug: "topographic-survey",
    title: "Topographic Survey",
    gallery: [
      { src: topoImg, caption: "Contours generated from a DEM, in CAD" },
      { src: gisImg, caption: "Contour layer detail" },
    ],
    uses: ["Engineering", "Planning", "Construction", "Land development"],
    outputs: ["Contours", "Spot elevations", "Orthomosaics", "DTM / DSM / DEM"],
    sectors: [
      "Construction & Engineering",
      "Property & Land Development",
      "Roads & Transport",
      "Mining & Minerals",
      "Government",
    ],
    desc: "Detailed terrain capture for engineering, planning, construction and land development, including contours, spot elevations, orthomosaics and digital elevation models.",
    image: topoImg,
  },
  {
    icon: Box,
    slug: "3d-modelling-reality-capture",
    title: "3D Modelling & Reality Capture",
    gallery: [{ src: modelImg, caption: "Colourised 3D point cloud of a survey site" }],
    uses: ["Site documentation", "Structure documentation", "Measurement from 3D data"],
    outputs: ["3D models", "3D meshes", "Point clouds"],
    sectors: [
      "Construction & Engineering",
      "Industrial Facilities",
      "Property & Land Development",
      "Mining & Minerals",
    ],
    desc: "Photogrammetric and LiDAR workflows that convert aerial data into measurable 3D meshes, point clouds and digital representations of sites and structures.",
    image: modelImg,
  },
  {
    icon: Building2,
    slug: "infrastructure-inspection",
    title: "Infrastructure Inspection",
    gallery: [],
    uses: ["Bridges", "Roofs", "Towers", "Industrial structures"],
    outputs: ["Inspection imagery", "Visual condition records", "Mission reports"],
    sectors: [
      "Power & Utilities",
      "Roads & Transport",
      "Industrial Facilities",
      "Property & Land Development",
      "Government",
    ],
    desc: "Close-range aerial inspection of bridges, roofs, towers, industrial structures and other assets, reducing the need for difficult access while creating visual records for assessment.",
    image: inspectionImg,
  },
  {
    icon: Gem,
    slug: "mineral-exploration",
    title: "Mineral Exploration",
    gallery: [
      { src: mineralImg, caption: "Analytic signal map — Fort Rixon mining claims" },
      { src: magStructuresImg, caption: "Magnetic map with interpreted structures" },
    ],
    uses: [
      "Aerial imagery",
      "Terrain mapping",
      "Compatible geophysical sensor surveys",
      "Exploration targeting",
    ],
    outputs: ["Orthomosaics", "DTM / DSM / DEM", "GIS layers", "Mission reports"],
    sectors: ["Mining & Minerals", "Government"],
    desc: "UAV-enabled geological and geophysical data acquisition, including aerial imagery, terrain mapping and compatible geophysical sensor surveys to support exploration targeting.",
    image: mineralImg,
  },
  {
    icon: Ruler,
    slug: "stockpile-calculation",
    title: "Stockpile Calculation",
    gallery: [],
    uses: ["Stockpiles", "Quarry materials", "Dumps", "Earthworks"],
    outputs: ["Stockpile volumes", "Mapped boundaries", "Surface models", "Mission reports"],
    sectors: ["Mining & Minerals", "Construction & Engineering", "Industrial Facilities"],
    desc: "Rapid aerial measurement of stockpiles, quarry materials, dumps and earthworks, producing mapped boundaries, surface models and volume calculations for inventory and project control.",
    image: stockpileImg,
  },
  {
    icon: Route,
    slug: "corridor-survey",
    title: "Corridor Survey",
    gallery: [],
    uses: ["Roads", "Railways", "Pipelines", "Powerlines"],
    outputs: ["Orthomosaics", "Point clouds", "DTM / DSM", "GIS layers"],
    sectors: ["Roads & Transport", "Power & Utilities", "Construction & Engineering", "Government"],
    desc: "Linear mapping of roads, railways, pipelines, powerlines and other corridors using UAV imagery and/or LiDAR for route planning, inspection, design and monitoring.",
    image: corridorImg,
  },
  {
    icon: Map,
    slug: "gis-mapping-support",
    title: "GIS & Mapping Support",
    gallery: [{ src: gisImg, caption: "Contour layer prepared for GIS and CAD" }],
    uses: [
      "Mapping",
      "Spatial analysis",
      "Asset inventories",
      "Change detection",
      "Decision-support products",
    ],
    outputs: ["GIS layers", "Orthomosaics", "Mission reports"],
    sectors: [
      "Government",
      "Mining & Minerals",
      "Agriculture",
      "Property & Land Development",
      "Environmental & Development",
    ],
    desc: "Integration of aerial survey outputs into GIS workflows for mapping, spatial analysis, asset inventories, change detection and decision-support products.",
    image: gisImg,
  },
  {
    icon: Ship,
    slug: "hydrographic-bathymetric-survey",
    title: "Hydrographic & Bathymetric Survey",
    gallery: [],
    uses: [
      "Dams and reservoirs",
      "Lakes and rivers",
      "Tailings and mine-water ponds",
      "Sedimentation and storage-capacity monitoring",
    ],
    outputs: [
      "Depth soundings",
      "Bathymetric surface models",
      "Underwater contours",
      "Water volume calculations",
      "Mission reports",
    ],
    sectors: [
      "Mining & Minerals",
      "Power & Utilities",
      "Government",
      "Construction & Engineering",
      "Environmental & Development",
    ],
    desc: "Uncrewed survey vessel (USV) operations to map water depth and underwater terrain in dams, reservoirs, lakes, rivers and tailings ponds. Outputs can include bathymetric surface models, underwater contours and water volume calculations.",
    image: vesselImg,
  },
  {
    icon: Magnet,
    slug: "geophysical-survey",
    title: "Geophysical Survey",
    gallery: [
      { src: ipSectionImg, caption: "IP chargeability and resistivity sections" },
      { src: tmiImg, caption: "Total magnetic intensity map with interpreted contact" },
    ],
    uses: [
      "Magnetic surveys",
      "Induced polarisation (IP) and resistivity profiling",
      "Structural interpretation",
      "Drill-target definition",
    ],
    outputs: [
      "Total magnetic intensity maps",
      "Analytic signal maps",
      "Chargeability and resistivity sections",
      "Interpreted structures",
      "Mission reports",
    ],
    sectors: ["Mining & Minerals", "Government", "Environmental & Development"],
    desc: "Magnetic and induced polarisation (IP) / resistivity surveys, processed into magnetic intensity and analytic signal maps and chargeability and resistivity sections that reveal structures and anomalies to guide exploration and drilling.",
    image: ipSectionImg,
  },
] as const;

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

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
    items: ["LiDAR", "Topographic", "Corridor", "Hydrographic", "GIS", "3D modelling"],
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
    items: [
      "Mineral exploration",
      "Geophysics",
      "Stockpiles",
      "Conservation",
      "Environmental mapping",
    ],
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
