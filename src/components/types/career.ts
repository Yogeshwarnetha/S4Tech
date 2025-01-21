export interface Career {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    postedDate: string;
    status: 'active' | 'closed';
    applicants: number;
  }
  
  export const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Temporary',
    'Remote',
    'Internship',
  ] as const;
  
  export const departments = [
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'Customer Support',
    'Human Resources',
    'Finance',
    'Operations',
  ] as const;