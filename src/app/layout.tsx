import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfonso José García Bañón | Ingeniero de Software & DevSecOps",
  description: "Blog personal sobre CI/CD, Testing, Seguridad y DevSecOps. Especialista en el ciclo de vida del software en Banco Santander.",
  keywords: ["DevSecOps", "CI/CD", "Testing", "Seguridad", "GitHub Actions", "Jenkins", "Java", "Spring Boot"],
  authors: [{ name: "Alfonso José García Bañón" }],
  openGraph: {
    title: "Alfonso José García Bañón | Ingeniero de Software & DevSecOps",
    description: "Blog personal sobre CI/CD, Testing, Seguridad y DevSecOps.",
    url: "https://alfonsojosegarcia.com",
    siteName: "Alfonso JG Bañón",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfonso José García Bañón | DevSecOps",
    description: "Blog personal sobre CI/CD, Testing, Seguridad y DevSecOps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
