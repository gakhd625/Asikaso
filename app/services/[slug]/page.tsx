import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, AlertTriangle, Shield, Users, Home, Heart } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs, type Service } from "@/data/services";
import { StepList } from "@/components";

// Map icon names to components
const iconMap: Record<string, typeof Shield> = {
  Shield,
  Users,
  Home,
  Heart,
};

const colorMap: Record<string, { bg: string; text: string; border: string; button: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    button: "bg-green-600 hover:bg-green-700",
  },
  yellow: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-200",
    button: "bg-red-600 hover:bg-red-700",
  },
};

// Generate static params for all services
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Shield;
  const colors = colorMap[service.color] || colorMap.blue;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 
        transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Dashboard</span>
      </Link>

      {/* Service Header */}
      <div className={`${colors.bg} ${colors.border} border rounded-xl p-6 sm:p-8 mb-8`}>
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-xl ${colors.bg} ${colors.border} border-2 
            flex items-center justify-center`}
          >
            <Icon className={`w-8 h-8 ${colors.text}`} strokeWidth={2} />
          </div>

          {/* Title & Description */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
            <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>
          </div>
        </div>

        {/* Official Website Button */}
        <div className="mt-6">
          <a
            href={service.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${colors.button} text-white 
            font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm`}
          >
            Go to Official Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">Important Reminder</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              Always use official government websites ending in <strong>.gov.ph</strong>. Never
              share your personal information on unofficial sites. Beware of scams and fixers.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Step-by-Step Guide ({service.steps.length} Steps)
        </h2>
        <StepList steps={service.steps} />
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-100 rounded-xl p-6 text-center">
        <h3 className="font-bold text-gray-900 text-lg mb-2">Ready to Apply?</h3>
        <p className="text-gray-600 mb-4">
          Make sure you have all required documents before starting your application.
        </p>
        <a
          href={service.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${colors.button} text-white 
          font-semibold px-8 py-3 rounded-lg transition-colors shadow-sm`}
        >
          Start Application on {service.shortName} Website
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-gray-400 text-xs text-center mt-8">
        Information last updated: January 2026. Please verify details on official websites.
      </p>
    </div>
  );
}
