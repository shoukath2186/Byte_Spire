import "./globals.css";

export const metadata = {
  title: "Mobile App & Web Development Company in Kerala | ByteSpire ",
  description:
    "ByteSpire is a leading IT services and digital marketing agency in Kerala, specializing in custom software development, web design, e-commerce stores, digital marketing, and mobile app solutions.",
  keywords: [
    "ByteSpire Innovations",
    "Byte Spire",
    "IT company",
    "web development",
    "mobile app development",
    "digital solutions",
    "software development",
    "UI/UX design",
    "cloud solutions",
    "IT services in India",
  ],
  authors: [{ name: "ByteSpire Innovations Pvt. Ltd", url: "https://bytespire.in" }],
  alternates: {
    canonical: "https://bytespire.in/",
  },
  openGraph: {
    title: "ByteSpire Innovations Pvt. Ltd | Building Digital Solutions, One Byte at a Time",
    description:
      "ByteSpire Innovations Pvt. Ltd delivers high-quality web, mobile, and digital solutions to empower businesses with technology.",
    url: "https://bytespire.in/",
    siteName: "ByteSpire Innovations Pvt. Ltd",
    type: "website",
    images: [
      {
        url: "https://bytespire.in/logo.png",
        width: 800,
        height: 600,
        alt: "ByteSpire Innovations Pvt. Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpire Innovations Pvt. Ltd | Digital IT Solutions",
    description:
      "Empowering businesses with web development, mobile apps, and digital solutions.",
    images: ["https://bytespire.in/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
