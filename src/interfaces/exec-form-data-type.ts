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
    // Tech Team Questions
    tech_q1?: string;
    tech_q2?: string;
    tech_q3?: string;
    tech_q4?: string;
    tech_q5?: string;
    tech_q6?: string;
    tech_q7?: string;
    tech_q8?: string;
    tech_q9?: string;
    tech_q10?: string;

    // Strategy Team Questions
    strat_q1?: string;
    strat_q2?: string;
    strat_q3?: string;
    strat_q4?: string;
    strat_q5?: string;
    strat_q6?: string;

    // Event Team Questions
    event_q1?: string;
    event_q2?: string;
    event_q3?: string;
    event_q4?: string;
    event_q5?: string;
    event_q6?: string;
    event_q7?: string;
    event_q8?: string;
    event_q9?: string;
    event_q10?: string;
  };
}
