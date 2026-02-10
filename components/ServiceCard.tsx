import Link from "next/link";
import { Shield, Users, Home, Heart, LucideIcon } from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Users,
  Home,
  Heart,
};

const colorMap: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600",
    hover: "hover:border-blue-400 hover:shadow-blue-100",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "text-green-600",
    hover: "hover:border-green-400 hover:shadow-green-100",
  },
  yellow: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-600",
    hover: "hover:border-amber-400 hover:shadow-amber-100",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-600",
    hover: "hover:border-red-400 hover:shadow-red-100",
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
        className={`group relative p-6 rounded-xl border-2 ${colors.border} ${colors.bg} ${colors.hover} 
        transition-all duration-300 hover:shadow-lg cursor-pointer h-full`}
      >
        {/* Icon Container */}
        <div
          className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} 
          flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-7 h-7 ${colors.icon}`} strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Action Indicator */}
        <div className="mt-4 flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700">
          <span>View step-by-step guide</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
