export const metadata = {
  title: 'IT Services & Digital Solutions in Kerala | ByteSpire',
  description: 'Full-stack IT and digital services for businesses across Kerala, Kochi, Calicut & Trivandrum. Web development, mobile apps, UI/UX design, SEO, and branding.',
  keywords: [
    'IT services Kerala',
    'software company Kerala',
    'web development Kochi',
    'mobile app development Calicut',
    'UI UX design Kerala',
    'digital marketing agency Kerala',
    'branding agency Kochi',
    'enterprise IT solutions Trivandrum'
  ],
  openGraph: {
    title: 'IT Services & Digital Solutions in Kerala | ByteSpire',
    description: 'Empowering businesses across Kerala with cutting-edge software development, mobile apps, UI/UX, and data-driven digital marketing.',
    images: [{ url: '/logo.svg' }],
  },
  alternates: {
    canonical: 'https://bytespire.in/services',
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
