// Reusable and extensible hospital network data structure
// Allows new hospitals to be added seamlessly to the network without redesigning components.

export const hospitalsNetwork = [
  {
    id: "vedant-hospital",
    slug: "vedant-hospital",
    name: "Vedant Hospital",
    shortName: "Vedant Hospital",
    tagline: "Safe Motherhood & Compassionate Healing",
    taglineGujarati: "માતૃત્વસ્પર્શ એવમ્ શમનમ્",
    location: "Modasa, Aravalli",
    fullAddress: "3rd Floor, Gajanand Complex, Above Bank of Baroda, Deep Area, Shamlaji Road, Modasa, Dist. Aravalli, Gujarat – 383315",
    route: "/",
    isExternal: false,
    theme: {
      colorName: "purple",
      primaryHex: "#6B2C7E",
      accentHex: "#1E3A5F",
      badgeClass: "text-[#6B2C7E] bg-purple-50 border-purple-200/80",
      btnClass: "bg-[#6B2C7E] hover:bg-[#582468] text-white",
      hoverBorder: "hover:border-purple-300 hover:shadow-purple-900/10",
      pillClass: "bg-purple-100/80 text-purple-800 border-purple-200",
      gradientBg: "from-purple-900 via-indigo-900 to-slate-900",
      lightCardBg: "bg-gradient-to-br from-purple-50/60 via-white to-slate-50/60"
    },
    highlights: [
      "Maternity & Childbirth Care",
      "24×7 Doctor-Supervised ICU",
      "3D / 4D Color Sonography",
      "In-House Pathology Laboratory",
      "Laparoscopic Surgery"
    ],
    features: [
      {
        title: "Obstetrics & Maternity",
        desc: "Normal & painless delivery, high-risk pregnancy management, and post-natal care."
      },
      {
        title: "24×7 Doctor-Supervised ICU",
        desc: "Continuous critical care oversight, multipara monitors, and emergency resuscitation."
      },
      {
        title: "Advanced Sonography Suite",
        desc: "High-resolution 3D/4D ultrasound for fetal wellbeing and prenatal diagnosis."
      },
      {
        title: "Shri Ram In-House Laboratory",
        desc: "Automated hematology, biochemistry, thyroid, and emergency diagnostic tests."
      }
    ],
    ctaText: "Explore Vedant Hospital →"
  },
  {
    id: "pulse-hospital",
    slug: "pulse-hospital",
    name: "Pulse Hospital & I.C.U.",
    shortName: "Pulse Hospital",
    tagline: "Caring for Life",
    taglineGujarati: "સર્વાંગી અને તાત્કાલિક આરોગ્યસેવા",
    emergencyHeadline: "24×7 Emergency & Trauma Care",
    location: "Modasa, Aravalli",
    fullAddress: "4th Floor, A-Block, City Centre, Shamlaji Road, Modasa, Aravalli – 383315",
    route: "/pulse-hospital",
    isExternal: false,
    theme: {
      colorName: "teal",
      primaryHex: "#0D9488",
      accentHex: "#047857",
      badgeClass: "text-teal-700 bg-teal-50 border-teal-200/80",
      btnClass: "bg-teal-700 hover:bg-teal-800 text-white",
      hoverBorder: "hover:border-teal-300 hover:shadow-teal-900/10",
      pillClass: "bg-teal-100/80 text-teal-800 border-teal-200",
      gradientBg: "from-teal-900 via-emerald-900 to-slate-900",
      lightCardBg: "bg-gradient-to-br from-teal-50/60 via-white to-slate-50/60"
    },
    // Highlights specified in user prompt for homepage card
    highlights: [
      "24×7 Emergency & Trauma Care",
      "ICU / Critical Care",
      "Dialysis",
      "Diagnostics & 2D Echo",
      "Surgical Care"
    ],
    // Dedicated page content structured by sections — strictly using prompt's key info
    sections: {
      criticalCare: {
        id: "critical-care",
        title: "Critical Care & ICU",
        titleGujarati: "ક્રિટિકલ કેર અને આઈ.સી.યુ.",
        icon: "Activity",
        description: "Specialized intensive care facilities equipped for round-the-clock monitoring and critical patient support.",
        items: [
          {
            name: "ICU / MICU / SICU",
            desc: "Comprehensive Intensive Care Unit, Medical ICU, and Surgical ICU for intensive monitoring and acute care."
          },
          {
            name: "Critical Care Services",
            desc: "Dedicated clinical care and continuous supervision for critically ill patients."
          }
        ]
      },
      emergency: {
        id: "emergency-trauma",
        title: "Emergency & Trauma Care",
        titleGujarati: "ઇમરજન્સી અને ટ્રોમા કેર",
        icon: "ShieldAlert",
        description: "Immediate medical response and trauma intervention available twenty-four hours a day.",
        items: [
          {
            name: "24×7 Emergency Care",
            desc: "Round-the-clock emergency medical team ready to manage acute medical emergencies."
          },
          {
            name: "Trauma Care Response",
            desc: "Equipped medical facility and critical clinical care for trauma and urgent injury management."
          }
        ]
      },
      diagnostics: {
        id: "diagnostics",
        title: "Diagnostics",
        titleGujarati: "નિદાન સુવિધાઓ",
        icon: "Waves",
        description: "Accurate cardiac and diagnostic imaging services for thorough patient evaluation.",
        items: [
          {
            name: "2D Echo (Echocardiography)",
            desc: "Advanced two-dimensional echocardiography for heart function assessment and cardiac evaluation."
          },
          {
            name: "Sonography & Ultrasound",
            desc: "Accurate diagnostic ultrasound imaging for organ screening and abdominal evaluation."
          }
        ]
      },
      surgical: {
        id: "surgical-services",
        title: "Surgical Services",
        titleGujarati: "સર્જિકલ સેવાઓ",
        icon: "Scissors",
        description: "Equipped surgical suites and experienced surgeons providing operative procedures.",
        items: [
          {
            name: "Operation Theatre",
            desc: "Sterile, equipped operating environment for general and specialized surgical procedures."
          },
          {
            name: "General Surgery",
            desc: "Surgical treatment and operative care for general abdominal and systemic conditions."
          },
          {
            name: "Orthopaedic Surgery",
            desc: "Specialized operative intervention and care for bone, joint, and musculoskeletal trauma."
          }
        ]
      },
      specialties: {
        id: "medical-specialties",
        title: "Medical Specialties",
        titleGujarati: "તબીબી વિશેષતાઓ",
        icon: "Stethoscope",
        description: "Multidisciplinary clinical specialties providing consultation and medical management.",
        items: [
          { name: "Cardiology", desc: "Evaluation and medical management of heart and vascular conditions." },
          { name: "Neurology", desc: "Clinical management of neurological disorders, stroke, and nerve ailments." },
          { name: "Pulmonology", desc: "Diagnostic and therapeutic care for respiratory and lung diseases." },
          { name: "Gastroenterology", desc: "Treatment for digestive system, liver, and gastrointestinal disorders." },
          { name: "Physiotherapy", desc: "Physical rehabilitation and therapeutic movement recovery." }
        ]
      },
      facilities: {
        id: "hospital-facilities",
        title: "Hospital Facilities",
        titleGujarati: "હોસ્પિટલ સુવિધાઓ",
        icon: "Building",
        description: "Core infrastructure and essential medical facilities supporting patient treatments.",
        items: [
          { name: "24×7 Dialysis", desc: "Round-the-clock renal dialysis unit for kidney care and fluid management." },
          { name: "ICU / MICU / SICU", desc: "Dedicated intensive care beds with vital monitoring systems." },
          { name: "Operation Theatre", desc: "Well-maintained surgical facility with modern clinical equipment." },
          { name: "Physiotherapy", desc: "Specialized rehabilitation area for physical recovery and mobility." }
        ]
      }
    },
    ctaText: "Explore Pulse Hospital →"
  }
];
