import Gallery, { ArtworkItem } from "@/components/Gallery";

const artworks: ArtworkItem[] = [
  {
    id: 1,
    url: "https://picsum.photos/seed/art1/800/600",
    title: "Untitled I",
    medium: "Oil on canvas",
    year: "2024",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    url: "https://picsum.photos/seed/art2/600/900",
    title: "Still Life No. 3",
    medium: "Watercolour",
    year: "2024",
    width: 600,
    height: 900,
  },
  {
    id: 3,
    url: "https://picsum.photos/seed/art3/800/1000",
    title: "Morning Light",
    medium: "Photography",
    year: "2023",
    width: 800,
    height: 1000,
  },
  {
    id: 4,
    url: "https://picsum.photos/seed/art4/700/500",
    title: "Fragments",
    medium: "Mixed media",
    year: "2023",
    width: 700,
    height: 500,
  },
  {
    id: 5,
    url: "https://picsum.photos/seed/art5/600/800",
    title: "Dusk Study",
    medium: "Acrylic",
    year: "2023",
    width: 600,
    height: 800,
  },
  {
    id: 6,
    url: "https://picsum.photos/seed/art6/800/600",
    title: "Form & Void",
    medium: "Oil on canvas",
    year: "2022",
    width: 800,
    height: 600,
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h1>
      <p className="text-gray-500 mb-12">
        A selection of recent and archived works.
      </p>
      <Gallery items={artworks} />
    </div>
  );
}