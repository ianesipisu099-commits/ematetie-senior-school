import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container";
import { siteConfig } from "../../lib/site-config";

export default function LeadershipIndexPage() {
  const principal = siteConfig.leadership.principal;
  const deputy = siteConfig.leadership.deputyPrincipal;

  const Card = ({
    href,
    name,
    title,
    photo,
  }: {
    href: string;
    name: string;
    title: string;
    photo: string;
  }) => (
    <Link href={href} className="group">
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
        <div className="relative aspect-[4/5] w-full">
          <Image src={photo} alt={`${name} photo`} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="text-lg font-semibold group-hover:underline">{name}</div>
          <div className="text-sm text-gray-600">{title}</div>
          <div className="mt-3 rounded-xl border bg-gray-50 px-3 py-2 text-xs text-gray-600">
            Click to read the full message
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <Container>
      <div className="py-14">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Leadership
        </h1>
        <p className="mt-4 text-gray-600 sm:text-lg">
          Messages and profiles from the school administration.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card
            href="/leadership/principal"
            name={principal.name}
            title={principal.title}
            photo={principal.photo}
          />
          <Card
            href="/leadership/deputy-principal"
            name={deputy.name}
            title={deputy.title}
            photo={deputy.photo}
          />
        </div>
      </div>
    </Container>
  );
}
