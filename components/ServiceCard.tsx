import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { Service } from "@/data/services";


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
  const colors = colorMap[service.color] || colorMap.blue;

  return (
    <Link href={`/services/${service.slug}`}>
      <div
        className={`group relative p-6 sm:p-7 rounded-lg border-2 ${colors.border} ${colors.bg} ${colors.hover} 
        transition-all duration-300 cursor-pointer h-full shadow-sm`}
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
          <h3 className="text-lg font-serif font-bold text-blue-950 group-hover:text-blue-800 transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Action Indicator */}
        <div
          className={`mt-4 flex items-center text-sm font-semibold text-blue-950 ${colors.accent} transition-colors`}
        >
          <span>View guide</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
