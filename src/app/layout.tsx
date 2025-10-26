import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import ScrollProgress from "./components/ScrollProgress";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fernando Barrera | Full Stack Developer Portfolio",
  description: "Full Stack Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building modern, scalable web applications with cutting-edge technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Fernando Barrera",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Web Development",
    "Portfolio",
    "Freelance Developer",
    "Software Engineer",
    "Venezuela Developer",
    "Maracaibo Developer"
  ],
  authors: [{ name: "Fernando Barrera" }],
  creator: "Fernando Barrera",
  publisher: "Fernando Barrera",
  metadataBase: new URL("https://my-portfolio-wheat-mu.vercel.app"),
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-wheat-mu.vercel.app",
    title: "Fernando Barrera | Full Stack Developer Portfolio",
    description: "Full Stack Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building modern, scalable web applications.",
    siteName: "Fernando Barrera Portfolio",
    images: [
      {
        url: "/foto.png",
        width: 1200,
        height: 630,
        alt: "Fernando Barrera - Full Stack Developer",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Fernando Barrera | Full Stack Developer Portfolio",
    description: "Full Stack Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["/foto.png"],
    creator: "@ferjbadev",
  },
  
  // Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification
  verification: {
    google: "your-google-verification-code", // Reemplazar con tu código de Google Search Console
  },
  
  // Alternates
  alternates: {
    canonical: "https://my-portfolio-wheat-mu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
