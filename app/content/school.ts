// content/school.ts
export const school = {
  name: "Ematetie Senior School",
  shortName: "Ematetie",
  tagline: "YES WE CAN",
  established: 2009,

  location: {
    village: "Ematetie Village",
    area: "Lurambi South",
    county: "Kakamega County",
    postalAddress: "P.O. Box 302–50100, Kakamega",
  },

  contacts: {
    phone: "0118907795",
    email: "ematetiesecschool@gmail.com",
  },

  uniform: {
    summary: "Navy blue shirt",
  },

  curriculum: {
    summary: "8-4-4 and CBE Transition",
    // LV1: list as provided, even if some need confirmation later
    subjects: [
      "English",
      "Kiswahili",
      "Mathematics",
      "Core Mathematics",
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

  admissions: {
    status: "OPEN",
    note:
      "Placeholder: Provide official admission requirements, fee structure, and reporting dates.",
  },

  leadership: {
    principal: {
      name: "Mr Manoah Malenya",
      title: "Principal",
      // LV1 placeholders (magazine-style message pages)
      photo: {
        src: "/images/placeholders/leader-principal.jpg",
        alt: "Principal photo (placeholder)",
        isPlaceholder: true,
      },
      message: {
        heading: "Principal’s Message (Placeholder)",
        body: [
          "Welcome to Ematetie Senior School. This is a sample message layout to show how the final website will present the Principal’s message in a full-length, magazine-style format.",
          "Placeholder text: Please provide the official Principal’s message (about 200–400 words is ideal). You may include the school’s values, academic focus, discipline culture, and encouragement to parents and learners.",
          "Placeholder text: You can also include a short note about the 8-4-4 to CBE transition and how the school is preparing learners.",
        ],
        signature: "Mr Manoah Malenya",
      },
    },

    deputyPrincipal: {
      name: "Mrs Obongita Justine",
      title: "Deputy Principal",
      photo: {
        src: "/images/placeholders/leader-deputy.jpg",
        alt: "Deputy Principal photo (placeholder)",
        isPlaceholder: true,
      },
      message: {
        heading: "Deputy Principal’s Message (Placeholder)",
        body: [
          "This is a sample long-form message layout for the Deputy Principal, matching the style used in school magazines.",
          "Placeholder text: Please provide the official Deputy Principal’s message (150–300 words is ideal). You may include academics, student welfare, guidance & counselling, co-curricular activities, and discipline support.",
        ],
        signature: "Mrs Obongita Justine",
      },
    },
  },

  placeholders: {
    mission:
      "Placeholder: Provide the official school mission statement (1–2 lines).",
    vision:
      "Placeholder: Provide the official school vision statement (1–2 lines).",
    coreValues: [
      "Placeholder: Discipline",
      "Placeholder: Excellence",
      "Placeholder: Integrity",
      "Placeholder: Teamwork",
    ],
    photosNote:
      "LV1 uses placeholder images. Official photos (gate, classrooms, labs, administration block, co-curricular) will be added once provided.",
  },
} as const;
