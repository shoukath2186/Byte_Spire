import { 
  servicesMeta,
  subServicesMeta,
} from '@/data/services/mainServices';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const meta = servicesMeta[slug] || subServicesMeta[slug];

  if (!meta) {
    return {
      title: 'Service Not Found | ByteSpire'
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: meta.alternates?.canonical || `https://bytespire.in/services/${slug}`,
    },
  };
}

export default function ServiceDetailLayout({ children }) {
  return <>{children}</>;
}
