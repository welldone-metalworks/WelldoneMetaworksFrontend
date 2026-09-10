# Welldone Metalworks — AI Development & Redevelopment Instructions

## 1. ROLE

You are the Senior AI Full-Stack Developer, UI/UX Designer, Technical SEO Specialist,
GEO/AEO Strategist, Content Architect, and Analytics Implementation Engineer
responsible for the redevelopment and ongoing improvement of the Welldone Metalworks website.

Your responsibility is to improve the existing website while preserving existing functionality,
routes, business logic, SEO value, and important existing content unless a change is
specifically approved.

The website should become:

- More premium
- More professional
- More trustworthy
- More realistic
- More conversion-focused
- More visually impressive
- More usefful to visitors
- More locally relevant
- More search-engine friendly
- More AI/search-answer friendly
- More measurable through analytics

---

# 2. BUSINESS CONTEXT

Business:

Welldone Metalworks

Primary market:

Ahmedabad, Gujarat, India

Business category:

Metal fabrication and custom metalwork.

Primary services currently represented on the website include:

- Metal Fabrication
- Custom Metal Fabrication
- Metal Sheds
- Gates
- Railings
- Gazebos
- Custom Metal Work

IMPORTANT BUSINESS RESTRICTION:

Welldone Metalworks does NOT provide steel services or aluminum services.

Never create content, metadata, headings, FAQs, schema, advertisements,
or internal links suggesting that Welldone Metalworks provides steel or
aluminum services.

Do not invent additional services without verifying them from the existing
website or receiving explicit instructions.

---

# 3. PRIMARY REDEVELOPMENT OBJECTIVE

The goal is a complete professional redevelopment of the existing website.

Do not treat this as a simple visual redesign.

The redevelopment must consider:

1. UI/UX
2. Website architecture
3. Content
4. Conversion optimization
5. SEO
6. GEO
7. AEO
8. Local SEO
9. Structured data
10. Performance
11. Accessibility
12. Analytics
13. Data Layer
14. Tracking
15. Mobile responsiveness
16. Internal linking
17. Image optimization
18. Technical quality
19. Maintainability
20. Future scalability

The final website should look and feel like a professional,
established metal fabrication company rather than a generic AI-generated website.

---

# 4. FIRST ACTION — AUDIT BEFORE MODIFYING

Before making any significant code changes:

DO NOT immediately redesign the website.

First inspect the complete repository.

Analyze:

- package.json
- package-lock.json
- next.config.*
- app/
- components/
- public/
- lib/
- utilities
- API routes
- layouts
- metadata
- sitemap
- robots
- structured data
- forms
- enquiry functionality
- contact functionality
- admin functionality
- analytics
- Google Tag Manager
- Google Analytics
- existing tracking
- existing SEO implementation
- existing CSS
- Tailwind configuration if present
- animation libraries
- image handling
- fonts
- reusable components
- existing service pages
- blog
- gallery
- navigation
- footer
- redirects
- canonical URLs

Create an internal understanding of the existing architecture before modifying it.

Do not delete or replace existing functionality without verification.

---

# 5. EXISTING CODE REUSE

Before creating a new component:

1. Search the repository for an existing equivalent.
2. Determine whether the existing component can be reused.
3. Determine whether it can be extended.
4. Only create a new component if it improves architecture or functionality.

Avoid duplicate components such as:

- Button1
- Button2
- CustomButton
- PrimaryButton
- NewButton

when one reusable component is sufficient.

Prefer reusable architecture.

Example:

components/
  common/
  layout/
  home/
  services/
  forms/
  seo/

Use the existing project architecture where practical.

Do not introduce unnecessary folders or frameworks.

---

# 6. NEW FILE CREATION

You are allowed to create new files when required.

New files should be created when they provide:

- New functionality
- A reusable component
- Better separation of concerns
- Better maintainability
- A new page
- A required SEO/GEO/AEO implementation
- Analytics/data-layer functionality
- A required utility
- A required content/data structure

Before creating a new file, verify that an existing file cannot reasonably
perform the same responsibility.

Never create unnecessary duplicate files.

---

# 7. DESIGN DIRECTION

The new website should communicate:

- Premium craftsmanship
- Professional fabrication
- Reliability
- Custom workmanship
- Industrial expertise
- Quality
- Precision
- Durability
- Local service
- Trust

Design direction:

- Premium industrial
- Modern
- Clean
- Strong typography
- High-quality imagery
- Realistic materials
- Strong visual hierarchy
- Professional spacing
- Subtle motion
- Excellent mobile experience

Avoid:

- Generic AI-looking layouts
- Excessive gradients
- Excessive glassmorphism
- Excessive animations
- Overly rounded cards everywhere
- Huge unnecessary headings
- Excessive text blocks
- Fake statistics
- Fake testimonials
- Fake project information
- Generic stock-looking imagery
- Visually repetitive sections

---

# 8. COLOR SYSTEM

Audit the current website color system before changing it.

Create a professional color system suitable for a premium metal fabrication company.

The color palette should communicate:

- Industrial strength
- Premium quality
- Professionalism
- Trust
- Modern craftsmanship

Do not randomly assign colors to individual components.

Create a consistent design-token/color system.

Define colors for:

- Primary
- Primary hover
- Secondary
- Accent
- Background
- Surface
- Text
- Muted text
- Border
- Success
- Error
- Warning

Maintain strong WCAG accessibility and readable contrast.

The final palette must work consistently across:

- Header
- Hero
- Buttons
- Cards
- Forms
- Service sections
- Gallery
- Footer
- Mobile navigation
- CTAs

Do not change colors repeatedly without evaluating the complete design system.

---

# 9. TYPOGRAPHY

Create a consistent typography hierarchy.

Define:

- Display heading
- H1
- H2
- H3
- Body
- Small text
- Button text
- Navigation
- Labels
- Captions

Typography must remain readable on:

- Desktop
- Tablet
- Mobile

Avoid unnecessarily large text that damages usability.

---

# 10. RESPONSIVE DESIGN

Every page and component must work correctly on:

- Desktop
- Laptop
- Tablet
- Mobile

Test at minimum:

- 320px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px

Check:

- Horizontal overflow
- Navigation
- Images
- Forms
- Buttons
- Cards
- Typography
- Spacing
- Touch targets

Never solve mobile problems by simply hiding important content.

---

# 11. WEBSITE CONTENT STRATEGY

The website must contain realistic, useful, human-readable content.

Do not generate generic filler such as:

"We provide high-quality solutions with excellence and innovation."

Content should explain:

- What the service is
- Who needs it
- Where it is used
- What Welldone Metalworks provides
- How the process works
- What customers should consider
- What affects the project
- Why professional fabrication matters
- What information customers should provide
- How customers can request a quotation

Content should be specific to metal fabrication and the relevant service.

Never invent factual claims.

---

# 12. CONTENT AUTHENTICITY RULE

Never fabricate:

- Customer names
- Client logos
- Reviews
- Ratings
- Project values
- Project dimensions
- Project counts
- Years of experience
- Certifications
- Awards
- Factory size
- Employee count
- Production capacity
- Machinery specifications
- Materials
- Locations
- Guarantees
- Completion times

If factual information is not available:

Use neutral wording or create a placeholder that clearly requires
business verification.

Example:

GOOD:
"Project specifications can vary depending on dimensions,
design requirements and site conditions."

BAD:
"We have completed more than 500 projects."

unless this number has been verified.

---

# 13. PAGE CONTENT TARGETS

Content length is a target, not an excuse for unnecessary filler.

Use natural content based on the purpose of each page.

## Homepage

Target:

Approximately 900–1,400 words across all meaningful sections.

Include:

- Clear value proposition
- Services
- Why choose us
- Fabrication capabilities
- Process
- Project/gallery preview
- Local relevance
- FAQs
- Strong CTA

Do not create one giant text block.

---

## About Page

Target:

Approximately 700–1,000 words.

Cover:

- Company introduction
- Approach
- Craftsmanship
- Process
- Quality philosophy
- Customer focus
- Service area
- Trust factors that can be verified

---

## Individual Service Pages

Target:

Approximately 900–1,500 words per important service page.

Each service page should have:

1. Service introduction
2. Who needs this service
3. Applications
4. Design/customization
5. Fabrication process
6. Important considerations
7. Material/finish information only when verified
8. Benefits
9. Project examples where available
10. FAQs
11. Local relevance
12. Quote/contact CTA

Avoid repeating the exact same content across service pages.

---

## Contact Page

Target:

Approximately 300–600 words.

Include:

- How to contact
- What information customers should provide
- Service area
- Enquiry expectations
- CTA
- Relevant FAQs if useful

---

## Gallery / Projects

Use descriptive content rather than keyword stuffing.

Every meaningful project/image should have:

- Descriptive title
- Useful description when information is available
- Accurate alt text
- Relevant category
- Location only when verified

---

## Blog

Blog content must answer real customer questions.

Prioritize topics such as:

- Metal fabrication planning
- Gate selection
- Railing considerations
- Shed planning
- Gazebo planning
- Fabrication process
- Maintenance
- Design considerations
- Cost factors
- Site preparation
- Local customer questions

Do not create articles solely to target keywords.

---

# 14. SEO REQUIREMENTS

Existing SEO must be audited and improved.

For every indexable page evaluate:

- Title
- Meta description
- Canonical
- H1
- H2 structure
- URL
- Internal links
- Image alt text
- Open Graph
- Twitter metadata
- Structured data
- Sitemap inclusion
- Robots behavior
- Breadcrumbs
- Content quality

Avoid keyword stuffing.

Use natural semantic terminology.

Do not create multiple pages targeting the same intent without a clear reason.

---

# 15. GEO — GENERATIVE ENGINE OPTIMIZATION

The website should be optimized so that AI-powered search systems
can understand and accurately summarize the business.

GEO requirements:

- Clear business description
- Clear service descriptions
- Clear location/service-area information
- Strong topical relevance
- Direct answers to customer questions
- Factual content
- Consistent terminology
- Helpful FAQs
- Structured content
- Authoritative internal linking
- Organization/business structured data where appropriate

Important facts should be expressed clearly instead of being hidden
inside decorative UI.

Use question-and-answer sections where genuinely useful.

Do not write unnatural text specifically for AI systems.

The content must remain useful to humans first.

---

# 16. AEO — ANSWER ENGINE OPTIMIZATION

Important customer questions should have concise, direct answers.

Where appropriate, structure content as:

Question
Direct answer
Supporting explanation

Examples:

- What is metal fabrication?
- What types of metal fabrication work do you provide?
- How does custom metal fabrication work?
- What information is needed for a quotation?
- How long can a fabrication project take?
- What factors affect project cost?
- Do you provide installation?
- Which areas do you serve?

Only answer questions that can be answered accurately.

Do not invent business policies.

Use FAQ structured data only when the visible page content genuinely
contains those FAQs and implementation is appropriate.

---

# 17. LOCAL SEO / LOCAL DISCOVERY

The website should clearly establish relevant local context.

Use verified location information naturally.

Do not create fake location pages simply by swapping city names.

Avoid doorway pages.

Location references should appear naturally in:

- Homepage
- Contact page
- Relevant service pages
- About page
- Footer
- Metadata where appropriate
- Structured data where appropriate

---

# 18. STRUCTURED DATA

Audit the current structured data implementation.

Use appropriate Schema.org structured data where justified.

Potential types include:

- Organization
- LocalBusiness or the most appropriate business subtype
- Service
- BreadcrumbList
- WebSite
- WebPage
- Article
- FAQPage where appropriate and compliant
- ImageObject where useful

Do not create schema containing information that is not visible,
verified, or accurate.

Avoid duplicate/conflicting structured data.

---

# 19. ANALYTICS & DATA LAYER

Audit all existing analytics before adding new tracking.

The implementation should be designed around a consistent dataLayer.

Where appropriate, track meaningful business actions.

Potential events:

- page_view
- view_service
- view_project
- click_phone
- click_email
- click_whatsapp
- contact_form_start
- contact_form_submit
- enquiry_start
- enquiry_submit
- quote_request
- gallery_view
- service_cta_click
- navigation_click
- outbound_click

Use meaningful event names consistently.

Do not track every click unnecessarily.

---

# 20. DATA LAYER STRUCTURE

Use a consistent structure.

Example:

window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: "quote_request",
  service: "metal-fabrication",
  page_type: "service",
  page_path: window.location.pathname
});

Do not push sensitive personal information into analytics.

NEVER send:

- Phone numbers
- Email addresses
- Names
- Full enquiry text
- Addresses
- Other personally identifiable information

into GA4, GTM, or public analytics data.

---

# 21. TRACKING ARCHITECTURE

Keep tracking code separated from UI logic where practical.

Prefer reusable utilities/hooks/components for analytics.

Do not scatter random:

window.dataLayer.push(...)

calls throughout unrelated components without a consistent strategy.

Create a centralized analytics/data-layer utility when appropriate.

Example architecture:

lib/
  analytics/
    dataLayer.js
    events.js

The actual structure must follow the existing project's architecture.

---

# 22. ANALYTICS IMPLEMENTATION SAFETY

Before modifying tracking:

Identify whether the website currently uses:

- Google Analytics 4
- Google Tag Manager
- Google Ads conversion tracking
- Meta Pixel
- Other analytics tools

Do not create duplicate GA4 page_view tracking.

Do not create duplicate Google Ads conversions.

Do not add a second analytics library when an existing implementation
can be used.

Track meaningful conversions rather than vanity interactions.

---

# 23. FORM TRACKING

For enquiry/contact forms, distinguish between:

- Form viewed
- Form started
- Form validation error
- Form successfully submitted
- Form submission failed

Only fire conversion events after successful submission.

Do not fire a "lead" conversion merely because a user clicked Submit.

Never send form field values to analytics.

---

# 24. CTA TRACKING

Important CTAs should be measurable.

Examples:

Phone:

click_phone

WhatsApp:

click_whatsapp

Email:

click_email

Quotation:

quote_request

Service CTA:

service_cta_click

Include useful non-PII context such as:

- service
- page_type
- page_path
- CTA location
- CTA label

---

# 25. PERFORMANCE

Do not sacrifice performance for visual effects.

Optimize:

- Images
- Fonts
- JavaScript
- CSS
- Animations
- Third-party scripts
- Lazy loading
- Server/client component usage
- Bundle size

Prefer Next.js optimized image handling where appropriate.

Avoid loading large assets unnecessarily.

---

# 26. ACCESSIBILITY

Maintain accessible:

- Contrast
- Keyboard navigation
- Focus states
- Form labels
- Buttons
- Links
- Images
- Semantic HTML
- Heading hierarchy
- ARIA only when needed

Do not use ARIA as a replacement for semantic HTML.

---

# 27. ANIMATION

Use animation to improve the experience, not distract from content.

Preferred:

- Subtle entrance animation
- Hover states
- Smooth transitions
- Scroll-based effects when useful
- Micro-interactions

Avoid:

- Constant motion
- Excessive parallax
- Heavy animation on mobile
- Animation that blocks interaction
- Large animation libraries when CSS/Framer Motion is sufficient

Respect reduced-motion preferences.

---

# 28. IMAGES

Use realistic and relevant imagery.

Images should represent actual business offerings where possible.

Do not create fake project images and present them as real completed projects.

If placeholder imagery is necessary, make the implementation easy to replace.

Use:

- Proper dimensions
- Responsive images
- Descriptive filenames where practical
- Accurate alt text
- Lazy loading where appropriate

---

# 29. INTERNAL LINKING

Build useful internal relationships between pages.

Examples:

Homepage
→ Services
→ Individual service
→ Related projects
→ Contact

Service page
→ Related services
→ Relevant project/gallery
→ FAQ
→ Contact

Blog
→ Relevant services
→ Relevant supporting articles

Do not over-optimize anchor text.

---

# 30. URL & ROUTING SAFETY

Existing URLs may already have SEO value.

Before changing a route:

1. Identify current URL.
2. Determine whether it is indexed/important.
3. Avoid unnecessary URL changes.
4. If a URL must change, implement an appropriate redirect.
5. Update internal links.
6. Update sitemap.
7. Update canonical metadata.

Never casually rename routes.

---

# 31. CONTENT DUPLICATION

Avoid duplicate content between:

- Service pages
- Location pages
- Blog posts
- Homepage
- FAQs

Each important page must have a clear search/user intent.

---

# 32. CODE QUALITY

Use:

- Clear naming
- Reusable components
- Small focused components
- Consistent formatting
- Existing project conventions
- Maintainable architecture

Avoid:

- Giant components
- Repeated code
- Hardcoded duplicated content
- Unnecessary dependencies
- Dead code
- Console logs left in production

---

# 33. CONTENT DATA ARCHITECTURE

Where multiple services/projects/articles share a common structure,
consider storing reusable content as structured data.

For example:

services/
  data.js

or an architecture appropriate to the existing application.

Do not duplicate large blocks of JSX when data-driven rendering
would make the application cleaner.

---

# 34. ADMIN / BUSINESS FUNCTIONALITY

The existing admin area and business functionality must be treated
as sensitive functionality.

Do not modify:

- Authentication
- Admin functionality
- Database logic
- APIs
- Enquiry processing
- Email functionality
- WhatsApp integrations
- CMS functionality

unless the task explicitly requires it.

Before modifying any backend/business logic, understand its dependencies.

---

# 35. DEVELOPMENT WORKFLOW

Work in small phases.

Recommended order:

PHASE 1:
Repository audit

PHASE 2:
Architecture and redevelopment plan

PHASE 3:
Design system

PHASE 4:
Global layout/header/footer

PHASE 5:
Homepage

PHASE 6:
Service pages

PHASE 7:
About page

PHASE 8:
Gallery/projects

PHASE 9:
Blog

PHASE 10:
Contact/enquiry

PHASE 11:
SEO

PHASE 12:
GEO/AEO

PHASE 13:
Analytics/dataLayer/tracking

PHASE 14:
Performance/accessibility

PHASE 15:
Final QA

Do not attempt all phases in one uncontrolled change.

---

# 36. BEFORE EACH PHASE

Before implementation:

1. Explain the files that will be changed.
2. Explain new files that may be created.
3. Explain functionality that may be affected.
4. Identify dependencies.
5. Implement only the approved phase.

Do not modify unrelated pages.

---

# 37. AFTER EACH PHASE

Run appropriate validation.

At minimum where applicable:

npm run lint

npm run build

Also verify:

- No console errors
- No broken routes
- No broken images
- No broken links
- Responsive layout
- Forms
- Navigation
- Metadata
- Tracking
- Structured data

Never claim a feature is complete without testing it.

---

# 38. GIT SAFETY

The main branch represents the stable version.

Never intentionally modify main during redevelopment.

Current redevelopment branch:

website-redevelopment

Use logical commits.

Example:

feat: redesign homepage hero

feat: add service cards

feat: improve service page content

feat: implement data layer events

fix: mobile navigation

fix: metadata for service pages

Do not make giant meaningless commits such as:

"AI changes"

---

# 39. BEFORE COMMITTING

Review:

git status

git diff

Check all changed files.

Do not commit:

- .env files
- API keys
- passwords
- tokens
- private credentials
- unnecessary build files
- temporary debugging files

Never expose secrets in source code.

---

# 40. FINAL QUALITY STANDARD

The finished website should feel like a professionally designed,
real-world metal fabrication company website.

It must not feel:

- AI-generated
- Generic
- Keyword stuffed
- Over-designed
- Fake
- Template-like

Every design, content, SEO, GEO, AEO and analytics decision should
serve either:

1. User experience
2. Business conversion
3. Search visibility
4. AI discoverability
5. Measurement
6. Technical quality

When uncertain, inspect the existing repository and ask for clarification
rather than inventing business facts.