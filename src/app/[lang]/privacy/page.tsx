import BackButton from '@/components/ui/BackButton';

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-background text-on_background p-8 lg:p-24 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on_surface">Privacy Policy</h1>
        <div className="space-y-6 text-on_surface_variant text-lg leading-relaxed mt-12 bg-surface_container_low p-8 rounded-2xl border border-outline_variant/10">
          <p>This is a standard placeholder text for the Privacy Policy document.</p>
          <p>We take your privacy and data security very seriously. All provisions concerning data collection, processing, and retention for Reactivando Hub Community members will be stated here in clear, accessible terms.</p>
          <p>Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
        </div>
      </div>
    </div>
  );
}
