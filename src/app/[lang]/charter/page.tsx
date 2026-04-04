import BackButton from '@/components/ui/BackButton';

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-background text-on_background p-8 lg:p-24 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-on_background to-secondary">Innovation Manifesto</h1>
        <div className="space-y-6 text-on_surface_variant text-lg leading-relaxed mt-12 bg-surface_container_low p-8 rounded-2xl border border-outline_variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none"></div>
          <p className="relative z-10 text-xl text-on_surface font-semibold italic">"The Kinetic Intelligence is not a methodology. It's a momentum."</p>
          <p className="relative z-10">This is a standard placeholder text for the Reactivando Innovation Manifesto. This page represents the overarching philosophy of developers evolving into tech founders.</p>
          <p className="relative z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue.</p>
        </div>
      </div>
    </div>
  );
}
