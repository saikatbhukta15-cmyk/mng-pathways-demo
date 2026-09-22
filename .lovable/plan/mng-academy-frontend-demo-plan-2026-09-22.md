# MNG Academy Frontend Demo Plan

## Goal
Build a polished, mobile-first, single-page MNG Academy website demo that transforms the supplied content into a modern healthcare and skill-development experience. It will remain entirely frontend-only: no database, login, CMS, payments, APIs, or saved submissions.

## Experience and visual direction
- Use a premium education palette built around deep navy, confident blue, white, cool neutral surfaces, and one restrained warm accent.
- Pair strong contemporary typography with spacious editorial layouts, soft shadows, elegant borders, rounded cards, and restrained gradients.
- Keep the tone human and career-focused through authentic Indian classroom, healthcare-lab, campus, and community imagery.
- Use a sticky navigation, clear CTA hierarchy, subtle entrance/scroll motion, useful hover states, smooth in-page navigation, and an animated mobile menu.
- Build for phones first, then refine tablet, laptop, and wide desktop layouts.

## Page structure
1. **Navigation and hero** — headline, supporting copy, trust chips, phone contact, two primary actions, premium training image, and “Practical Learning / Learn by Doing” overlay.
2. **Recognition strip** — text/icon treatments for NSDC, PBSSD / Utkarsh Bangla, ISO 9001:2015, skill development, and practical training without fabricated certificates.
3. **Why MNG Academy** — six concise benefit cards.
4. **Courses** — interactive category tabs and image-led cards for the eight supplied course groups, prioritizing healthcare.
5. **GDA Advance spotlight** — practical-learning image, factual highlights, and enquiry action without invented duration or eligibility.
6. **Practical training** — bento image composition for the healthcare lab, classroom, computer lab, and student learning.
7. **Golpark campus** — approximately 11,500 sq.ft. claim and concise facility highlights.
8. **Learning-to-opportunity journey** — five-step process and “Admission Open” action, consistently using “Placement Assistance.”
9. **Student testimonials** — accessible horizontal carousel using only source-attributed testimonial text.
10. **Student journeys** — supplied placement-highlight names with a reusable modal containing the approved placeholder message.
11. **About and impact** — trust background, mission/vision, and a human CSR section covering the supplied social-development themes.
12. **Centers** — interactive location cards for all five centers, with verified contact/address details only and no fake map.
13. **Gallery** — responsive, filterable imagery for classrooms, training, students, campus, events, and healthcare labs.
14. **Admission CTA, contact, and FAQ** — frontend-only enquiry form with polished success feedback, factual accordion answers, and prominent phone/email actions.
15. **Footer** — organization identity, quick links, verified contact details, address, and clearly presented social placeholders.

## Content and asset handling
- Check the current MNG Academy website for factual copy, testimonial wording, center details, and usable official imagery before implementation.
- Prefer official MNG imagery where it is accessible and suitable; otherwise use cohesive, authentic-looking Indian education and healthcare-training imagery designed for easy replacement.
- Do not invent metrics, ratings, outcomes, salaries, employers, job titles, fees, durations, eligibility, or guarantees.
- Preserve the supplied legal organization name, contact details, addresses, and placement-assistance wording.

## Interaction details
- Filter course cards without a page reload.
- Provide touch-friendly testimonial controls, pagination indicators, and keyboard-accessible carousel behavior.
- Open student-story previews in an accessible modal.
- Validate the enquiry form locally and show: “Thank you! Your enquiry has been recorded for this demo.” No data leaves the browser.
- Use accessible accordion behavior for FAQs and focus-safe navigation/menu interactions.
- Link CTAs to the relevant course, contact, or enquiry section; phone and email actions use native device behavior.

## Technical approach
- Replace the current placeholder home page and create focused reusable React/TypeScript sections and data modules.
- Keep the experience as one guided conversion page with semantic in-page section navigation, matching the requested discovery-to-enquiry journey.
- Use Tailwind CSS v4 semantic design tokens for all colors, typography, spacing roles, and shadows.
- Avoid unnecessary dependencies; use lightweight CSS transitions and React state unless an animation genuinely benefits from a motion library.
- Lazy-load below-the-fold images, provide responsive sizing, stable aspect ratios, and reduced-motion behavior.
- Add unique MNG Academy page metadata, social metadata, and clean semantic markup.

## Validation
- Verify the page visually at desktop and mobile widths, including navigation, text wrapping, cards, imagery, carousel, tabs, modal, accordion, and form success state.
- Confirm all requested content sections are present, no placeholder homepage remains, no browser errors occur, and no backend/network submission is made.
- Check basic keyboard navigation, contrast, focus states, reduced motion, and initial-load performance.
