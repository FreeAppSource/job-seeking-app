export const appInfo = {
  title: 'Job Seeking App',
  tagline: "Don't wait for Opportunity",
  welcomeDesc: 'Find top tech jobs, apply with one click, and connect directly with leading companies and hiring managers.',
};

export const userProfile = {
  firstName: 'Hassan',
  lastName: 'Shabbir',
  name: 'Hassan Shabbir',
  email: 'Hassan.Designer@gmail.com',
  phone: '+92 3127764515',
  role: 'Senior UI/UX Designer & Product Lead',
  location: 'Lahore, Pakistan • Open to Remote',
  avatar: require('../assets/images/hassan_avatar.png'),
};

export const jobsList = [
  {
    id: 'job-1',
    title: '.Net Developer',
    company: 'Enterprise Cloud Systems',
    type: 'Full Time',
    location: 'Lahore, Pakistan (Hybrid)',
    salary: '$95,000 - $120,000 / yr',
    skills: ['SQL', 'PHP', 'C#', 'MVC.net'],
    postedTime: '2 hours ago',
    logo: require('../assets/images/company_logo.png'),
    description: 'Design and write efficient, complicated modules or complex programs to meet customer requirements.\n\nInteract with analysts, users, and business stakeholders to gather, understand, and develop technical requirements.\n\nCoordinate systems analysis, systems development and implementation activities to ensure customer requirements are met.\n\nOrganize and prepare program and system documentation according to established procedures to facilitate ongoing support and maintenance.',
  },
  {
    id: 'job-2',
    title: 'Front-End Developer',
    company: 'Digital Nexus Labs',
    type: 'Full Time',
    location: 'Remote Global',
    salary: '$80,000 - $105,000 / yr',
    skills: ['React Native', 'JavaScript', 'CSS', 'Redux'],
    postedTime: '5 hours ago',
    logo: require('../assets/images/logo.png'),
    description: 'Build fast, responsive mobile and web interfaces with modern design systems and seamless API integrations.',
  },
  {
    id: 'job-3',
    title: 'Senior Product Designer',
    company: 'Fintech Spark',
    type: 'Full Time',
    location: 'Remote',
    salary: '$90,000 - $115,000 / yr',
    skills: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
    postedTime: '1 day ago',
    logo: require('../assets/images/company_logo.png'),
    description: 'Lead discovery, wireframing, and interactive design components across our cross-platform payment applications.',
  },
];

export const feedItems = jobsList;
