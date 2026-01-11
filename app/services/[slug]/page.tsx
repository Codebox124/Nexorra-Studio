import { servicesData } from "@/lib/services-data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
export default async function IndividualService({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <ServicePageClient data={data} slug={slug} />;
}
