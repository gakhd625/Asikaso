export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  steps: string[];
  officialLink: string;
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    slug: "nbi-clearance",
    name: "NBI Clearance",
    shortName: "NBI",
    description: "National Bureau of Investigation clearance for employment and other purposes.",
    longDescription:
      "The NBI Clearance is a document issued by the National Bureau of Investigation certifying that you have no pending criminal case or derogatory record. It is commonly required for employment, visa applications, and other legal transactions in the Philippines.",
    steps: [
      "Visit the official NBI Clearance website at clearance.nbi.gov.ph",
      "Click 'Apply for Clearance' and create an account or log in",
      "Fill out the online application form with your personal information",
      "Select your preferred NBI branch and appointment date",
      "Pay the clearance fee online (₱155 for regular, ₱255 for courier delivery)",
      "Print your application form and reference number",
      "Go to your chosen NBI branch on your appointment date",
      "Bring valid IDs and your printed application form",
      "Have your biometrics (photo and fingerprints) captured",
      "Wait for your clearance to be released (same day if no 'hit', or 8-10 days if with 'hit')",
    ],
    officialLink: "https://clearance.nbi.gov.ph/",
    icon: "Shield",
    color: "blue",
  },
  {
    slug: "sss-registration",
    name: "SSS Registration",
    shortName: "SSS",
    description: "Social Security System membership for employed and self-employed individuals.",
    longDescription:
      "The Social Security System (SSS) is a government agency that provides social security protection to workers in the private sector. As a member, you can avail of benefits such as sickness, maternity, disability, retirement, death, and funeral benefits.",
    steps: [
      "Visit the official SSS website at www.sss.gov.ph",
      "Click 'Online Services' then 'Online Member Registration'",
      "Fill out the Personal Information form (name, birthdate, address, etc.)",
      "Provide your employment details if currently employed",
      "Upload a scanned copy of your valid ID (birth certificate, passport, or driver's license)",
      "Submit the application and note your temporary SS Number",
      "Wait for email confirmation of your registration",
      "Visit the nearest SSS branch to verify your identity and get your permanent SS Number",
      "Bring 2 valid IDs and the printed confirmation email",
      "Your SSS ID will be mailed to your registered address within 2-4 weeks",
    ],
    officialLink: "https://www.sss.gov.ph/",
    icon: "Users",
    color: "green",
  },
  {
    slug: "pagibig-registration",
    name: "Pag-IBIG Fund Registration",
    shortName: "Pag-IBIG",
    description: "Home Development Mutual Fund for savings and housing loan programs.",
    longDescription:
      "The Pag-IBIG Fund (Home Development Mutual Fund) is a government agency that provides affordable shelter financing and a provident savings program. Members can avail of housing loans, multi-purpose loans, and calamity loans at low interest rates.",
    steps: [
      "Visit the official Pag-IBIG website at www.pagibigfund.gov.ph",
      "Click 'Online Services' then 'Virtual Pag-IBIG'",
      "Select 'Membership Registration' under Online Services",
      "Fill out the online registration form with your personal details",
      "Provide your employer information if currently employed",
      "Upload required documents (valid ID, proof of income)",
      "Submit the application and note your MID Number",
      "Wait for email confirmation of your registration",
      "Your Pag-IBIG MID Number is your permanent member ID",
      "Start contributing to avail of loan benefits (minimum ₱200/month)",
    ],
    officialLink: "https://www.pagibigfund.gov.ph/",
    icon: "Home",
    color: "yellow",
  },
  {
    slug: "philhealth-registration",
    name: "PhilHealth Registration",
    shortName: "PhilHealth",
    description: "Philippine Health Insurance Corporation for healthcare coverage.",
    longDescription:
      "PhilHealth (Philippine Health Insurance Corporation) is a government agency that provides health insurance coverage to all Filipinos. As a member, you can avail of benefits such as hospitalization, outpatient care, and Z benefits for specific illnesses.",
    steps: [
      "Visit the official PhilHealth website at www.philhealth.gov.ph",
      "Click 'Online Services' then 'Electronic Registration'",
      "Select your membership category (Employed, Self-Employed, or Voluntary)",
      "Fill out the online registration form with your personal information",
      "Provide your employment details and employer information",
      "Upload required documents (valid ID, birth certificate)",
      "Submit the application and note your PhilHealth Number",
      "Wait for email confirmation of your registration",
      "Visit the nearest PhilHealth office to get your PhilHealth ID",
      "Bring 2 valid IDs and the printed confirmation for verification",
    ],
    officialLink: "https://www.philhealth.gov.ph/",
    icon: "Heart",
    color: "red",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
