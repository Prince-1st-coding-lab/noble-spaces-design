import bookshelfDesk from "@/assets/gallery/bookshelf-desk.jpg";
import execChairLeather from "@/assets/gallery/exec-chair-leather.jpg";
import execChairWindow from "@/assets/gallery/exec-chair-window.jpg";
import executiveOffice from "@/assets/gallery/executive-office.jpg";
import fileCabinetSafe from "@/assets/gallery/file-cabinet-safe.jpg";
import modularShelving from "@/assets/gallery/modular-shelving.jpg";
import tvWallMarble from "@/assets/gallery/tv-wall-marble.jpg";
import tvWallSlats from "@/assets/gallery/tv-wall-slats.jpg";
import tvWallHerringbone from "@/assets/gallery/tv-wall-herringbone.jpg";

export type GalleryCategory = "office" | "interior" | "furniture" | "tv-walls" | "storage";

export interface GalleryItem {
  id: string;
  image: string;
  titleEn: string;
  titleFr: string;
  titleRw: string;
  category: GalleryCategory;
  serviceSlugs: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "bookshelf-desk",
    image: bookshelfDesk,
    titleEn: "Built-in Bookshelf & Study Desk",
    titleFr: "Bibliothèque et bureau intégrés",
    titleRw: "Ishyiguro ry'Ibitabo n'Ameza",
    category: "furniture",
    serviceSlugs: ["furniture-manufacturing"],
  },
  {
    id: "exec-chair-leather",
    image: execChairLeather,
    titleEn: "Executive Leather Office Chair",
    titleFr: "Chaise de bureau exécutive en cuir",
    titleRw: "Intebe y'Akazi y'Uruhu",
    category: "office",
    serviceSlugs: ["office-furniture"],
  },
  {
    id: "exec-chair-window",
    image: execChairWindow,
    titleEn: "Ergonomic Executive Chair",
    titleFr: "Chaise exécutive ergonomique",
    titleRw: "Intebe Yorohereye y'Umuyobozi",
    category: "office",
    serviceSlugs: ["office-furniture"],
  },
  {
    id: "executive-office",
    image: executiveOffice,
    titleEn: "Wood-Paneled Executive Office",
    titleFr: "Bureau exécutif lambrissé",
    titleRw: "Ibiro by'Umuyobozi by'Ibiti",
    category: "interior",
    serviceSlugs: ["interior-design", "office-furniture"],
  },
  {
    id: "file-cabinet-safe",
    image: fileCabinetSafe,
    titleEn: "Custom File Cabinet with Safe",
    titleFr: "Classeur sur mesure avec coffre-fort",
    titleRw: "Ikabine y'Amadosiye n'Iby'Ingenzi",
    category: "storage",
    serviceSlugs: ["furniture-manufacturing"],
  },
  {
    id: "modular-shelving",
    image: modularShelving,
    titleEn: "Modular Office Shelving System",
    titleFr: "Système d'étagères modulaires de bureau",
    titleRw: "Ishyiguro ry'Ibiro Riteranywa",
    category: "storage",
    serviceSlugs: ["office-furniture", "wall-partitioning"],
  },
  {
    id: "tv-wall-marble",
    image: tvWallMarble,
    titleEn: "Marble & Wood Slat TV Wall",
    titleFr: "Mur TV en marbre et lattes de bois",
    titleRw: "Urukuta rwa TV rw'Imarbre n'Ibiti",
    category: "tv-walls",
    serviceSlugs: ["interior-design"],
  },
  {
    id: "tv-wall-slats",
    image: tvWallSlats,
    titleEn: "Wood Slat TV Wall with Console",
    titleFr: "Mur TV en lattes de bois avec console",
    titleRw: "Urukuta rwa TV rw'Ibiti n'Ameza",
    category: "tv-walls",
    serviceSlugs: ["interior-design"],
  },
  {
    id: "tv-wall-herringbone",
    image: tvWallHerringbone,
    titleEn: "Herringbone TV Wall with LED Cove",
    titleFr: "Mur TV à chevrons avec éclairage LED",
    titleRw: "Urukuta rwa TV n'Amatara ya LED",
    category: "interior",
    serviceSlugs: ["interior-design", "ceiling-installation"],
  },
];

export const getGalleryByService = (slug: string) =>
  galleryItems.filter(item => item.serviceSlugs.includes(slug));

export const galleryCategories: { value: GalleryCategory | "all"; labelKey: string }[] = [
  { value: "all", labelKey: "gallery.filterAll" },
  { value: "office", labelKey: "gallery.filterOffice" },
  { value: "interior", labelKey: "gallery.filterInterior" },
  { value: "furniture", labelKey: "gallery.filterFurniture" },
  { value: "tv-walls", labelKey: "gallery.filterTvWalls" },
  { value: "storage", labelKey: "gallery.filterStorage" },
];
