import BackButton from '@/components/ui/BackButton';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-background text-on_background p-8 lg:p-24 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on_surface">Terms of Service</h1>
        <div className="space-y-6 text-on_surface_variant text-lg leading-relaxed mt-12 bg-surface_container_low p-8 rounded-2xl border border-outline_variant/10">
          <p>This is a standard placeholder text for the Terms of Service document.</p>
          <p>All content here should be revised with the official legal guidelines of Reactivando Hub Community. Until then, these terms represent a generic placeholder to ensure layout integrity and navigational flow testing.</p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
        </div>
      </div>
    </div>
  );
}
