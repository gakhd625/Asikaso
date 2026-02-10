import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { StepList } from "@/components";


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

  const colors = colorMap[service.color] || colorMap.blue;

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-blue-950 hover:text-amber-400 
          transition-colors mb-8 group font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Services</span>
        </Link>

        {/* Service Header */}
        <div
          className={`${colors.light} ${colors.border} border-2 rounded-lg p-8 sm:p-10 mb-10 shadow-sm`}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Logo Image */}
            <div className="w-24 h-24 rounded-lg bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
              {service.logo && (
                <Image
                  src={service.logo}
                  alt={service.name}
                  width={96}
                  height={96}
                  className="object-contain p-2"
                  priority
                />
              )}
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-blue-950 mb-3">
                {service.name}
              </h1>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.longDescription}
              </p>
            </div>
          </div>

          {/* Official Website Button */}
          <div className="mt-8">
            <a
              href={service.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${colors.button} text-white 
              font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5`}
            >
              Go to Official Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-amber-950 mb-2 text-lg">
                Important Security Reminder
              </h3>
              <p className="text-amber-900 leading-relaxed">
                Always use official government websites ending in{" "}
                <span className="font-semibold">.gov.ph</span>. Never share
                personal information on unofficial sites. Be aware of scams and
                unauthorized fixers offering quick services.
              </p>
            </div>
          </div>
        </div>

        {/* Service-Specific Note */}
        {service.note && (
          <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-6 mb-10 shadow-sm">
            <h3 className="font-serif font-bold text-slate-950 mb-3 text-lg">
              Note
            </h3>
            <p className="text-slate-700 leading-relaxed">{service.note}</p>
          </div>
        )}

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-950" />
              <h3 className="font-serif font-bold text-blue-950">
                Process Duration
              </h3>
            </div>
            <p className="text-gray-700 text-sm">
              Time varies per agency. Some are same-day, others take 1-2 weeks.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-950" />
              <h3 className="font-serif font-bold text-blue-950">
                What You Will Need
              </h3>
            </div>
            <p className="text-gray-700 text-sm">
              Valid IDs, birth certificate, proof of address, and fees (if
              applicable).
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-blue-950 mb-2">
              Step-by-Step Guide
            </h2>
            <p className="text-gray-600">
              Follow these {service.steps.length} steps to complete your
              application
            </p>
          </div>
          <StepList steps={service.steps} />
        </div>

        {/* Bottom CTA */}
        <div className="bg-linear-to-r from-blue-950 to-blue-900 text-white rounded-lg p-8 sm:p-10 text-center shadow-lg mb-12">
          <h3 className="font-serif font-bold text-2xl mb-3">
            Ready to Apply?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Make sure you have all required documents and information ready
            before visiting the website or office.
          </p>
          <a
            href={service.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 
            font-semibold px-10 py-4 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
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
