const patientsData = {
  1: {
    id: 1,
    name: "John Smith",
    age: 45,
    doctorName: "Dr. Sarah Wilson",
    date: "2024-01-25",
    problem: "Severe headache and fever",
    status: "Pending",
    lastVisit: "2024-01-15",
    symptoms: [
      "High temperature (39°C)",
      "Persistent headache",
      "Fatigue",
      "Body aches"
    ],
    medications: {
      immediate: "Paracetamol 500mg - 3 times daily for 5 days",
      followUp: "Vitamin C 1000mg - Once daily for 3 days"
    },
    questions: [
      {
        question: "How long have you been experiencing these symptoms?",
        answer: "Started 3 days ago"
      },
      {
        question: "Any previous history of similar symptoms?",
        answer: "No previous history"
      },
      {
        question: "Are you allergic to any medications?",
        answer: "No known allergies"
      }
    ]
  },
  2: {
    id: 2,
    name: "Sarah Johnson",
    age: 32,
    doctorName: "Dr. Michael Brown",
    date: "2024-01-26",
    problem: "Chronic back pain",
    status: "In Treatment",
    lastVisit: "2024-01-20",
    symptoms: [
      "Lower back pain",
      "Difficulty in movement",
      "Pain radiating to legs",
      "Morning stiffness"
    ],
    medications: {
      immediate: "Ibuprofen 400mg - twice daily for 7 days",
      followUp: "Muscle relaxant - as needed"
    },
    questions: [
      {
        question: "When did the pain start?",
        answer: "About 2 weeks ago after lifting heavy boxes"
      },
      {
        question: "Does the pain affect your sleep?",
        answer: "Yes, especially when trying to find a comfortable position"
      },
      {
        question: "Have you tried any treatments so far?",
        answer: "Only over-the-counter pain relievers"
      }
    ]
  },
  3: {
    id: 3,
    name: "Mike Wilson",
    age: 28,
    doctorName: "Dr. Emily Chen",
    date: "2024-01-24",
    problem: "Seasonal allergies",
    status: "Completed",
    lastVisit: "2024-01-10",
    symptoms: [
      "Runny nose",
      "Itchy eyes",
      "Sneezing",
      "Congestion"
    ],
    medications: {
      immediate: "Antihistamine 10mg - daily",
      followUp: "Nasal spray - twice daily for 2 weeks"
    },
    questions: [
      {
        question: "Are your symptoms worse at any particular time?",
        answer: "Yes, especially in the morning and during outdoor activities"
      },
      {
        question: "Have you identified any specific triggers?",
        answer: "Pollen and dust seem to make it worse"
      },
      {
        question: "Do you have any known allergies?",
        answer: "Yes, diagnosed with pollen allergy last year"
      }
    ]
  },
  4: {
    id: 4,
    name: "Emma Davis",
    age: 35,
    doctorName: "Dr. Sarah Wilson",
    date: "2024-01-23",
    problem: "Anxiety and insomnia",
    status: "In Treatment",
    lastVisit: "2024-01-18",
    symptoms: [
      "Difficulty sleeping",
      "Racing thoughts",
      "Restlessness",
      "Fatigue"
    ],
    medications: {
      immediate: "Melatonin 5mg - before bedtime",
      followUp: "Herbal stress relief supplement - twice daily"
    },
    questions: [
      {
        question: "How long have you been experiencing sleep issues?",
        answer: "For about a month now"
      },
      {
        question: "What's your current sleep schedule?",
        answer: "Usually try to sleep at 11 PM but often awake until 2-3 AM"
      },
      {
        question: "Have you made any lifestyle changes recently?",
        answer: "Started a new job with higher responsibilities"
      }
    ]
  }
};

// Helper functions to work with the data
export const getAllPatients = () => Object.values(patientsData);
export const getPatientById = (id) => patientsData[id] || null;

export default patientsData; 