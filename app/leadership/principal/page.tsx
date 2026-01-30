import Image from "next/image";
import Link from "next/link";
import Container from "../../../components/container";
import { siteConfig } from "../../../lib/site-config";

export default function PrincipalPage() {
  const leader = siteConfig.leadership.principal;

  return (
    <Container>
      <div className="py-14">
        <Link className="text-sm text-gray-600 hover:underline" href="/leadership">
          ← Back to Leadership
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-5 md:items-start">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={leader.photo}
                  alt={`${leader.name} photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold">{leader.name}</div>
                <div className="text-sm text-gray-600">{leader.title}</div>
                <div className="mt-3 rounded-xl border bg-gray-50 px-3 py-2 text-xs text-gray-600">
                  Placeholder photo — official photo will be provided by the school.
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-2 text-xs font-medium text-gray-500">
                Leadership Message
              </div>
              <h1 className="text-2xl font-bold tracking-tight">
                {leader.messageTitle}
              </h1>

              <div className="mt-5 space-y-4 text-[15px] leading-7 text-gray-700">
                {leader.messageBody.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold">{leader.signature}</div>
                <div className="text-sm text-gray-600">{leader.title}</div>
              </div>

              <div className="mt-6 rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-700">
                Note: Sections marked “Placeholder” will be replaced with the
                school’s official content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

