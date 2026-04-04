import { presentationsRegistry } from "@/data/presentation";
import PresentationPlayer from "@/components/ui/PresentationPlayer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string; lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const presentation = presentationsRegistry[slug];

  if (!presentation) {
    return { title: 'Presentation Not Found' };
  }

  return {
    title: `${presentation.title} | Reactivando`,
    description: presentation.description,
  };
}

export default async function PresentationPage({ params }: Props) {
  const { slug } = await params;
  const presentation = presentationsRegistry[slug];

  if (!presentation) {
    notFound();
  }

  return (
    <PresentationPlayer 
      slides={presentation.slides} 
      conclusion={presentation.conclusion} 
    />
  );
}
