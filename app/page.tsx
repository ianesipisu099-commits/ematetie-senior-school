import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import { siteConfig } from "../lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-white">
        <Container>
          <div className="grid gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-16">
            {/* Text */}
            <div className="max-w-xl">
              <p className="text-sm font-medium text-gray-600">Welcome to</p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {siteConfig.hero.headline}
              </h1>

              <p className="mt-4 text-gray-600 sm:text-lg">
                {siteConfig.hero.subheadline}
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-500">
                {siteConfig.hero.badges.map((b) => (
                  <span key={b} className="rounded-full border px-3 py-1">
                    {b}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Apply / Admissions
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>

              {/* LV1 placeholder note */}
              <div className="mt-6 rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-700">
                <span className="font-medium">LV1 preview:</span> Some sections
                use placeholders (photos and documents) and will be updated with
                official school content.
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl border bg-gray-50">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={siteConfig.brand.gate}
                  alt={`${siteConfig.name} gate`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick info cards */}
      <section className="border-t bg-gray-50">
        <Container>
          <div className="grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-medium">Academics</h3>
              <p className="mt-2 text-sm text-gray-600">
                Curriculum overview, subjects offered, and learning support (8-4-4
                & CBE Transition).
              </p>
              <div className="mt-4">
                <Link
                  href="/academics"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  View Academics →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-medium">Leadership</h3>
              <p className="mt-2 text-sm text-gray-600">
                Full-length messages and profiles from the Principal and Deputy
                Principal.
              </p>
              <div className="mt-4">
                <Link
                  href="/leadership"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  View Leadership →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-medium">Admissions</h3>
                <p className="mt-2 text-sm text-gray-600">
  Admissions are currently <span className="font-medium">OPEN</span>. Requirements
  and documents will be updated once provided.
</p>
              <div className="mt-4">
                <Link
                  href="/admissions"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  Go to Admissions →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Announcements section (LV1 placeholders) */}
      <section className="border-t bg-white">
        <Container>
          <div className="py-14">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold">Latest Announcements</h2>
              <p className="mt-2 text-gray-600">
                LV1 preview announcements. These will be replaced with official
                school notices.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-5">
                <p className="text-sm text-gray-500">Placeholder</p>
                <h3 className="mt-2 font-medium">Term Dates</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Placeholder: Term opening and closing dates will be posted here.
                </p>
              </div>

              <div className="rounded-lg border p-5">
                <p className="text-sm text-gray-500">Placeholder</p>
                <h3 className="mt-2 font-medium">Admissions Notice</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Placeholder: Admission letters and reporting instructions will
                  be shared here.
                </p>
              </div>

              <div className="rounded-lg border p-5">
                <p className="text-sm text-gray-500">Placeholder</p>
                <h3 className="mt-2 font-medium">Exams & Assessments</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Placeholder: Exam schedules and academic updates will appear here.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


