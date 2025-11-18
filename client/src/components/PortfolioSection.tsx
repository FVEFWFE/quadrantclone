import { Link } from "wouter";
import { Building2, TrendingUp, Users, Globe } from "lucide-react";

export default function PortfolioSection() {
  const investmentFocus = [
    {
      icon: Building2,
      title: "Healthcare",
      description: "Consolidation platforms, specialty clinics, and healthcare services with strong unit economics"
    },
    {
      icon: TrendingUp,
      title: "Technology",
      description: "B2B SaaS, healthcare tech, and digital infrastructure enabling operational excellence"
    },
    {
      icon: Users,
      title: "Consumer",
      description: "Brand aggregation and consumer platforms with defensible market positions"
    },
    {
      icon: Globe,
      title: "Regional Focus",
      description: "Singapore-based platforms with expansion potential across Southeast Asia"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6" data-testid="text-portfolio-title">
            Investment Focus
          </h2>
          <p className="text-lg font-light text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-portfolio-subtitle">
            Allumi targets high-growth businesses across Asia where operational excellence and strategic partnerships unlock exponential value.
          </p>
          <Link href="/investment-criteria" data-testid="link-view-all">
            <span className="inline-block text-xs font-light tracking-[0.2em] text-white uppercase border-b border-white/40 hover:border-white pb-1 cursor-pointer transition-colors">
              Investment Criteria
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {investmentFocus.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="bg-black border border-white/10 p-8 hover:border-white/20 transition-colors group"
                data-testid={`card-portfolio-${index}`}
              >
                <Icon className="w-12 h-12 text-white/40 group-hover:text-white/60 transition-colors mb-6" />
                <h3 className="text-xl font-light text-white mb-4">{sector.title}</h3>
                <p className="text-base font-light text-white/60 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
