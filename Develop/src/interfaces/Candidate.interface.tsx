// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;  // Optional field
    location?: {
      city: string;
      country: string;
    };
    position: string;
    status: 'applied' | 'interviewing' | 'offered' | 'hired' | 'rejected';
    salaryExpectation?: number;
    experienceYears: number;
    skills: string[];
    education: {
      degree: string;
      institution: string;
      year: number;
    }[];
    resumeUrl?: string;
    linkedInUrl?: string;
    githubUrl?: string;
    portfolioUrl?: string;
    appliedDate: string; // ISO date string
    lastUpdated: string; // ISO date string
    notes?: string;
    recruiterId?: string;
    avatarUrl?: string;
  }