import { Link } from "wouter";
import heroVideo from "@assets/hero-video.mov";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 text-center">
        <h1 className="text-lg md:text-xl font-light tracking-[0.2em] text-white/60 mb-6 uppercase" data-testid="text-hero-label">
          Allumi — Illuminate Your Growth
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12 leading-relaxed" data-testid="text-hero-title">
          Creating ambitious returns by investing in meaningful and successful growth partnerships with likeminded founders, owners, families, and their businesses is our approach.
        </p>
        <Link href="/about" data-testid="link-our-story">
          <span className="inline-block text-sm font-light tracking-[0.2em] text-white uppercase border-b border-white/40 hover:border-white pb-1 cursor-pointer transition-colors">
            Our Story
          </span>
        </Link>
      </div>
    </section>
  );
}
