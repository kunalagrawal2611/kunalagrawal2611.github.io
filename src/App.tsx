import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import Analytics from "./components/Analytics";
import JsonLd from "./components/JsonLd";

export default function App() {
  return (
    <>
      <JsonLd />
      <Analytics />
      <div className="relative min-h-screen">
        <a
          href="#research"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-base"
        >
          Skip to content
        </a>

        <div className="pointer-events-none fixed inset-0 bg-grid bg-[length:48px_48px] opacity-[0.28]" />
        <div className="pointer-events-none fixed -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[120px]" />
        <div className="pointer-events-none fixed bottom-0 left-0 h-64 w-full bg-gradient-to-t from-base via-base/80 to-transparent" />

        <div className="relative">
          <Navigation />
          <main>
            <Hero />
            <FeaturedWork />
            <Research />
            <Publications />
            <Experience />
            <Stack />
            <Contact />
          </main>
          <BackToTop />
        </div>
      </div>
    </>
  );
}
