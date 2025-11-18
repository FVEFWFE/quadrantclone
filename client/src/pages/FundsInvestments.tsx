import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, TrendingUp, Users, Globe, Target, DollarSign, Calendar, Award } from "lucide-react";

export default function FundsInvestments() {
  const investmentCriteria = [
    {
      icon: Building2,
      title: "Healthcare",
      description: "Consolidation platforms, specialty clinics, and healthcare services with strong unit economics and fragmented markets"
    },
    {
      icon: TrendingUp,
      title: "Technology",
      description: "B2B SaaS, healthcare tech, and digital infrastructure enabling operational excellence with recurring revenue models"
    },
    {
      icon: Users,
      title: "Consumer",
      description: "Brand aggregation and consumer platforms with defensible market positions and proven customer acquisition"
    },
    {
      icon: Globe,
      title: "Regional Focus",
      description: "Singapore-based platforms with expansion potential across Southeast Asia markets"
    }
  ];

  const dealParameters = [
    {
      icon: DollarSign,
      title: "Deal Size",
      description: "S$5M to S$50M initial equity investment with follow-on capital available for growth"
    },
    {
      icon: Target,
      title: "Business Profile",
      description: "Founder-owned or family businesses with S$2M+ EBITDA seeking strategic partner for expansion"
    },
    {
      icon: Calendar,
      title: "Investment Horizon",
      description: "Long-term partnership focused on 5-7 year value creation with aligned exit strategies"
    },
    {
      icon: Award,
      title: "Value Add",
      description: "Operational excellence, M&A support, strategic guidance, and access to extensive regional network"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32">
        <section className="py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="text-center mb-16">
              <div className="text-xs font-light tracking-[0.2em] text-white/50 uppercase mb-8" data-testid="text-section-label">
                Investment Approach
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-8" data-testid="text-portfolio-title">
                Investment Criteria
              </h1>
              <p className="text-lg font-light text-white/70 leading-relaxed max-w-3xl mx-auto" data-testid="text-portfolio-subtitle">
                Allumi targets high-growth businesses across Asia where operational excellence and strategic partnerships unlock exponential value.
              </p>
            </div>

            <div className="mb-24">
              <h2 className="text-2xl md:text-3xl font-light text-white mb-12 text-center">Target Sectors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {investmentCriteria.map((sector, index) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-white/20 transition-colors group"
                      data-testid={`card-sector-${index}`}
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

            <div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-12 text-center">Deal Parameters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {dealParameters.map((param, index) => {
                  const Icon = param.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-white/20 transition-colors group"
                      data-testid={`card-parameter-${index}`}
                    >
                      <Icon className="w-10 h-10 text-white/40 group-hover:text-white/60 transition-colors mb-6" />
                      <h3 className="text-xl font-light text-white mb-4">{param.title}</h3>
                      <p className="text-base font-light text-white/60 leading-relaxed">
                        {param.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
