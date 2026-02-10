import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Users,
  Home,
  Heart,
  FileText,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Users,
  Home,
  Heart,
  FileText,
  FileText,
};

const colorMap: Record<
  string,
  { bg: string; border: string; icon: string; hover: string; accent: string }
> = {
  blue: {
    bg: "bg-slate-50",
    border: "border-blue-200",
    icon: "text-blue-950",
    hover: "hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200",
    accent: "group-hover:text-amber-400",
  },
  green: {
    bg: "bg-slate-50",
    border: "border-teal-200",
    icon: "text-teal-900",
    hover: "hover:border-teal-400 hover:shadow-lg hover:shadow-teal-200",
    accent: "group-hover:text-amber-400",
  },
  yellow: {
    bg: "bg-slate-50",
    border: "border-amber-200",
    icon: "text-amber-900",
    hover: "hover:border-amber-400 hover:shadow-lg hover:shadow-amber-200",
    accent: "group-hover:text-amber-400",
  },
  red: {
    bg: "bg-slate-50",
    border: "border-rose-200",
    icon: "text-rose-900",
    hover: "hover:border-rose-400 hover:shadow-lg hover:shadow-rose-200",
    accent: "group-hover:text-amber-400",
  },
  purple: {
    bg: "bg-slate-50",
    border: "border-purple-200",
    icon: "text-purple-900",
    hover: "hover:border-purple-400 hover:shadow-lg hover:shadow-purple-200",
    accent: "group-hover:text-amber-400",
  },
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Shield;
  const colors = colorMap[service.color] || colorMap.blue;

  return (
    <Link href={`/services/${service.slug}`}>
      <div
        className={`group relative p-6 sm:p-7 rounded-lg border transition-all duration-300 cursor-pointer h-full shadow-sm bg-white`}
        style={{ borderColor: 'rgba(15,23,42,0.06)' }}
      >
        {/* Logo/Image Container */}
        <div className="mb-4 overflow-hidden rounded-lg bg-white border-2 border-slate-200 h-32 flex items-center justify-center">
          {service.logo && (
            <Image
              src={service.logo}
              alt={service.name}
              width={120}
              height={120}
              className="object-contain p-2"
              priority
            />
          )}
        </div>

        {/* Content */}
        <div className="space-y-2 mb-4">
          <h3 className="text-lg font-serif font-bold transition-colors" style={{color:'var(--primary-navy)'}}>
            {service.name}
          </h3>
          <p className="text-sm leading-relaxed muted">
            {service.description}
          </p>
        </div>

        {/* Action Indicator */}
        <div className={`mt-4 flex items-center text-sm font-semibold transition-colors`} style={{color:'var(--accent-blue)'}}>
          <span>View guide</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
