export interface FormData {
  fullName: string;
  email: string;
  studentId: string;
  yearOfStudy: string;
  faculty: string;
  major: string;
  coopTerm: string;
  firstChoiceTeam: string;

  questions: {
    // Technology Team
    tech_q8?: string;
    tech_q9?: string;
    tech_q10?: string;

    // Event Team
    event_q4?: string;
    event_q10?: string;
    event_q11?: string;
  };
}
