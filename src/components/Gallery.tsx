import Image from "next/image";

export interface ArtworkItem {
  id: number;
  url: string;
  title: string;
  medium: string;
  year: string;
  width: number;
  height: number;
}

interface GalleryProps {
  items: ArtworkItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg cursor-pointer"
        >
          {/* Image */}
          <Image
            src={item.url}
            alt={item.title}
            width={item.width}
            height={item.height}
            className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm font-semibold leading-snug">
              {item.title}
            </p>
            <p className="text-white/70 text-xs mt-0.5">
              {item.medium} · {item.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}