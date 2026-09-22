import { FormEvent, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Computer,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Library,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorPlay,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wifi,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { centers, courses, faqs, successNames, testimonials, type CourseCategory } from "@/lib/mng-data";
import heroImage from "@/assets/mng-hero-classroom.jpg";
import labImage from "@/assets/mng-healthcare-lab.jpg";
import classroomImage from "@/assets/mng-smart-classroom.jpg";
import impactImage from "@/assets/mng-community-impact.jpg";
import logo from "@/assets/mng-logo.webp";

const nav = [
  ["Home", "home"], ["About", "about"], ["Courses", "courses"], ["Why MNG", "why-mng"],
  ["Infrastructure", "infrastructure"], ["Student Stories", "stories"], ["Centers", "centers"], ["Contact", "contact"],
] as const;

const imageMap = { healthcare: labImage, classroom: classroomImage, impact: impactImage };

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="section-heading">
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</div>
    <h2 className={light ? "text-primary-foreground" : "text-foreground"}>{title}</h2>
    {copy && <p className={light ? "text-primary-foreground/70" : "text-muted-foreground"}>{copy}</p>}
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
    <div className="site-container nav-shell">
      <a href="#home" className="brand" aria-label="MNG Academy home">
        <img src={logo} alt="MNG Academy" width={136} height={48} />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <Button className="nav-cta" onClick={() => scrollTo("contact")}>Admission Open <ArrowUpRight /></Button>
      <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="mobile-menu">
      {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></a>)}
      <Button onClick={() => { setOpen(false); scrollTo("contact"); }}>Admission Open</Button>
    </div>}
  </header>;
}

function Hero() {
  return <section id="home" className="hero-section">
    <div className="hero-grid site-container">
      <div className="hero-copy reveal">
        <div className="hero-kicker"><span /> Career-focused training in Kolkata</div>
        <h1>Build Skills.<br />Gain Confidence.<br /><em>Shape Your Career.</em></h1>
        <p>MNG Academy provides career-focused skill development and practical training designed to prepare learners for real-world opportunities.</p>
        <div className="hero-actions">
          <Button size="lg" onClick={() => scrollTo("courses")}>Explore Courses <ArrowRight /></Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("contact")}><MessageCircle /> Talk to a Counselor</Button>
        </div>
        <a className="hero-phone" href="tel:+918100108338"><span><Phone /></span><span><small>Call for admission enquiries</small>+91 8100108338</span></a>
        <div className="trust-chips">{["NSDC Training Partner", "Practical Training", "Career-Focused Courses", "Placement Assistance"].map((item) => <span key={item}><Check />{item}</span>)}</div>
      </div>
      <div className="hero-visual reveal-delay">
        <div className="hero-image-wrap"><img src={heroImage} alt="Indian healthcare students learning practical patient care" width={1536} height={1152} fetchPriority="high" /></div>
        <div className="float-card"><span><Sparkles /></span><div><strong>Practical Learning</strong><small>Learn by Doing</small></div></div>
        <div className="hero-note"><strong>Since 2018</strong><span>Skill development with purpose</span></div>
      </div>
    </div>
  </section>;
}

function TrustStrip() {
  const items = [["NSDC", "Training Partner"], ["PBSSD", "Utkarsh Bangla"], ["ISO", "9001:2015"], ["SKILL", "Development"], ["PRACTICAL", "Training"]];
  return <section className="trust-strip"><div className="site-container"><p>Recognition & training highlights</p><div className="trust-row">{items.map(([a,b], i) => <div className="trust-item" key={a}><span>{i === 0 ? <ShieldCheck /> : i === 1 ? <Award /> : i === 2 ? <CircleCheck /> : i === 3 ? <Target /> : <GraduationCap />}</span><div><strong>{a}</strong><small>{b}</small></div></div>)}</div></div></section>;
}

function WhyMNG() {
  const items = [
    [GraduationCap, "Practical Learning", "Hands-on learning designed to build job-ready skills."],
    [Target, "Industry-Oriented Training", "Training focused on practical knowledge and real workplace expectations."],
    [Building2, "Modern Infrastructure", "Smart classrooms, practical labs, computer labs and learning resources."],
    [HeartHandshake, "Career Guidance", "Supportive career counselling for students choosing their next step."],
    [BriefcaseIcon, "Placement Assistance", "Career support and placement assistance for eligible learners."],
    [Users, "Student-Centered", "Supportive faculty and a learning environment focused on student growth."],
  ];
  return <section id="why-mng" className="section why-section"><div className="site-container">
    <SectionHeading eyebrow="The MNG difference" title="More Than Training. A Pathway to Opportunity." copy="An environment where learning connects to confidence, practical ability and the next career step." />
    <div className="benefit-grid">{items.map(([Icon, title, copy], i) => <article className="benefit-card" key={String(title)}><span className="card-number">0{i+1}</span><div className="icon-box"><Icon /></div><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}</div>
  </div></section>;
}

function BriefcaseIcon() { return <GraduationCap />; }

function CoursesSection() {
  const [filter, setFilter] = useState<"All" | CourseCategory>("All");
  const filtered = filter === "All" ? courses : courses.filter((course) => course.category === filter);
  const filters: ("All" | CourseCategory)[] = ["All", "Healthcare", "NSDC", "BFSI", "Skill Development"];
  return <section id="courses" className="section courses-section"><div className="site-container">
    <div className="heading-row"><SectionHeading eyebrow="Career pathways" title="Explore Our Courses" copy="Choose a practical learning path built around skills, confidence and real-world readiness." /><Button variant="outline" onClick={() => scrollTo("contact")}>Get course guidance <ArrowUpRight /></Button></div>
    <div className="filter-tabs" role="tablist" aria-label="Course categories">{filters.map((item) => <Button key={item} variant={filter === item ? "default" : "ghost"} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</Button>)}</div>
    <div className="course-grid">{filtered.map((course) => { const Icon = course.icon; return <article className="course-card" key={course.title}>
      <div className="course-image"><img loading="lazy" src={imageMap[course.image]} alt="" width={1408} height={1024}/><span>{course.category}</span><div className="course-icon"><Icon /></div></div>
      <div className="course-body"><h3>{course.title}</h3><p>{course.description}</p><div className="course-highlights">{course.highlights.map((h) => <span key={h}><Check />{h}</span>)}</div><Button variant="outline" onClick={() => scrollTo("contact")}>View Course <ArrowRight /></Button></div>
    </article>; })}</div>
  </div></section>;
}

function FeaturedCourse() {
  return <section className="section featured-course"><div className="site-container feature-grid">
    <div className="feature-image"><img loading="lazy" src={labImage} alt="Healthcare trainees in a practical learning lab" width={1408} height={1024}/><div><span>Featured course</span><strong>Healthcare Training</strong></div></div>
    <div className="feature-copy"><div className="eyebrow">Course spotlight</div><h2>General Duty Assistant <span>(GDA Advance)</span></h2><p>Build practical capabilities for patient support and healthcare assistance in a learning environment designed around real-world readiness.</p>
      <div className="feature-list">{["Practical training", "Industry-focused learning", "Career guidance", "Placement assistance"].map((x) => <div key={x}><CircleCheck/><span>{x}</span></div>)}</div>
      <Button size="lg" onClick={() => scrollTo("contact")}>Enquire About This Course <ArrowUpRight /></Button>
    </div>
  </div></section>;
}

function PracticalSection() {
  return <section className="section practical-section"><div className="site-container">
    <SectionHeading eyebrow="The learning experience" title="Learn Beyond the Classroom" copy="At MNG Academy, practical exposure is an important part of skill development. Students learn through hands-on training supported by dedicated learning spaces and practical facilities." />
    <div className="bento-grid">
      <figure className="bento-main"><img loading="lazy" src={labImage} alt="Healthcare practical lab" width={1408} height={1024}/><figcaption>Hands-On Practice</figcaption></figure>
      <figure><img loading="lazy" src={classroomImage} alt="Students in a smart classroom" width={1408} height={1024}/><figcaption>Smart Classrooms</figcaption></figure>
      <figure><img loading="lazy" src={heroImage} alt="Students learning practical care" width={1536} height={1152}/><figcaption>Practical Labs</figcaption></figure>
      <figure className="bento-wide"><img loading="lazy" src={impactImage} alt="A trainer supporting students" width={1408} height={1024}/><figcaption>Career Guidance</figcaption></figure>
    </div>
  </div></section>;
}

function Infrastructure() {
  const facilities = [[Wifi,"Wi-Fi Campus"],[MonitorPlay,"AC Smart Classrooms"],[HeartPulse,"Healthcare Labs"],[Computer,"Computer Labs"],[HeartHandshake,"Counselling Cell"],[Library,"Open Library"],[Building2,"Lift Facility"]] as const;
  return <section id="infrastructure" className="section infrastructure-section"><div className="site-container infrastructure-grid">
    <div className="campus-photo"><img loading="lazy" src={classroomImage} alt="Modern learning infrastructure at a training campus" width={1408} height={1024}/><div className="campus-location"><MapPin/><span><strong>Golpark Campus</strong>South Kolkata</span></div></div>
    <div><SectionHeading eyebrow="Golpark training campus" title="Designed for Learning. Built for Practice." copy="Approximately 11,500 sq.ft. of learning infrastructure with dedicated facilities for classroom and practical training." />
      <div className="facility-grid">{facilities.map(([Icon, text]) => <div key={text}><Icon/><span>{text}</span></div>)}</div>
    </div>
  </div></section>;
}

function Journey() {
  const steps = ["Learn", "Practice", "Build Confidence", "Career Guidance", "Placement Assistance"];
  return <section className="section journey-section"><div className="site-container">
    <div className="journey-top"><SectionHeading light eyebrow="Your next chapter" title="From Learning to Opportunity" copy="Training is only the beginning. MNG Academy focuses on practical skills, career guidance and placement assistance to help students move toward professional opportunities." /><Button size="lg" onClick={() => scrollTo("contact")}>Admission Open <ArrowUpRight /></Button></div>
    <div className="journey-line">{steps.map((step, i) => <div key={step}><span>0{i+1}</span><strong>{step}</strong></div>)}</div>
  </div></section>;
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const change = (amount: number) => setIndex((index + amount + testimonials.length) % testimonials.length);
  return <section className="section testimonial-section"><div className="site-container">
    <div className="heading-row"><SectionHeading eyebrow="Student voices" title="What Our Students Say" copy="Experiences shared by learners from the MNG Academy community." /><div className="slider-controls"><Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => change(-1)}><ArrowLeft/></Button><Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => change(1)}><ArrowRight/></Button></div></div>
    <div className="testimonial-stage" aria-live="polite"><Quote className="quote-mark"/><blockquote>“{testimonials[index].quote}”</blockquote><div className="student-id"><span>{testimonials[index].name.split(" ").map((n) => n[0]).join("")}</span><div><strong>{testimonials[index].name}</strong><small>MNG Academy student</small></div></div><div className="decorative-stars" aria-label="Student testimonial">★★★★★</div></div>
    <div className="slider-dots">{testimonials.map((t,i) => <button key={t.name} onClick={() => setIndex(i)} aria-label={`Show testimonial from ${t.name}`} className={i === index ? "active" : ""}/>)}</div>
  </div></section>;
}

function SuccessStories() {
  const [selected, setSelected] = useState<string | null>(null);
  return <section id="stories" className="section stories-section"><div className="site-container">
    <SectionHeading eyebrow="Student success" title="Real Students. Real Journeys." copy="A celebration of learners featured in MNG Academy's placement and student-success highlights." />
    <div className="story-grid">{successNames.map((name, i) => <article key={name}><div className="story-avatar">{name.split(" ").map(n=>n[0]).join("")}</div><div><h3>{name}</h3><p>Placement Highlight / Student Success Story</p></div><Button variant="ghost" size="icon" onClick={() => setSelected(name)} aria-label={`Read ${name}'s story`}><ArrowUpRight/></Button><span className="story-index">{String(i+1).padStart(2,"0")}</span></article>)}</div>
  </div>{selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}><div role="dialog" aria-modal="true" aria-labelledby="story-title" className="story-modal" onMouseDown={(e)=>e.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></Button><div className="story-avatar large">{selected.split(" ").map(n=>n[0]).join("")}</div><div className="eyebrow">Student success story</div><h3 id="story-title">{selected}</h3><p>Student success story details will be added from the official MNG Academy content.</p><Button onClick={()=>setSelected(null)}>Close story</Button></div></div>}</section>;
}

function About() {
  return <><section id="about" className="section about-section"><div className="site-container about-grid">
    <div><SectionHeading eyebrow="About MNG Academy" title="Empowering Futures Through Skill & Education" /><p className="about-lead">Established in March 2018, Mahendra Nath Ghosh Educational & Welfare Trust is a non-profit charitable trust focused on education, healthcare training and career-oriented skill development.</p><p>Experienced faculty, professional management and practical learning come together to support employability and student growth.</p><div className="mission-grid"><article><Target/><h3>Our Mission</h3><p>To make practical, career-oriented learning accessible and meaningful.</p></article><article><Sparkles/><h3>Our Vision</h3><p>To create pathways to confidence, capability and social progress through skills.</p></article></div></div>
    <div className="about-visual"><img loading="lazy" src={heroImage} alt="MNG Academy students learning together" width={1536} height={1152}/><div><strong>2018</strong><span>Established in Kolkata</span></div></div>
  </div></section>
  <section className="section impact-section"><div className="site-container impact-grid"><div><img loading="lazy" src={impactImage} alt="Women participating in a community skill workshop" width={1408} height={1024}/></div><div><SectionHeading eyebrow="Social impact & CSR" title="Skills That Create Impact" copy="Education has the power to strengthen individuals and communities. MNG Academy's social-development focus supports practical opportunity with dignity."/><div className="impact-tags">{["Skill development","Women empowerment","Community health awareness","Underprivileged youth","CSR initiatives"].map(x=><span key={x}><Check/>{x}</span>)}</div></div></div></section></>;
}

function Centers() {
  const [active, setActive] = useState(1);
  return <section id="centers" className="section centers-section"><div className="site-container"><div className="heading-row"><SectionHeading eyebrow="Our locations" title="Learning Closer to You" copy="Explore MNG Academy's training presence across Kolkata and West Bengal."/><a href="tel:+918100108338" className="text-link"><Phone/> +91 8100108338</a></div>
    <div className="centers-layout"><div className="centers-list">{centers.map((center,i)=><button key={center.name} onClick={()=>setActive(i)} className={active===i?"active":""}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{center.name}</strong><small>{center.location}</small></div><ArrowRight/></button>)}</div><div className="map-card"><div className="map-grid"/><span className="map-pin"><MapPin/></span><div className="map-info"><small>Selected location</small><h3>{centers[active].name}</h3><p>{centers[active].address}</p><a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centers[active].address)}`}>View Location <ArrowUpRight/></a></div></div></div>
  </div></section>;
}

function Gallery() {
  const images = [[labImage,"Healthcare lab","gallery-tall"],[classroomImage,"Smart classroom",""],[heroImage,"Practical training",""],[impactImage,"Student learning","gallery-wide"]];
  return <section id="gallery" className="section gallery-section"><div className="site-container"><SectionHeading eyebrow="Inside MNG" title="Learning in Action" copy="A glimpse into practical training, classrooms, students and community learning."/><div className="gallery-grid">{images.map(([src,label,cn])=><figure key={label} className={cn}><img loading="lazy" src={src} alt={label} width={1408} height={1024}/><figcaption>{label}<ArrowUpRight/></figcaption></figure>)}</div></div></section>;
}

function FaqContact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [success, setSuccess] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSuccess(true); e.currentTarget.reset(); };
  return <><section className="admission-band"><div className="site-container"><div><div className="eyebrow eyebrow-light">Admissions are open</div><h2>Ready to Start Your Learning Journey?</h2><p>Speak with our counselor and explore the right training opportunity for you.</p></div><div><Button size="lg" onClick={()=>scrollTo("contact")}>Enquire Now <ArrowUpRight/></Button><a href="tel:+918100108338"><Phone/> Call +91 8100108338</a><a href="mailto:abhijit@mngacademy.in"><Mail/> abhijit@mngacademy.in</a></div></div></section>
  <section id="contact" className="section contact-section"><div className="site-container contact-grid"><div><SectionHeading eyebrow="Let's talk" title="Your Next Step Starts Here" copy="Tell us what you would like to learn. A counselor can help you explore the right training pathway."/><div className="contact-cards"><a href="tel:+918100108338"><Phone/><span><small>Call us</small><strong>+91 8100108338</strong></span></a><a href="mailto:abhijit@mngacademy.in"><Mail/><span><small>Email us</small><strong>abhijit@mngacademy.in</strong></span></a><div><Clock3/><span><small>Visit us</small><strong>Gariahat, Kolkata</strong></span></div></div></div>
    <form className="enquiry-form" onSubmit={onSubmit}><div><label htmlFor="name">Name</label><Input id="name" name="name" required placeholder="Your full name"/></div><div className="form-row"><div><label htmlFor="phone">Phone</label><Input id="phone" name="phone" inputMode="tel" required placeholder="Your phone number"/></div><div><label htmlFor="email">Email</label><Input id="email" name="email" type="email" required placeholder="you@example.com"/></div></div><div><label htmlFor="course">Course</label><select id="course" name="course" required defaultValue=""><option value="" disabled>Select a course</option>{courses.map(c=><option key={c.title}>{c.title}</option>)}</select></div><div><label htmlFor="message">Message</label><Textarea id="message" name="message" rows={4} placeholder="How can we help?"/></div><Button size="lg" type="submit">Submit Enquiry <ArrowUpRight/></Button><p className="form-note"><ShieldCheck/> Demo only — your information is not sent or stored.</p></form></div></section>
  <section id="faqs" className="section faq-section"><div className="site-container faq-grid"><SectionHeading eyebrow="Frequently asked" title="Questions, Answered." copy="Clear information to help students and families make a confident next step."/><div className="faq-list">{faqs.map(([q,a],i)=><article key={q} className={openFaq===i?"open":""}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown/></button>{openFaq===i&&<p>{a}</p>}</article>)}</div></div></section>
  {success&&<div className="toast-success" role="status"><CircleCheck/><div><strong>Thank you!</strong><span>Your enquiry has been recorded for this demo.</span></div><Button variant="ghost" size="icon" onClick={()=>setSuccess(false)} aria-label="Dismiss"><X/></Button></div>}</>;
}

function Footer() {
  return <footer><div className="site-container footer-grid"><div className="footer-brand"><img src={logo} alt="MNG Academy" width={136} height={48}/><p>Mahendra Nath Ghosh Educational & Welfare Trust</p><p>Career-focused practical training for learners across Kolkata and West Bengal.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="YouTube"><Youtube/></a></div></div><div><h3>Quick Links</h3>{[["About","about"],["Courses","courses"],["Centers","centers"],["Testimonials","stories"],["Gallery","gallery"],["FAQs","faqs"],["Contact","contact"]].map(([x,id])=><a href={`#${id}`} key={x}>{x}</a>)}</div><div><h3>Contact</h3><a href="mailto:abhijit@mngacademy.in">abhijit@mngacademy.in</a><a href="mailto:info@mngacademy.in">info@mngacademy.in</a><a href="tel:+918100108338">+91 8100108338</a></div><div><h3>Corporate Office</h3><p>7, Suren Tagore Rd, Gariahat,<br/>Kolkata - 700019,<br/>West Bengal</p><a className="footer-location" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=7%20Suren%20Tagore%20Road%20Gariahat%20Kolkata">View location <ArrowUpRight/></a></div></div><div className="site-container footer-bottom"><span>© 2026 MNG Academy. Demo redesign.</span><span>Practical skills. Confident futures.</span></div></footer>;
}

export function MngAcademyPage() {
  return <div className="mng-page"><Navbar/><main><Hero/><TrustStrip/><WhyMNG/><CoursesSection/><FeaturedCourse/><PracticalSection/><Infrastructure/><Journey/><Testimonials/><SuccessStories/><About/><Centers/><Gallery/><FaqContact/></main><Footer/></div>;
}