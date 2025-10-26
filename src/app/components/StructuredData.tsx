export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fernando Barrera",
    "url": "https://my-portfolio-wheat-mu.vercel.app",
    "image": "https://my-portfolio-wheat-mu.vercel.app/foto.png",
    "sameAs": [
      "https://github.com/ferjbadev",
      "https://linkedin.com/in/fernandobarreraa",
      "https://wa.me/584124389712"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Full Stack Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building modern, scalable web applications with cutting-edge technologies.",
    "email": "barrerafernando54@gmail.com",
    "telephone": "+584124389712",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Maracaibo",
      "addressCountry": "Venezuela"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Universidad del Zulia"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
