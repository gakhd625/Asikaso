import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Shield,
  Users,
  Home,
  Heart,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { StepList } from "@/components";

// Map icon names to components
const iconMap: Record<string, typeof Shield> = {
  Shield,
  Users,
  Home,
  Heart,
  FileText,
};

const colorMap: Record<
  string,
  {
    bg: string;
    text: string;
    border: string;
    button: string;
    light: string;
    accent: string;
  }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-950",
    border: "border-blue-200",
    button: "bg-blue-950 hover:bg-blue-900",
    light: "bg-blue-50",
    accent: "text-blue-600",
  },
  green: {
    bg: "bg-teal-50",
    text: "text-teal-950",
    border: "border-teal-200",
    button: "bg-blue-950 hover:bg-blue-900",
    light: "bg-teal-50",
    accent: "text-teal-600",
  },
  yellow: {
    bg: "bg-amber-50",
    text: "text-amber-950",
    border: "border-amber-200",
    button: "bg-blue-950 hover:bg-blue-900",
    light: "bg-amber-50",
    accent: "text-amber-600",
  },
  purple: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    button: "bg-violet-600 hover:bg-violet-700",
  },
  red: {
    bg: "bg-rose-50",
    text: "text-rose-950",
    border: "border-rose-200",
    button: "bg-blue-950 hover:bg-blue-900",
    light: "bg-rose-50",
    accent: "text-rose-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-950",
    border: "border-purple-200",
    button: "bg-blue-950 hover:bg-blue-900",
    light: "bg-purple-50",
    accent: "text-purple-600",
  },
};

// Generate static params for all services
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} Guide - Asikaso`,
    description: service.longDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Shield;
  const colors = colorMap[service.color] || colorMap.blue;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mb-8 group font-medium"
          style={{ color: 'var(--primary-navy)' }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Services</span>
        </Link>

        {/* Service Header */}
        <div
          className={`rounded-lg p-8 sm:p-10 mb-10 shadow-sm`}
          style={{ backgroundColor: 'rgba(19,133,255,0.04)', border: '1px solid rgba(11,58,97,0.06)'}}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Icon */}
            <div
              className={`w-20 h-20 rounded-lg ${colors.bg} ${colors.border} border-2 flex items-center justify-center shrink-0`}
            >
              <Icon
                className={`w-10 h-10 ${colors.accent}`}
                strokeWidth={1.5}
              />
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-3" style={{color:'var(--primary-navy)'}}>
                {service.name}
              </h1>
              <p className="leading-relaxed text-lg muted">
                {service.longDescription}
              </p>

              {service.note && (
                <div className="mt-4 p-4 rounded-md" style={{backgroundColor: 'rgba(255,243,205,0.6)', border: '1px solid rgba(245,158,11,0.14)'}}>
                  <h4 className="font-semibold mb-1" style={{color: 'var(--primary-navy)'}}>Note</h4>
                  <p className="muted text-sm">{service.note}</p>
                </div>
              )}
            </div>
          </div>

          {/* Official Website Button */}
          <div className="mt-8">
            <a
              href={service.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 btn-primary`}
            >
              Go to Official Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="rounded-lg p-6 mb-10 shadow-sm" style={{backgroundColor:'rgba(107,114,128,0.03)', border:'1px solid rgba(107,114,128,0.06)'}}>
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6" style={{color:'var(--accent-blue)'}} />
            <div>
              <h3 className="font-serif font-bold mb-2 text-lg" style={{color:'var(--primary-navy)'}}>
                Important Security Reminder
              </h3>
              <p className="muted leading-relaxed">
                Always use official government websites ending in <span className="font-semibold">.gov.ph</span>. Never share personal information on unofficial sites. Be aware of scams and unauthorized fixers offering quick services.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5" style={{color:'var(--primary-navy)'}} />
              <h3 className="font-serif font-bold" style={{color:'var(--primary-navy)'}}>
                Process Duration
              </h3>
            </div>
            <p className="muted text-sm">
              Time varies per agency. Some are same-day, others take 1-2 weeks.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-5 h-5" style={{color:'var(--primary-navy)'}} />
              <h3 className="font-serif font-bold" style={{color:'var(--primary-navy)'}}>
                What You Will Need
              </h3>
            </div>
            <p className="muted text-sm">
              Valid IDs, birth certificate, proof of address, and fees (if
              applicable).
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2" style={{color:'var(--primary-navy)'}}>
              Step-by-Step Guide
            </h2>
            <p className="muted">
              Follow these {service.steps.length} steps to complete your
              application
            </p>
          </div>
          <StepList steps={service.steps} />
        </div>

        {/* Bottom CTA */}
        <div className="rounded-lg p-8 sm:p-10 text-center shadow-sm mb-12" style={{backgroundColor:'rgba(19,133,255,0.04)'}}>
          <h3 className="font-serif font-bold text-2xl mb-3">
            Ready to Apply?
          </h3>
          <p className="muted mb-6 max-w-2xl mx-auto">
            Make sure you have all required documents and information ready
            before visiting the website or office.
          </p>
          <a
            href={service.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Start Application on {service.shortName}&apos;s Website
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="text-center border-t-2 border-slate-200 pt-8">
          <p className="text-gray-600 text-sm mb-2">
            Information last updated: February 2026. Please verify current
            requirements on official websites.
          </p>
          <p className="text-gray-500 text-xs">
            All information sourced from official Philippine Government
            agencies.
          </p>
        </div>
      </div>
    </div>
  );
}
