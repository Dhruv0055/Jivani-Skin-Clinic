export interface TreatmentDetail {
  slug: string;
  title: string;
  shortDesc: string;
  category: "Clinical Dermatology" | "Aesthetic & Lasers" | "Trichology / Hair" | "Advanced Skin Care";
  iconName: string;
  heroImage: string;
  duration: string;
  sessionsRecommended: string;
  downtime: string;
  idealFor: string[];
  overview: string;
  whoItsFor: string[];
  howItWorks: string;
  procedureSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  medicalDisclaimer: string;
}

export interface ClinicData {
  clinicName: string;
  tagline: string;
  subTagline: string;
  locationCity: string;
  locationArea: string;
  address: string;
  landmark: string;
  googleMapsUrl: string;
  googleMapsEmbedIframe: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessagePreset: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  timings: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };
  doctor: {
    name: string;
    qualifications: string;
    role: string;
    regNumber: string;
    experienceYears: number;
    patientsTreated: number;
    proceduresDone: number;
    satisfactionRate: number;
    photoUrl: string;
    bio: string;
    detailedBio: string[];
    specializations: string[];
    memberships: string[];
  };
  trustBadges: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    icon: string;
  }[];
  treatments: TreatmentDetail[];
  testimonials: {
    id: string;
    patientName: string;
    treatment: string;
    rating: number;
    comment: string;
    date: string;
    source: "Google Review" | "Verified Patient";
  }[];
  faqs: {
    question: string;
    answer: string;
    category: string;
  }[];
  translations: {
    en: Record<string, string>;
    gu: Record<string, string>;
  };
}

export const clinicData: ClinicData = {
  clinicName: "Jivani Skin Clinic",
  tagline: "Healthy, Glowing Skin Starts with Expert Care",
  subTagline: "Trusted dermatology, medical lasers, and hair care by Dr. Ruchi Goti in Varachha, Surat.",
  locationCity: "Surat, Gujarat",
  locationArea: "Mota Varachha",
  address: "YAMUNA CHOWK, shop no E-3, Yamuna Palace, opp. Yamuna darshan society, Mota Varachha, Surat, Gujarat 394101",
  landmark: "Opp. Yamuna Darshan Society, Yamuna Chowk, Mota Varachha",
  googleMapsUrl: "https://maps.google.com/?q=Yamuna+Palace+Yamuna+Chowk+Mota+Varachha+Surat",
  googleMapsEmbedIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.8!2d72.868!3d21.242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4682025d57%3A0xb35a3962b704d9c7!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  phone: "+91 96620 42298",
  phoneDisplay: "+91 96620 42298",
  whatsappNumber: "919662042298",
  whatsappMessagePreset: "Hello Dr. Ruchi Goti (Jivani Skin Clinic), I would like to book a consultation appointment.",
  email: "info@jivaniskinclinic.com",
  instagramHandle: "@jivani_skin_clinic",
  instagramUrl: "https://www.instagram.com/jivani_skin_clinic/",
  timings: {
    weekdays: "Morning: 10:00 AM – 1:30 PM | Evening: 5:00 PM – 8:30 PM",
    saturday: "Morning: 10:00 AM – 1:30 PM | Evening: 5:00 PM – 8:30 PM",
    sunday: "Morning: 10:30 AM – 1:00 PM (Prior Appointment)",
    note: "Prior appointment recommended to avoid waiting time.",
  },
  doctor: {
    name: "Dr. Ruchi Goti",
    qualifications: "MBBS, MD - Dermatology, Venereology & Leprosy",
    role: "Consultant Dermatologist, Trichologist & Cosmetologist",
    regNumber: "G-65241",
    experienceYears: 8,
    patientsTreated: 12500,
    proceduresDone: 4800,
    satisfactionRate: 99,
    photoUrl: "/images/dr-ruchi-goti.webp",
    bio: "Dr. Ruchi Goti is a dedicated consultant dermatologist and cosmetologist practicing in Varachha, Surat. She specializes in evidence-based treatments for acne scars, pigmentation, PRP hair regrowth, and gentle clinical skin care.",
    detailedBio: [
      "Dr. Ruchi Goti believes in ethical dermatology—giving every patient an accurate clinical diagnosis and an honest, realistic treatment plan without unnecessary salon packages.",
      "At Jivani Skin Clinic, every patient receives personalized one-on-one attention from Dr. Ruchi Goti, utilizing US-FDA approved technologies and safe protocols specifically calibrated for Indian skin types.",
      "Her gentle approach, meticulous technique, and warm care make patients feel comfortable, informed, and confident in their skin journey.",
    ],
    specializations: [
      "Acne & Pitted Acne Scar Treatments",
      "Melasma & Hyperpigmentation Care",
      "Hair Fall Evaluation & PRP Therapy",
      "Painless Laser Hair Reduction",
      "Skin Glow Medi-Facials & Peels",
      "Eczema, Psoriasis & Chronic Skin Rashes",
    ],
    memberships: [
      "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
      "Cosmetic Dermatology Society of India (CDSI)",
    ],
  },
  trustBadges: [
    {
      title: "Qualified Dermatologist",
      description: "Direct consultation with Dr. Ruchi Goti (MD Dermatology).",
      icon: "ShieldCheck",
    },
    {
      title: "FDA-Approved Tech",
      description: "Gold-standard medical lasers and sterile clinical protocols.",
      icon: "Sparkles",
    },
    {
      title: "Personalized Plans",
      description: "Custom prescriptions tailored to your specific skin type.",
      icon: "HeartHandshake",
    },
    {
      title: "Clean & Sterile Clinic",
      description: "Highest hygiene standards in Varachha, Surat.",
      icon: "CheckCircle2",
    },
  ],
  whyChooseUs: [
    {
      title: "Direct Doctor Consultation",
      description: "You consult directly with Dr. Ruchi Goti, not assistants or beauticians. Real medical diagnosis for real results.",
      icon: "UserCheck",
    },
    {
      title: "Modern Medical Lasers",
      description: "Equipped with advanced US-FDA approved diode lasers and peeling systems calibrated for Indian skin tones.",
      icon: "Zap",
    },
    {
      title: "Hospital-Grade Hygiene",
      description: "Strict sterilization, single-use disposables, and pristine procedure rooms safeguarding your health.",
      icon: "Sparkle",
    },
    {
      title: "Evidence-Based Treatments",
      description: "Scientifically proven clinical solutions. No false guarantees or over-promising, only ethical care.",
      icon: "FileCheck",
    },
    {
      title: "Transparent & Affordable",
      description: "Honest advice, fair pricing, and no pushy sales packages. Clear breakdown of each procedure.",
      icon: "BadgePercent",
    },
    {
      title: "Central Varachha Location",
      description: "Easily accessible location on Varachha Main Road, Surat with convenient parking and prompt appointments.",
      icon: "MapPin",
    },
  ],
  treatments: [
    {
      slug: "acne-acne-scar-treatment",
      title: "Acne & Acne Scar Treatment",
      shortDesc: "Stop recurring pimples, clear dark marks, and smooth uneven pitted scars with gentle, doctor-guided care.",
      category: "Clinical Dermatology",
      iconName: "Flame",
      heroImage: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=800&auto=format&fit=crop",
      duration: "45 – 60 min",
      sessionsRecommended: "4 – 6 sessions",
      downtime: "Mild redness for a few hours",
      idealFor: ["Active pimples & oily skin", "Cystic & painful breakouts", "Dark marks after acne", "Pitted scars on cheeks"],
      overview: "Pimples happen when skin pores get clogged with oil, dirt, and bacteria. Squeezing or picking them often leaves dark marks and uneven pitted scars. At Jivani Skin Clinic, Dr. Ruchi Goti helps you calm active breakouts first, and then gently smooths out old scars so your skin becomes clear, smooth, and healthy again.",
      whoItsFor: [
        "Anyone struggling with frequent pimples or painful acne",
        "Individuals with stubborn dark marks left after acne heals",
        "Patients with uneven, pitted scars on cheeks or forehead",
        "Those whose acne did not get better with regular beauty creams",
      ],
      howItWorks: "First, we clear deep pore blockage and reduce oiliness with gentle medical peels. Next, we encourage your skin's natural collagen to rebuild and lift depressed scars naturally.",
      procedureSteps: [
        { step: 1, title: "Friendly Skin Check", description: "Dr. Ruchi examines your skin up close, grades acne type, and discusses your skin goals." },
        { step: 2, title: "Gentle Cleansing & Numbing", description: "Skin is cleaned thoroughly, and a soothing numbing cream is applied so you feel completely relaxed." },
        { step: 3, title: "Doctor-Led Care", description: "Targeted gentle medical peel or collagen micro-smoothing performed with sterile medical equipment." },
        { step: 4, title: "Cooling Serum & Sun Shield", description: "Application of soothing peptide cream and sunscreen; you can resume your daily routine right away." },
      ],
      benefits: [
        "Noticeably reduces new pimples and excess oiliness",
        "Smooths out uneven, pitted skin texture over sessions",
        "Fades stubborn dark marks and brown blemishes",
        "No painful surgery or long downtime—walk in, walk out",
      ],
      faqs: [
        {
          question: "Will the scar treatment hurt?",
          answer: "No. We apply a gentle numbing cream on the skin before scar procedures, so you feel very comfortable during the entire session.",
        },
        {
          question: "How soon will I see an improvement?",
          answer: "Active pimples and oiliness usually calm down within 2 to 3 weeks. Pitted scars gradually smooth out over 3 to 4 sessions as natural collagen rebuilds.",
        },
      ],
      medicalDisclaimer: "Every person's skin heals at its own pace depending on scar depth and age. Dr. Ruchi Goti will guide you on the exact timeframe during your visit.",
    },
    {
      slug: "pigmentation-melasma-treatment",
      title: "Pigmentation & Melasma Care",
      shortDesc: "Gently lighten dark patches, sun tanning, and uneven skin tone without harsh salon bleaches.",
      category: "Aesthetic & Lasers",
      iconName: "SunMedium",
      heroImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
      duration: "30 – 45 min",
      sessionsRecommended: "4 – 6 sessions",
      downtime: "Zero downtime",
      idealFor: ["Dark patches on cheeks & forehead", "Stubborn sun tanning", "Uneven skin tone", "Marks from previous skin irritation"],
      overview: "Dark patches and melasma happen when skin produces excess color (melanin) due to strong sun exposure, pregnancy, or hormones. Harsh bleach creams can damage Indian skin and make the patches darker. Dr. Ruchi Goti uses gentle, skin-safe dermatological treatments that gradually lighten dark spots while keeping your skin soft and protected.",
      whoItsFor: [
        "Women and men with stubborn dark patches on cheeks, nose, or forehead",
        "Anyone who wants to reverse sun tanning and restore even tone",
        "People whose skin got darker after using harsh beauty parlor bleaches",
      ],
      howItWorks: "We gently break down clustered dark spots on the skin surface using doctor-formulated mild peels, while stopping excess pigment from returning.",
      procedureSteps: [
        { step: 1, title: "Tone & Pigment Check", description: "Dr. Ruchi examines whether the dark spots are near the surface or deeper in the skin." },
        { step: 2, title: "Gentle Skin Prep", description: "Skin is cleansed and prepared with mild hydrating solutions." },
        { step: 3, title: "Mild Brightening Treatment", description: "Application of safe, pH-balanced brightening solutions specially made for Indian skin." },
        { step: 4, title: "Protective SPF Finish", description: "Infusion of calming vitamins and physical sunscreen to protect fresh skin from the sun." },
      ],
      benefits: [
        "Safely fades dark patches without thinning or burning skin",
        "Restores natural, even glow across your face and neck",
        "Gentle on sensitive skin with zero peeling discomfort",
        "Simple daily sun-care plan to prevent patches from returning",
      ],
      faqs: [
        {
          question: "Can pigmentation return?",
          answer: "Sunlight is the main trigger for dark spots. Wearing broad-spectrum sunscreen daily as advised by Dr. Ruchi Goti keeps your skin clear and prevents dark patches from returning.",
        },
      ],
      medicalDisclaimer: "Protecting your skin from the sun daily is essential for lasting clear skin. Individual healing speeds vary.",
    },
    {
      slug: "hair-fall-prp-treatment",
      title: "Hair Fall & Hair Regrowth (PRP)",
      shortDesc: "Strengthen weak roots, stop heavy hair shedding, and boost natural hair thickness using your own body's natural growth factors.",
      category: "Trichology / Hair",
      iconName: "Activity",
      heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      duration: "45 – 60 min",
      sessionsRecommended: "4 – 6 sessions",
      downtime: "Zero downtime—wash hair normally next day",
      idealFor: ["Excessive daily hair shedding", "Widening scalp parting line", "Thinning hair at crown or temples", "Weak, brittle hair roots"],
      overview: "Losing excessive hair when combing or showering can be stressful. PRP therapy is a 100% natural, non-surgical treatment that uses natural healing factors from a small sample of your own blood to awaken weak hair roots, reduce daily hair fall, and encourage thicker hair growth.",
      whoItsFor: [
        "Men and women noticing heavy hair fall in the shower or pillow",
        "People noticing visible scalp through thinning hair",
        "Anyone wanting natural, chemical-free hair strengthening",
      ],
      howItWorks: "A small sample of your blood is spun in a special sterile machine to collect concentrated natural healing factors, which are gently applied directly to your hair roots to nourish and strengthen them.",
      procedureSteps: [
        { step: 1, title: "Scalp Health Check", description: "Dr. Ruchi examines your hair roots up close and checks for nutritional or scalp factors." },
        { step: 2, title: "Quick Blood Draw", description: "A routine, quick blood sample is taken and spun in a sterile machine to extract active growth plasma." },
        { step: 3, title: "Comfort Numbing", description: "A cooling vibration tool or numbing spray is used so you feel minimal sensation." },
        { step: 4, title: "Gentle Root Nourishment", description: "Growth factors are gently delivered directly to the weak hair follicles." },
      ],
      benefits: [
        "100% natural and safe—uses your own biological growth factors with zero allergy risk",
        "Significantly slows down hair shedding within a few weeks",
        "Strengthens hair strands and improves scalp coverage",
        "No cuts, no surgery, no downtime—you can return to work immediately",
      ],
      faqs: [
        {
          question: "How soon does hair fall stop?",
          answer: "Most patients notice a big drop in daily hair shedding after just 2 sessions. Thicker new hair growth becomes visible around months 3 to 4 as roots grow.",
        },
      ],
      medicalDisclaimer: "PRP works on active hair roots to make them stronger. It cannot regrow hair in shiny bald patches where roots no longer exist.",
    },
    {
      slug: "anti-ageing-wrinkle-treatment",
      title: "Anti-Ageing & Fine Line Care",
      shortDesc: "Restore natural skin bounce, soften smile lines, and refresh tired skin without any artificial or frozen look.",
      category: "Aesthetic & Lasers",
      iconName: "Clock",
      heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
      duration: "45 – 60 min",
      sessionsRecommended: "Customized plan",
      downtime: "Minimal",
      idealFor: ["Smile lines & forehead creases", "Dull, loose, or tired-looking skin", "Loss of natural skin firmness"],
      overview: "As we get older, our skin naturally loses hydration and firmness. Dr. Ruchi Goti's anti-ageing care focuses on natural skin restoration—replenishing deep moisture and boosting your skin's own collagen so you look well-rested and naturally youthful, never frozen.",
      whoItsFor: [
        "Adults noticing early fine lines around eyes or forehead",
        "Anyone who feels their skin looks tired, dull, or less firm",
      ],
      howItWorks: "We deliver deep hydration and collagen-boosting nutrients to help the skin regain its natural bounce and firmness from within.",
      procedureSteps: [
        { step: 1, title: "Skin Elasticity Check", description: "Dr. Ruchi evaluates skin firmness and listens to your natural aesthetic goals." },
        { step: 2, title: "Comfort Preparation", description: "Soothing prep ensures complete relaxation." },
        { step: 3, title: "Gentle Doctor Procedure", description: "Careful, conservative administration by Dr. Ruchi Goti." },
        { step: 4, title: "Calming Moisture Lock", description: "Hydrating finish and simple home care tips to keep skin supple." },
      ],
      benefits: [
        "Natural, refreshed glow that retains all your emotional facial expressions",
        "Restores deep moisture to dry, thinning skin",
        "Safe and physician-administered in a sterile clinic",
      ],
      faqs: [
        {
          question: "Will my face look unnatural?",
          answer: "No, absolutely not. Dr. Ruchi Goti uses gentle, subtle techniques designed strictly to maintain your natural smile and expression.",
        },
      ],
      medicalDisclaimer: "A friendly consultation with Dr. Ruchi Goti is recommended to pick the right treatment for your skin.",
    },
    {
      slug: "laser-hair-removal",
      title: "Painless Laser Hair Removal",
      shortDesc: "Long-lasting freedom from unwanted facial and body hair using modern ice-cool laser technology.",
      category: "Aesthetic & Lasers",
      iconName: "Sparkles",
      heroImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
      duration: "15 to 60 min",
      sessionsRecommended: "6 – 8 sessions",
      downtime: "Zero downtime",
      idealFor: ["Upper lip, chin & sideburn hair", "Underarm & body hair", "Ingrown hairs & razor bumps", "PCOD-related thick facial hair"],
      overview: "Waxing and threading are painful, time-consuming, and cause recurrent ingrown hair bumps. Our medical laser gently disables hair roots using safe light energy. An ice-cold cooling tip constantly cools your skin, making the session comfortable and painless.",
      whoItsFor: [
        "Anyone tired of painful waxing, threading, and razor cuts",
        "Women dealing with thick chin or facial hair due to PCOD",
        "People suffering from irritating ingrown hairs and rough bumps",
      ],
      howItWorks: "Safe laser light warms up the hair root and stops future hair growth, while the cold sapphire tip keeps your skin surface cool and protected.",
      procedureSteps: [
        { step: 1, title: "Skin & Hair Calibration", description: "Laser settings are customized precisely for your skin tone." },
        { step: 2, title: "Smooth Trimming & Cooling Gel", description: "Area is prepped and a soothing chilled gel is applied." },
        { step: 3, title: "Ice-Cool Laser Gliding", description: "The laser handpiece glides smoothly with a continuous ice-cooling tip." },
        { step: 4, title: "Calming Gel & Sunscreen", description: "Area is wiped clean and soothing aloe is applied; walk out smooth and ready." },
      ],
      benefits: [
        "Up to 85-90% permanent reduction in unwanted hair",
        "Comfortable and virtually painless compared to waxing",
        "Eliminates painful razor bumps and rough strawberry skin",
        "Safe and calibrated for Indian skin tones",
      ],
      faqs: [
        {
          question: "Does it hurt?",
          answer: "Our modern machine has an ice-cold contact tip that cools the skin constantly. Most patients feel only a mild warm snap—far gentler than hot wax or threading.",
        },
      ],
      medicalDisclaimer: "Laser works on hair containing pigment. It is not effective on white or grey hair.",
    },
    {
      slug: "skin-brightening-glow-facials-peels",
      title: "Medi-Facials & Glow Peels",
      shortDesc: "Medical clean-up, gentle fruit peels, and antioxidant infusions for instant radiance before weddings and events.",
      category: "Advanced Skin Care",
      iconName: "ShieldAlert",
      heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      duration: "45 – 60 min",
      sessionsRecommended: "Single or monthly",
      downtime: "Zero downtime",
      idealFor: ["Pre-bridal & groom skincare", "Dull, tired, dehydrated skin", "Clogged pores and blackheads", "Instant event glow"],
      overview: "Unlike salon facials that use heavy bleaches and pore-clogging waxes, our dermatologist-designed Medi-Facials use sterile extraction, ultrasonic serum infusion, and gentle enzymes to hydrate and revitalize skin safely.",
      whoItsFor: [
        "Brides, grooms, and event attendees wanting clear glowing skin",
        "Anyone with dull skin from pollution, screen time, or fatigue",
      ],
      howItWorks: "Deep pore clearance followed by medical micro-infusion of hyaluronic acid, vitamin C, and soothing peptides.",
      procedureSteps: [
        { step: 1, title: "Deep Purifying Cleanse", description: "Removing surface impurities and excess oil." },
        { step: 2, title: "Gentle Exfoliation", description: "Painless clearance of blackheads and dead cells." },
        { step: 3, title: "Antioxidant Infusion", description: "Ultrasound-assisted infusion of brightening vitamins." },
        { step: 4, title: "Hydrating Mask", description: "Cooling soothing mask and SPF application." },
      ],
      benefits: [
        "Immediate healthy glow without harsh chemicals or bleach",
        "Deeply hydrates and calms skin",
        "Refines open pores and removes stubborn blackheads",
      ],
      faqs: [
        {
          question: "How many days before my event should I get this done?",
          answer: "We recommend booking 2 to 3 days prior to your function for the best radiance.",
        },
      ],
      medicalDisclaimer: "Designed for hydration and radiance. Deep scars or stubborn melasma require dedicated treatments.",
    },
    {
      slug: "warts-moles-skin-tag-removal",
      title: "Warts, Moles & Skin Tag Removal",
      shortDesc: "Quick, painless removal of unwanted neck tags, viral warts, and benign moles using advanced Radiofrequency (RF) ablation.",
      category: "Clinical Dermatology",
      iconName: "Shield",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      duration: "15 – 30 min",
      sessionsRecommended: "Single session",
      downtime: "Tiny scab heals in 5-7 days",
      idealFor: ["Neck and underarm skin tags", "Viral warts on hands or feet", "Unwanted facial or body moles", "Raised dark spots (DPN)"],
      overview: "Skin tags and warts can be irritating, cosmetically annoying, or contagious. Dr. Ruchi Goti uses micro-radiofrequency (RF) cautery under local numbing to vaporize lesions precisely in minutes with minimal scarring and zero bleeding.",
      whoItsFor: [
        "Anyone with irritating tags catching on clothes or necklaces",
        "Patients with spreading viral warts",
        "Individuals wanting clean, safe removal of raised spots",
      ],
      howItWorks: "Radiofrequency energy precisely coagulates the lesion base without cutting healthy surrounding skin.",
      procedureSteps: [
        { step: 1, title: "Clinical Check", description: "Examining lesion to confirm benign nature before removal." },
        { step: 2, title: "Local Numbing", description: "Topical anesthetic cream applied so there is zero pain." },
        { step: 3, title: "RF Removal", description: "Gentle vaporization in seconds without bleeding." },
        { step: 4, title: "Antiseptic Care", description: "Healing ointment and straightforward home instructions provided." },
      ],
      benefits: [
        "Single-visit outpatient procedure in under 25 minutes",
        "Virtually painless with local anesthetic",
        "Clean healing with minimal mark",
        "Stops viral warts from spreading",
      ],
      faqs: [
        {
          question: "Does the removal leave a scar?",
          answer: "A tiny superficial crust forms and falls off naturally in a few days, healing smoothly into your normal skin color.",
        },
      ],
      medicalDisclaimer: "Atypical moles are clinically examined under dermoscopy prior to removal.",
    },
    {
      slug: "eczema-psoriasis-general-dermatology",
      title: "Eczema, Psoriasis & Skin Rashes",
      shortDesc: "Accurate clinical diagnosis and relief for chronic itching, fungal infections, allergic rashes, and scalp issues.",
      category: "Clinical Dermatology",
      iconName: "Stethoscope",
      heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      duration: "20 – 30 min consultation",
      sessionsRecommended: "Regular follow-ups as planned",
      downtime: "None",
      idealFor: ["Severe itching and dry atopic eczema", "Plaque psoriasis with scaly patches", "Stubborn fungal ringworm (tinea)", "Allergies, hives, and scalp dandruff"],
      overview: "Self-treating chronic rashes with mixed over-the-counter steroid creams causes severe skin thinning and rebound flare-ups. Dr. Ruchi Goti provides medically accurate, steroid-sparing treatment to repair your skin barrier safely.",
      whoItsFor: [
        "Patients suffering from persistent, sleep-disturbing itch or redness",
        "Individuals with stubborn fungal infections resistant to home creams",
        "Those diagnosed with or suspecting psoriasis or contact allergies",
      ],
      howItWorks: "We identify triggers, calm inflammation, and rebuild the damaged lipid barrier with targeted medical therapy.",
      procedureSteps: [
        { step: 1, title: "Detailed History", description: "Reviewing triggers, lifestyle factors, and prior medications." },
        { step: 2, title: "Diagnostic Exam", description: "Microscopic or visual dermatological examination." },
        { step: 3, title: "Targeted Prescription", description: "Steroid-sparing topicals and barrier repair emollients." },
        { step: 4, title: "Lifestyle Guidance", description: "Bathing, clothing, and dietary tips to prevent flare-ups." },
      ],
      benefits: [
        "Accurate diagnosis preventing harmful steroid misuse",
        "Relieves severe itching and calms inflammation",
        "Restores your skin's protective lipid barrier",
      ],
      faqs: [
        {
          question: "Why should I stop using OTC steroid creams?",
          answer: "Pharmacy triple-combination creams often thin the skin and cause severe rebound redness. Dr. Ruchi Goti will guide you to safe alternatives.",
        },
      ],
      medicalDisclaimer: "Chronic conditions require medical supervision. Never stop prescription drugs abruptly without doctor advice.",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      patientName: "Ketan Patel",
      treatment: "Acne Scar Treatment",
      rating: 5,
      comment: "I had severe acne scars on my cheeks for 3 years. Dr. Ruchi Goti gave very honest advice and did not push unnecessary salon packages. Within 3 months my skin texture is much smoother. Highly recommend in Varachha!",
      date: "2 weeks ago",
      source: "Google Review",
    },
    {
      id: "test-2",
      patientName: "Bhavika Sanghani",
      treatment: "Pigmentation & Medi-Facial",
      rating: 5,
      comment: "Very clean clinic in Varachha! Dr. Ruchi Goti is so polite and explained everything clearly about my pigmentation. The treatment and home routine really worked without any irritation.",
      date: "1 month ago",
      source: "Google Review",
    },
    {
      id: "test-3",
      patientName: "Rahul Mendpara",
      treatment: "Hair Fall & PRP Therapy",
      rating: 5,
      comment: "I was losing hair rapidly. Took 4 sessions of PRP with Dr. Ruchi Goti. Hair fall has stopped and roots feel thicker. Genuine doctor with reasonable fees in Surat.",
      date: "3 weeks ago",
      source: "Google Review",
    },
    {
      id: "test-4",
      patientName: "Pooja Vaghani",
      treatment: "Laser Hair Removal",
      rating: 5,
      comment: "Full face laser hair removal was virtually painless because of the cooling machine. Dr. Ruchi is very gentle and the clinic is spotless.",
      date: "1 month ago",
      source: "Verified Patient",
    },
  ],
  faqs: [
    {
      question: "How do I book an appointment with Dr. Ruchi Goti?",
      answer: "You can book easily by filling the form below, sending a WhatsApp message to our clinic desk, or calling directly. Prior booking ensures zero waiting time.",
      category: "Appointments",
    },
    {
      question: "What are the clinic consultation timings in Varachha?",
      answer: "We are open Monday to Saturday with split timings: Morning 10:00 AM – 1:30 PM and Evening 5:00 PM – 8:30 PM. Sunday is open 10:30 AM – 1:00 PM by prior appointment.",
      category: "Timings",
    },
    {
      question: "Are treatments safe for sensitive Indian skin types?",
      answer: "Yes, 100%. Every laser setting, chemical peel, and topical treatment used by Dr. Ruchi Goti is calibrated specifically for Indian skin to avoid hyperpigmentation.",
      category: "Safety",
    },
    {
      question: "Does laser hair removal cause pain or burns?",
      answer: "No. Our medical machine features continuous ice-contact cooling that protects the skin surface. You only feel mild warmth, far more comfortable than hot wax.",
      category: "Laser",
    },
    {
      question: "Can I consult for persistent hair fall and scalp issues?",
      answer: "Yes. Dr. Ruchi Goti conducts thorough trichoscopic scalp evaluations and provides targeted medical treatments, nutritional guidance, and PRP therapy.",
      category: "Hair Care",
    },
    {
      question: "Where is the clinic located in Surat?",
      answer: "Jivani Skin Clinic is conveniently located on Varachha Main Road, Surat, with easy access and parking.",
      category: "Location",
    },
  ],
  translations: {
    en: {
      navHome: "Home",
      navAbout: "About Doctor",
      navTreatments: "Treatments",
      navWhyUs: "Why Choose Us",
      navTestimonials: "Reviews",
      navFaq: "FAQ",
      navContact: "Contact",
      bookAppointment: "Book Appointment",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      directions: "Get Directions",
      viewAllTreatments: "View All Treatments",
      consultationNotice: "Prior booking ensures minimal waiting time",
      certifiedSpecialist: "Certified Dermatologist",
      yearsExperience: "Years Experience",
      happyPatients: "Happy Patients",
      clinicalProcedures: "Procedures Done",
      disclaimerNotice: "Medical Disclaimer: Results vary from person to person. Content is for informational purposes and does not replace medical advice.",
    },
    gu: {
      navHome: "હોમ",
      navAbout: "ડૉક્ટર વિશે",
      navTreatments: "સારવાર",
      navWhyUs: "શા માટે અમે",
      navTestimonials: "દર્દી સમીક્ષાઓ",
      navFaq: "પ્રશ્નોત્તરી",
      navContact: "સંપર્ક",
      bookAppointment: "એપોઇન્ટમેન્ટ બુક કરો",
      callNow: "કોલ કરો",
      whatsappUs: "વોટ્સએપ કરો",
      directions: "દિશા મેળવો",
      viewAllTreatments: "બધી સારવાર જુઓ",
      consultationNotice: "અગાઉથી બુકિંગ કરવાથી રાહ જોવી પડશે નહીં",
      certifiedSpecialist: "ત્વચા નિષ્ણાત ડૉક્ટર",
      yearsExperience: "વર્ષોનો અનુભવ",
      happyPatients: "સંતુષ્ટ દર્દીઓ",
      clinicalProcedures: "સફળ પ્રક્રિયાઓ",
      disclaimerNotice: "તબીબી અસ્વીકરણ: પરિણામો વ્યક્તિ-દર-વ્યક્તિ બદલાઈ શકે છે.",
    },
  },
};
