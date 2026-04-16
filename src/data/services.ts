import { Paintbrush, Sofa, Armchair, Building2, LayoutGrid, ChefHat, Lamp, Wrench, Blinds, DoorOpen, Volume2, Settings } from "lucide-react";

import interiorImg from "@/assets/interior-design.jpg";
import furnitureImg from "@/assets/furniture.jpg";
import sofaImg from "@/assets/sofa.jpg";
import officeImg from "@/assets/office.jpg";
import wallPartitionImg from "@/assets/wall-partition.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import ceilingImg from "@/assets/ceiling.jpg";
import repairImg from "@/assets/repair.jpg";
import curtainsImg from "@/assets/curtains.jpg";
import doorsImg from "@/assets/doors.jpg";
import soundproofImg from "@/assets/soundproof.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: typeof Paintbrush;
  image: string;
  features: string[];
  process: { step: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    shortTitle: "Interior Design",
    description: "Transform your living spaces with our expert interior design services that blend aesthetics with functionality.",
    longDescription: "At Noble Spaces, our interior design service is a comprehensive approach to transforming your environment. We work closely with you to understand your lifestyle, preferences, and aspirations, creating spaces that are both beautiful and functional. From concept development to final installation, our team of experienced designers ensures every detail is perfect.",
    icon: Paintbrush,
    image: interiorImg,
    features: ["Custom Space Planning", "3D Visualization", "Material & Color Consultation", "Lighting Design", "Art & Accessory Curation", "Project Management"],
    process: [
      { step: "Consultation", description: "We meet to understand your vision, lifestyle, and budget." },
      { step: "Concept Development", description: "Our designers create mood boards and 3D visualizations." },
      { step: "Design Refinement", description: "We refine the design based on your feedback." },
      { step: "Implementation", description: "Our team brings the design to life with precision." },
    ],
  },
  {
    slug: "furniture-manufacturing",
    title: "Furniture Manufacturing",
    shortTitle: "Furniture Manufacturing",
    description: "Custom-built furniture crafted with precision and premium materials to match your unique style.",
    longDescription: "Our furniture manufacturing division produces bespoke pieces tailored to your exact specifications. Using premium hardwoods, metals, and upholstery materials, we create furniture that is not only beautiful but built to last. Every piece undergoes rigorous quality control to ensure it meets our exacting standards.",
    icon: Building2,
    image: furnitureImg,
    features: ["Custom Designs", "Premium Materials", "Handcrafted Quality", "Durable Construction", "Wide Style Range", "Size Customization"],
    process: [
      { step: "Design Brief", description: "Share your requirements, style preferences, and dimensions." },
      { step: "Material Selection", description: "Choose from our curated range of premium materials." },
      { step: "Crafting", description: "Our artisans handcraft your furniture with meticulous care." },
      { step: "Delivery & Setup", description: "Professional delivery and placement in your space." },
    ],
  },
  {
    slug: "sofa-design",
    title: "Sofa Design and Manufacturing",
    shortTitle: "Sofa Design",
    description: "Luxurious, custom-designed sofas built for comfort and elegance in every detail.",
    longDescription: "Our sofa design and manufacturing service creates seating that perfectly balances comfort, durability, and style. From contemporary modular designs to classic Chesterfields, we craft each sofa to your specifications using premium fabrics, leathers, and high-resilience foam for lasting comfort.",
    icon: Armchair,
    image: sofaImg,
    features: ["Custom Upholstery", "Ergonomic Design", "Premium Fabrics & Leather", "Modular Options", "Frame Warranty", "Color Matching"],
    process: [
      { step: "Style Selection", description: "Choose your preferred sofa style and configuration." },
      { step: "Fabric & Color", description: "Select from hundreds of premium upholstery options." },
      { step: "Manufacturing", description: "Expert craftsmen build your sofa to perfection." },
      { step: "Quality Check & Delivery", description: "Thorough inspection before delivery to your home." },
    ],
  },
  {
    slug: "office-furniture",
    title: "Modern Office Furniture",
    shortTitle: "Office Furniture",
    description: "Ergonomic and stylish office furniture solutions for productive work environments.",
    longDescription: "Create a workspace that inspires productivity and reflects your brand identity. Our modern office furniture solutions include executive desks, ergonomic chairs, conference tables, and complete workstation systems designed for the contemporary professional environment.",
    icon: Building2,
    image: officeImg,
    features: ["Ergonomic Solutions", "Space Optimization", "Brand-Aligned Design", "Cable Management", "Modular Systems", "Standing Desk Options"],
    process: [
      { step: "Space Assessment", description: "We evaluate your office layout and workflow needs." },
      { step: "Design Proposal", description: "Custom furniture plan optimized for your space." },
      { step: "Production", description: "Manufacturing with commercial-grade materials." },
      { step: "Installation", description: "Professional setup with minimal disruption." },
    ],
  },
  {
    slug: "wall-partitioning",
    title: "Wall Partitioning",
    shortTitle: "Wall Partitioning",
    description: "Modern partition solutions to divide and define spaces with elegance and purpose.",
    longDescription: "Our wall partitioning service offers innovative solutions for dividing spaces while maintaining aesthetic appeal. From glass partitions that preserve natural light to acoustic panels that ensure privacy, we provide solutions for homes, offices, and commercial spaces.",
    icon: LayoutGrid,
    image: wallPartitionImg,
    features: ["Glass Partitions", "Acoustic Panels", "Sliding Systems", "Demountable Walls", "Custom Finishes", "Fire-Rated Options"],
    process: [
      { step: "Site Survey", description: "We assess your space and discuss partition requirements." },
      { step: "Design & Specification", description: "Technical drawings and material specifications." },
      { step: "Fabrication", description: "Custom manufacturing to exact measurements." },
      { step: "Installation", description: "Professional fitting with clean finishing." },
    ],
  },
  {
    slug: "kitchen-design",
    title: "Kitchen Design and Installation",
    shortTitle: "Kitchen Design",
    description: "Dream kitchens designed and installed with premium finishes and smart layouts.",
    longDescription: "Your kitchen is the heart of your home, and we design it to be both beautiful and highly functional. From sleek modern designs to warm traditional kitchens, our team handles everything from initial concept to complete installation, including cabinetry, countertops, and appliance integration.",
    icon: ChefHat,
    image: kitchenImg,
    features: ["Custom Cabinetry", "Countertop Selection", "Appliance Integration", "Smart Storage", "Lighting Solutions", "Premium Hardware"],
    process: [
      { step: "Kitchen Assessment", description: "We measure your space and discuss your cooking lifestyle." },
      { step: "3D Design", description: "Full kitchen visualization before any work begins." },
      { step: "Material Selection", description: "Choose cabinets, countertops, and hardware finishes." },
      { step: "Installation", description: "Complete kitchen fitting by our expert team." },
    ],
  },
  {
    slug: "ceiling-installation",
    title: "Ceiling Installation",
    shortTitle: "Ceiling Installation",
    description: "Elegant ceiling designs that add character and sophistication to any room.",
    longDescription: "Transform your rooms from the top down with our ceiling installation services. We offer a wide range of options including coffered ceilings, stretch ceilings, suspended systems, and decorative moldings. Each installation is designed to complement your interior while improving acoustics and lighting integration.",
    icon: Lamp,
    image: ceilingImg,
    features: ["Coffered Ceilings", "Stretch Ceilings", "LED Integration", "Acoustic Treatment", "Decorative Moldings", "Drop Ceilings"],
    process: [
      { step: "Consultation", description: "Discuss ceiling style, height, and lighting needs." },
      { step: "Design", description: "Create detailed ceiling plans with lighting layout." },
      { step: "Preparation", description: "Structural assessment and surface preparation." },
      { step: "Installation", description: "Expert fitting with integrated lighting." },
    ],
  },
  {
    slug: "furniture-repair",
    title: "Furniture Repair and Renovation",
    shortTitle: "Furniture Repair",
    description: "Breathe new life into your beloved furniture with expert restoration services.",
    longDescription: "Don't replace — restore. Our furniture repair and renovation service brings damaged, worn, or outdated furniture back to its former glory. From structural repairs to complete refinishing, our skilled craftsmen use traditional techniques combined with modern materials for lasting results.",
    icon: Wrench,
    image: repairImg,
    features: ["Structural Repair", "Refinishing", "Reupholstery", "Color Matching", "Antique Restoration", "Wood Treatment"],
    process: [
      { step: "Assessment", description: "We inspect the furniture and identify all issues." },
      { step: "Quote & Plan", description: "Detailed restoration plan with transparent pricing." },
      { step: "Restoration", description: "Careful repair and renovation by skilled artisans." },
      { step: "Return", description: "Delivered back looking better than ever." },
    ],
  },
  {
    slug: "curtains-carpets",
    title: "Curtains and Carpets Installation",
    shortTitle: "Curtains & Carpets",
    description: "Premium window treatments and floor coverings to complete your interior design.",
    longDescription: "The finishing touches make all the difference. Our curtains and carpets installation service offers a curated selection of premium fabrics, patterns, and textures. From motorized curtain systems to hand-knotted area rugs, we help you select and install the perfect soft furnishings for your space.",
    icon: Curtains,
    image: curtainsImg,
    features: ["Custom Curtains", "Motorized Systems", "Carpet Fitting", "Rug Selection", "Blackout Options", "Sheer & Layered"],
    process: [
      { step: "Measurement", description: "Precise window and floor measurements." },
      { step: "Fabric Selection", description: "Choose from our extensive fabric library." },
      { step: "Custom Making", description: "Tailored to your exact specifications." },
      { step: "Installation", description: "Professional fitting and dressing." },
    ],
  },
  {
    slug: "door-manufacturing",
    title: "Door Manufacturing and Installation",
    shortTitle: "Door Manufacturing",
    description: "Custom doors that make a statement — from elegant entrance doors to interior masterpieces.",
    longDescription: "A door is more than an entry point — it's a design statement. We manufacture and install custom doors in a variety of materials including solid wood, glass, and composite options. From grand entrance doors to sleek interior sliding systems, each door is crafted to your specifications.",
    icon: DoorOpen,
    image: doorsImg,
    features: ["Solid Wood Doors", "Glass Options", "Sliding Systems", "Security Features", "Custom Finishes", "Hardware Selection"],
    process: [
      { step: "Design Consultation", description: "Discuss style, material, and security requirements." },
      { step: "Measurement", description: "Precise opening measurements for perfect fit." },
      { step: "Manufacturing", description: "Handcrafted to your exact specifications." },
      { step: "Installation", description: "Professional fitting with quality hardware." },
    ],
  },
  {
    slug: "soundproof-installation",
    title: "Sound Proof Installation",
    shortTitle: "Soundproofing",
    description: "Professional acoustic solutions for peaceful, noise-free environments.",
    longDescription: "Whether it's a home theater, recording studio, office, or bedroom, our soundproofing solutions ensure optimal acoustic performance. We use professional-grade materials and techniques to reduce noise transmission, creating quiet, comfortable environments for work and relaxation.",
    icon: Volume2,
    image: soundproofImg,
    features: ["Acoustic Analysis", "Wall Insulation", "Floor Treatment", "Ceiling Solutions", "Door Sealing", "HVAC Silencing"],
    process: [
      { step: "Acoustic Assessment", description: "Measure current noise levels and identify sources." },
      { step: "Solution Design", description: "Custom soundproofing plan for your space." },
      { step: "Material Sourcing", description: "Professional-grade acoustic materials." },
      { step: "Installation", description: "Expert installation for maximum effectiveness." },
    ],
  },
  {
    slug: "maintenance-services",
    title: "Maintenance Work and Services",
    shortTitle: "Maintenance",
    description: "Comprehensive maintenance services to keep your spaces and furniture in perfect condition.",
    longDescription: "Protect your investment with our ongoing maintenance services. From regular furniture care and upholstery cleaning to interior touch-ups and fixture maintenance, we keep your spaces looking as good as the day they were designed. Our maintenance team is trained to handle all aspects of interior upkeep.",
    icon: Settings,
    image: maintenanceImg,
    features: ["Regular Inspections", "Upholstery Care", "Wood Treatment", "Paint Touch-ups", "Hardware Maintenance", "Emergency Repairs"],
    process: [
      { step: "Schedule", description: "Set up a maintenance plan that suits your needs." },
      { step: "Inspection", description: "Thorough assessment of all elements." },
      { step: "Service", description: "Professional maintenance and care." },
      { step: "Report", description: "Detailed report with recommendations." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
