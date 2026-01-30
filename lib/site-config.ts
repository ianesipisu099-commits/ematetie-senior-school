export const siteConfig = {
  name: "Ematetie Senior School",
  motto: "YES WE CAN",

  locationShort: "Kakamega County, Kenya",
  addressLine: "Ematetie Village, Lurambi South, Kakamega County",

  phoneDisplay: "0118 907 795",
  phoneE164: "254118907795",

  email: "ematetiesecschool@gmail.com",

  whatsappE164: "254118907795",
  whatsappMessage:
    "Hello Ematetie Senior School, I would like to make an inquiry.",

  hero: {
    headline: "Ematetie Senior School",
    subheadline:
      "YES WE CAN — A public secondary school in Ematetie Village, Lurambi South, Kakamega County. (LV1 preview with placeholders)",
    badges: [
      "Admissions: OPEN",
      "Established 2009",
      "8-4-4 & CBE Transition",
      "Uniform: Navy Blue Shirt",
      "Kakamega County",
    ],
  },
  about: {
    introTitle: "About Ematetie Senior School",
    introBody:
      "Ematetie Senior School is a public secondary school located in Ematetie Village, Lurambi South, Kakamega County. This LV1 website is a preview version — sections marked as placeholders will be updated with official school content.",
    mission:
      "Placeholder: Provide the official school mission statement (1–2 lines).",
    vision:
      "Placeholder: Provide the official school vision statement (1–2 lines).",
    valuesIntro:
      "The principles that guide teaching, learning, and leadership at Ematetie Senior School.",
    values: [
      {
        title: "Discipline",
        desc: "Placeholder: Share how the school promotes good conduct and responsibility.",
      },
      {
        title: "Excellence",
        desc: "Placeholder: Share how the school supports strong academic performance and growth.",
      },
      {
        title: "Integrity",
        desc: "Placeholder: Share how the school nurtures honesty and strong character.",
      },
      {
        title: "Community",
        desc: "Placeholder: Share how the school works with parents and the local community.",
      },
    ],
    stats: [
      { label: "Established", value: "2009" },
      { label: "Curriculum", value: "8-4-4 & CBE Transition" },
      { label: "Uniform", value: "Navy Blue Shirt" },
      { label: "Admissions", value: "OPEN" },
    ],
  },
academics: {
  curriculum: "8-4-4 curriculum with transition to CBE (Competency-Based Education)",
  subjects: [
    "English",
    "Kiswahili",
    "Mathematics",
    "Cope Mathematics (confirm label)",
    "CRE",
    "History and Citizenship",
    "Geography",
    "Computer Studies",
    "Home Science",
    "Biology",
    "Chemistry",
    "Physics",
    "P.E",
    "C/S/L (confirm meaning)",
    "I.C.T (confirm overlap with Computer Studies)",
    "P.P.I (confirm meaning)",
  ],
},

  brand: {
    logo: "/images/brand/logo.png", // keep demo logo for now or replace later
    gate: "/image/hero/school-gate.jpeg", // placeholder gate image
  },
  leadership: {
    principal: {
      name: "Mr Manoah Malenya",
      title: "Principal",
      photo: "/images/placeholders/leader-principal.jpeg",
      messageTitle: "Principal’s Message (Placeholder)",
      messageBody: [
        "Welcome to Ematetie Senior School. This is a sample message layout to show how the final website will present the Principal’s message in a full-length, magazine-style format.",
        "Placeholder: Please provide the official Principal’s message (about 200–400 words is ideal). You may include the school’s values, academic focus, discipline culture, and encouragement to parents and learners.",
        "Placeholder: You may also include a short note about the 8-4-4 to CBE transition and how the school is preparing learners.",
      ],
      signature: "Mr Manoah Malenya",
    },

    deputyPrincipal: {
      name: "Mrs Obongita Justine",
      title: "Deputy Principal",
      photo: "/images/placeholders/leader-deputy.jpeg",
      messageTitle: "Deputy Principal’s Message (Placeholder)",
      messageBody: [
        "This is a sample long-form message layout for the Deputy Principal, matching the style used in school magazines.",
        "Placeholder: Please provide the official Deputy Principal’s message (150–300 words is ideal). You may include academics, student welfare, guidance & counselling, co-curricular activities, and discipline support.",
      ],
      signature: "Mrs Obongita Justine",
    },
  },

  downloads: {
    applicationForm: "", // Placeholder – to be provided
    feeStructure: "", // Placeholder – to be provided
    reportingRequirements: "", // Placeholder – to be provided
  },
} as const;
 