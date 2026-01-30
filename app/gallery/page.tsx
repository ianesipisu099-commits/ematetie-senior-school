import Container from "../../components/container";
import Image from "next/image";
import { siteConfig } from "../../lib/site-config";

const images = [
  {
    src: "/images/gallery/school-gate.jpeg",
    title: "School Entrance",
  },
  {
    src: "/images/gallery/classroom.jpeg",
    title: "Classrooms",
    note: "Placeholder image — classrooms and learning spaces.",
  },
  {
    src: "/images/gallery/students-learning.jpeg",
    title: "Student Life",
    note: "Placeholder image — co-curricular and academic activities.",
  },
  {
    src: "/images/gallery/science-lab.jpeg",
    title: "School Facilities",
    note: "Placeholder image — laboratories and facilities.",
  },
];

export default function GalleryPage() {
  return (
    <Container>
      <div className="py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Gallery
          </h1>
          <p className="mt-4 text-gray-600 sm:text-lg">
            A visual preview of life and learning at {siteConfig.name}. This LV1
            gallery uses placeholders to demonstrate how the final gallery will
            appear.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-xl border bg-white"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-medium">{img.title}</p>
                <p className="mt-1 text-sm text-gray-600">{img.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LV1 note */}
        <div className="mt-10 rounded-xl border bg-gray-50 p-5 text-sm text-gray-700 max-w-3xl">
          <span className="font-medium">LV1 note:</span> Official school photos
          (gate, classrooms, laboratories, staff, students, and activities) will
          replace these placeholders once provided by the school.
        </div>
      </div>
    </Container>
  );
}
