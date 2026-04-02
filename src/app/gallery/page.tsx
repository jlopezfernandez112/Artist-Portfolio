export default function GalleryPage() {
  const artworks = [
    { id: 1, title: "Untitled I", medium: "Oil on canvas", year: "2024" },
    { id: 2, title: "Still Life No. 3", medium: "Watercolour", year: "2024" },
    { id: 3, title: "Morning Light", medium: "Photography", year: "2023" },
    { id: 4, title: "Fragments", medium: "Mixed media", year: "2023" },
    { id: 5, title: "Dusk Study", medium: "Acrylic", year: "2023" },
    { id: 6, title: "Form & Void", medium: "Oil on canvas", year: "2022" },
    { id: 7, title: "Quiet Hours", medium: "Photography", year: "2022" },
    { id: 8, title: "Texture I", medium: "Mixed media", year: "2022" },
    { id: 9, title: "Blue Series IV", medium: "Watercolour", year: "2021" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h1>
      <p className="text-gray-500 mb-12">A selection of recent and archived works.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((work) => (
          <div key={work.id} className="group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3 overflow-hidden flex items-center justify-center text-gray-400 text-sm group-hover:bg-gray-300 transition-colors">
              {work.title}
            </div>
            <p className="text-sm font-medium text-gray-900">{work.title}</p>
            <p className="text-xs text-gray-500">
              {work.medium} · {work.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}