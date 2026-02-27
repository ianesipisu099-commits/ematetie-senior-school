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
          <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-16">
            {/* Text */}
            <div className="max-w-xl">
              <p className="text-sm sm:text-base font-semibold text-slate-700">
                Welcome to
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                {siteConfig.hero.headline}
              </h1>

              <p className="mt-4 text-slate-600 sm:text-lg leading-relaxed">
                {siteConfig.hero.subheadline}
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-600">
                {siteConfig.hero.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Apply / Admissions
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>

              {/* LV1 note */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold">LV1 preview:</span> Some sections
                use placeholders and will be updated with official school
                content.
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
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
      <section className="border-t border-slate-200 bg-slate-50">
        <Container>
          <div className="grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Academics
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Curriculum overview, subjects offered, and learning support (8-4-4
                & CBE Transition).
              </p>
              <div className="mt-4">
                <Link
                  href="/academics"
                  className="text-sm font-semibold text-slate-900 hover:underline"
                >
                  View Academics →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Leadership
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Full-length messages and profiles from the Principal and Deputy
                Principal.
              </p>
              <div className="mt-4">
                <Link
                  href="/leadership"
                  className="text-sm font-semibold text-slate-900 hover:underline"
                >
                  View Leadership →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Admissions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Admissions are currently <span className="font-semibold">OPEN</span>.
                Requirements and documents will be updated once provided.
              </p>
              <div className="mt-4">
                <Link
                  href="/admissions"
                  className="text-sm font-semibold text-slate-900 hover:underline"
                >
                  Go to Admissions →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Announcements */}
      <section className="border-t border-slate-200 bg-white">
        <Container>
          <div className="py-14">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Latest Announcements
              </h2>
              <p className="mt-2 text-slate-600">
                LV1 preview announcements. These will be replaced with official
                school notices.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Placeholder</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Term Dates
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Term opening and closing dates will be posted here.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Placeholder</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Admissions Notice
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Admission letters and reporting instructions will be shared here.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Placeholder</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Exams & Assessments
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Exam schedules and academic updates will appear here.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

