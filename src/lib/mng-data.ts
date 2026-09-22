import {
  Banknote,
  BriefcaseBusiness,
  HeartHandshake,
  HeartPulse,
  Palette,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type CourseCategory = "Healthcare" | "NSDC" | "BFSI" | "Skill Development";

export interface Course {
  title: string;
  category: CourseCategory;
  description: string;
  highlights: string[];
  image: "healthcare" | "classroom" | "impact";
  icon: LucideIcon;
}

export const courses: Course[] = [
  { title: "General Duty Assistant – GDA Advance", category: "Healthcare", description: "Build practical skills for patient support and healthcare assistance.", highlights: ["Hands-on practice", "Career guidance"], image: "healthcare", icon: Stethoscope },
  { title: "Phlebotomy Technician", category: "Healthcare", description: "Develop essential skills for specimen collection and diagnostic support.", highlights: ["Practical learning", "Diagnostic support"], image: "healthcare", icon: HeartPulse },
  { title: "NSDC Certified Courses", category: "NSDC", description: "Career-oriented training aligned with nationally recognised skill development.", highlights: ["Skill focused", "Industry oriented"], image: "classroom", icon: BriefcaseBusiness },
  { title: "Banking, Financial Services & Insurance", category: "BFSI", description: "Build essential knowledge for customer-facing opportunities in financial services.", highlights: ["Workplace skills", "Professional learning"], image: "classroom", icon: Banknote },
  { title: "Food & Beverage Service – Steward", category: "Skill Development", description: "Learn practical service skills for hospitality environments.", highlights: ["Service skills", "Practical sessions"], image: "classroom", icon: UtensilsCrossed },
  { title: "Bridal Fashion & Portfolio Makeup Artist", category: "Skill Development", description: "Develop creative, client-ready skills for beauty and bridal services.", highlights: ["Creative practice", "Portfolio focused"], image: "impact", icon: Palette },
  { title: "Retail Sales Associate", category: "Skill Development", description: "Prepare for customer service and sales roles in modern retail.", highlights: ["Customer skills", "Career focused"], image: "classroom", icon: ShoppingBag },
  { title: "Utkarsh Bangla / PBSSD Courses", category: "Skill Development", description: "Skill development pathways created to support employability and opportunity.", highlights: ["Employability", "Supported learning"], image: "impact", icon: HeartHandshake },
];

export const testimonials = [
  { name: "Susanta Sarkar", quote: "MNG is really for the students who want to make their career. I am interested in the Caregiver course. It's really very authentic." },
  { name: "Trisha Paramanic", quote: "MNG Academy is one of the best nursing institutes. The training and proper guidance from qualified and talented trainers are excellent." },
  { name: "Neha Shaw", quote: "Good environment, excellent nursing lab, offering good placement opportunities. One of the best nursing training institutes in West Bengal." },
  { name: "Titas Pal", quote: "This is really a place where students' career is the last word. Practical lab and faculties are excellent." },
  { name: "Rinky Maity", quote: "The Golpark Center is very good. I have taken admission there and am very happy with the course and staff. Thank you." },
  { name: "Shabina Khatoon", quote: "I like the faculty here at campus. They teach very well. I highly recommend MNG Academy to everyone in Kolkata." },
];

export const successNames = ["Samrat Saha", "Raja Das", "Anindita Biswas", "Souvik Halder", "Anwesha Dutta", "Madhumita Mondal", "Sandip K Halder", "Arpita Biswas", "Susanta Sarkar", "Bulti Mistri"];

export const centers = [
  { name: "Corporate Office", location: "Gariahat, Kolkata", address: "7, Suren Tagore Road, Gariahat, Kolkata - 700019, West Bengal" },
  { name: "Golpark Campus", location: "South Kolkata", address: "134/1 Southern Avenue, 3rd Floor, Kolkata - 700029, West Bengal" },
  { name: "Burdwan Center", location: "Burdwan", address: "34, Parcus Road, Burdwan, West Bengal - 713101" },
  { name: "Chinsurah Center", location: "Hooghly", address: "MG Road, Khadina More, Chinsurah, Hooghly - 712101" },
  { name: "Baruipur Center", location: "South 24 Parganas", address: "82/A, Madarat Road, Baruipur, Kolkata - 700144" },
];

export const faqs = [
  ["What courses does MNG Academy offer?", "MNG Academy offers healthcare, NSDC-certified, BFSI, hospitality, retail, beauty and PBSSD / Utkarsh Bangla skill-development courses."],
  ["What is GDA Advance?", "General Duty Assistant – GDA Advance focuses on practical skills for patient support and healthcare assistance."],
  ["Is practical training provided?", "Yes. Practical exposure is supported through dedicated learning spaces, healthcare labs, computer labs and classroom facilities."],
  ["Does MNG Academy offer career counselling?", "Yes. Career counselling supports learners as they consider training pathways and their next professional step."],
  ["Is placement assistance available?", "Placement assistance is available for eligible learners. It is career support and does not represent guaranteed employment."],
  ["Where are the MNG Academy centers located?", "MNG Academy lists centers in Gariahat, Golpark, Burdwan, Chinsurah and Baruipur."],
  ["What is NSDC certification?", "NSDC supports skill development in India. MNG Academy presents its NSDC partnership and certified training among its recognition highlights."],
  ["How can I enquire about admission?", "Call +91 8100108338, email abhijit@mngacademy.in, or complete the enquiry form on this page."],
] as const;