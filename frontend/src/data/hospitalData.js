export const hospitalInfo = {
  name: "Vedant Hospital",
  locationName: "Modasa, Aravalli",
  motto: "Safe Motherhood & Compassionate Healing",
  taglineGujarati: "માતૃત્વસ્પર્શ એવમ્ શમનમ્",
  address: "3rd Floor, Gajanand Complex, Above Bank of Baroda, Deep Area, Shamlaji Road, Modasa, Dist. Aravalli, Gujarat",
  contacts: {
    emergency: "8160810013",
    emergencyDisplay: "+91 81608 10013",
    appointment1: "6352590491",
    appointment1Display: "+91 63525 90491",
    appointment2: "9428339050",
    appointment2Display: "+91 94283 39050",
  },
  timings: {
    emergency: "24 x 7 Available",
    opd: "Monday to Saturday: 09:00 AM - 08:00 PM | Sunday: 09:00 AM - 01:00 PM (Emergency 24x7)",
  }
};

export const doctorsData = [
  {
    id: "dr-happy-patel",
    name: "Dr. Happy Patel",
    qualifications: "M.B.D.G.O, DNB",
    designation: "Consultant Obstetrician & Gynecologist",
    department: "Obstetrics & Gynecology",
    image: "/images/dr-happy-patel.jpg",
    experience: [
      "Ex. Resident Doctor, SVP Hospital / Shardaben Hospital",
      "Fellowship in Advance Sonography (Mumbai)",
      "Fellowship in Laparoscopy, Jaslok Hospital (Mumbai)",
      "Consultant Gynecologist & Laparoscopic Surgeon"
    ],
    specialties: [
      "Normal & Painless Delivery (Epidural)",
      "Caesarean Section (C-Section) & High-Risk Pregnancy",
      "3D / 4D Ultrasound & Fetal Sonography",
      "Laparoscopic Stitchless Uterus & Ovarian Surgeries",
      "Infertility Diagnosis & Comprehensive Treatment",
      "Uterine & Ovarian Cancer Screening & Care",
      "Adolescent & Menopausal Healthcare"
    ],
    about: "Dr. Happy Patel is a distinguished Obstetrician and Gynecologist trained at premier medical institutes including Jaslok Hospital Mumbai and SVP Hospital. Specializing in advanced sonography, stitchless laparoscopy, and painless child delivery."
  },
  {
    id: "dr-paras-patel",
    name: "Dr. Paras Patel",
    qualifications: "M.D. Physician",
    designation: "Consultant Diabetologist & Cardiac Physician",
    department: "General Medicine & Critical Care",
    image: "/images/dr-paras-patel.jpg",
    experience: [
      "Consultant Diabetologist & Cardiac Physician",
      "Pulse Hospital & ICU Association",
      "Expertise in Critical Care, ICU Management & Emergency Medicine",
      "Comprehensive management of multi-system medical disorders"
    ],
    specialties: [
      "24x7 ICU & Critical Emergency Management",
      "Heart Attack, Chest Pain & Hypertension (Blood Pressure)",
      "Diabetes Mellitus & Thyroid Endocrine Care",
      "Asthma, Pneumonia & Respiratory Diseases (Fluid in Lungs)",
      "Emergency Snake Bite, Insect Sting & Poisoning Management",
      "Kidney Stones, Swelling, Infection & Dialysis Care",
      "Liver Diseases, Jaundice, Diarrhea & Gastrointestinal Care",
      "Neurology: Paralysis (Stroke), Brain Hemorrhage, Seizures & Brain Fever",
      "Infectious Fevers: Malaria, Dengue, Typhoid, Chikungunya"
    ],
    about: "Dr. Paras Patel is an experienced M.D. Physician and Consultant Diabetologist & Cardiac Physician dedicated to providing rapid critical care, cardiology consultations, diabetic management, and inpatient ICU monitoring in Modasa."
  }
];

export const departmentsData = [
  {
    id: "gynecology",
    title: "Obstetrics & Gynecology",
    titleGujarati: "પ્રસુતિ અને સ્ત્રી રોગ વિભાગ",
    headDoctor: "Dr. Happy Patel",
    qualifications: "M.B.D.G.O, DNB",
    icon: "HeartPulse",
    colorTheme: "jambu",
    summary: "Complete mother and child care, advanced maternity, painless delivery, 3D/4D sonography, and stitchless laparoscopy.",
    services: [
      {
        title: "Maternity Care & Childbirth",
        description: "Normal delivery, Painless delivery with Epidural analgesia, C-Section delivery, and expert management of high-risk pregnancies."
      },
      {
        title: "3D / 4D Sonography",
        description: "State-of-the-art ultrasound imaging for detailed fetal anatomy, growth tracking, and pelvic evaluations."
      },
      {
        title: "Advanced Laparoscopy",
        description: "Minimally invasive, stitchless laparoscopic surgeries for uterus, fibroids, cysts, and ovarian disorders with minimal recovery time."
      },
      {
        title: "Infertility Clinic",
        description: "Scientific diagnostic workup and personalized treatment protocols for couples facing fertility challenges."
      },
      {
        title: "Gynecological Cancer Screening",
        description: "Early detection, Pap smears, pelvic imaging, and specialized screening for uterine, cervical, and ovarian cancers."
      },
      {
        title: "Modular Operation Theatre & Labour Room",
        description: "Sterile, temperature-controlled modern OT and comfortable, well-equipped labour room with 24x7 monitoring."
      }
    ]
  },
  {
    id: "medicine",
    title: "General Medicine & Critical Care",
    titleGujarati: "ફિઝીશિયન અને આઈ.સી.યુ વિભાગ",
    headDoctor: "Dr. Paras Patel",
    qualifications: "M.D. Physician",
    icon: "Activity",
    colorTheme: "navy",
    summary: "24x7 Doctor-supervised ICU, Cardiac Care, Diabetes Management, Pulmonology, Nephrology, and Acute Emergency Care.",
    services: [
      {
        title: "24x7 ICU & Critical Care",
        description: "Round-the-clock doctor supervision, multi-parameter vital monitoring, and advanced intensive care support."
      },
      {
        title: "Cardiology & Endocrine Care",
        description: "Management of heart attack, chest pain, high blood pressure (hypertension), diabetes mellitus, and thyroid disorders."
      },
      {
        title: "Pulmonology & Respiratory Care",
        description: "Treatment for severe asthma, breathing difficulties, pneumonia, and pleural effusion (fluid accumulation in lungs)."
      },
      {
        title: "Emergency Snake Bite & Poisoning",
        description: "Rapid antidote administration, anti-venom therapy, and emergency stabilization for snake bites, insect stings, and toxic ingestions."
      },
      {
        title: "Nephrology & Kidney Care",
        description: "Care for kidney stones, renal swelling, urinary tract infections, hematuria/pus in urine, and dialysis coordination."
      },
      {
        title: "Gastroenterology & Liver Care",
        description: "Comprehensive care for jaundice, acute viral hepatitis, vomiting, severe diarrhea, and intestinal inflammation/colitis."
      },
      {
        title: "Neurology & Brain Care",
        description: "Emergency care for stroke (paralysis), brain hemorrhage, seizures/epilepsy (khench), and meningitis/brain fever."
      },
      {
        title: "Infectious Diseases & Fevers",
        description: "Accurate rapid diagnosis and inpatient management of Malaria, Dengue, Typhoid, Chikungunya, and viral infections."
      }
    ]
  }
];

export const facilitiesData = [
  {
    id: "emergency",
    title: "24 x 7 Emergency Treatment",
    description: "Equipped to handle medical and obstetric emergencies round-the-clock with on-duty medical staff and rapid response setup.",
    icon: "ShieldAlert"
  },
  {
    id: "icu",
    title: "24 x 7 Doctor-Supervised ICU",
    description: "Fully equipped Intensive Care Unit featuring advanced multi-channel cardiac monitors, ventilators, and dedicated critical care support.",
    icon: "Activity"
  },
  {
    id: "ot",
    title: "Modern Modular OT & Labour Room",
    description: "HEPA-filtered sterile modular surgical theatres designed for laparoscopic, gynecological, and general surgical procedures.",
    icon: "Sparkles"
  },
  {
    id: "sonography",
    title: "3D / 4D Sonography Suite",
    description: "High-definition sonography unit providing clear visual clarity for fetal scans, abdominal, and pelvic health examinations.",
    icon: "Eye"
  },
  {
    id: "laboratory",
    title: "24 x 7 Pathology Laboratory",
    description: "In-house clinical lab providing rapid diagnostic results for blood tests, fever panels, urine analysis, biochemistry, and hormone assays.",
    icon: "FlaskConical"
  },
  {
    id: "pharmacy",
    title: "24 x 7 In-House Pharmacy",
    description: "Stocked with all critical emergency medications, injectables, antibiotics, and maternity prescriptions at all times.",
    icon: "Pill"
  },
  {
    id: "rooms",
    title: "Deluxe, Semi-Special & General Rooms",
    description: "Spacious, air-conditioned patient accommodations tailored to patient preferences with hygienic nursing care and family comfort.",
    icon: "Bed"
  },
  {
    id: "mediclaim",
    title: "Mediclaim & Cashless Insurance",
    description: "Hassle-free cashless hospitalization and reimbursement assistance across major health insurance providers and TPAs.",
    icon: "CreditCard"
  }
];

export const galleryImages = [
  {
    id: 1,
    title: "Hospital Reception & Waiting Lounge",
    category: "Lobby & Reception",
    image: "/images/hospital-reception.jpg",
    description: "Warm, aesthetic, and welcoming reception area designed for patient comfort and seamless admissions."
  },
  {
    id: 2,
    title: "Modern Modular Operation Theatre",
    category: "Surgical Suites",
    image: "/images/operation-theatre.jpg",
    description: "Sterile, state-of-the-art modular theatre equipped with surgical lighting and laparoscopic equipment."
  },
  {
    id: 3,
    title: "Advanced 3D/4D Sonography Suite",
    category: "Diagnostics",
    image: "/images/sonography-suite.jpg",
    description: "High-resolution ultrasound machine providing accurate imaging for prenatal care and health screenings."
  },
  {
    id: 4,
    title: "24x7 Intensive Care Unit (ICU)",
    category: "Critical Care",
    image: "/images/icu-care.jpg",
    description: "Round-the-clock doctor-supervised ICU with precision monitors and life-support systems."
  },
  {
    id: 5,
    title: "Deluxe Private Patient Room",
    category: "Patient Rooms",
    image: "/images/patient-room.jpg",
    description: "Air-conditioned private room with motorized bed, relative seating, and hospital safety features."
  }
];
