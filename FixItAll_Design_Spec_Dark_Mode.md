# FixItAll --- Raw UI Design Specification

## Source of truth

This document is a text-only reconstruction of the supplied visual
sitemap. Use it as the design specification when implementing the MPA.
Reproduce the visual hierarchy, spacing, proportions, colors,
typography, cards, borders, navigation, and page relationships shown in
the reference.

IMPORTANT: - This is an MPA (multi-page application/site), not a single
long dashboard. - The eight screens below are visual examples of the
actual page templates. - Reuse the same header/navigation/footer across
all pages. - Preserve the same design language across Health,
Automobile, Home Repairs, Electronics, etc. - Do not invent a different
visual style. - Responsive behavior may adapt the layout on mobile, but
desktop should closely match this specification.

------------------------------------------------------------------------

# 1. GLOBAL DESIGN SYSTEM

## Overall visual character

-   Modern, clean, trustworthy, lightweight troubleshooting platform.
-   Deep dark backgrounds with extremely subtle, low-contrast colored
    section gradients.
-   Rounded cards with thin dark-slate borders.
-   Very soft shadows, never heavy/glossy.
-   Lots of whitespace.
-   Blue is the primary interactive/accent color.
-   Health uses a soft pink/red accent.
-   Automobile uses blue.
-   Home Repair can use orange/warm accents.
-   Success/safety messages use green.
-   Warning/urgent health messages use red.
-   Text is soft white/light gray rather than pure white.
-   The interface should feel closer to a polished SaaS/product website
    than a blog.

## Main colors

Use CSS variables so the theme remains consistent. These values are
specifically tuned for the dark mode; do not change layout, component
behavior, functionality, or logos.

--primary: #60A5FA --primary-dark: #3B82F6 --primary-soft: #172554
--text: #F8FAFC --text-secondary: #CBD5E1 --text-muted: #94A3B8
--border: #263449 --surface: #111827 --surface-soft: #0F172A
--background: #0B1120

Health: --health: #FB7185 --health-soft: #3B1723 --health-border:
#5B2634

Automobile: --auto: #60A5FA --auto-soft: #172554

Home: --home: #FB923C --home-soft: #2A1A0D

Success: --success: #4ADE80 --success-soft: #0D2A1A --success-border:
#1F6B3A

Warning: --warning: #F87171 --warning-soft: #2B1515 --warning-border:
#6B2727

Dark-mode neutrals: --header-surface: #0F172A --footer-surface: #070B14
--input-surface: #0B1220 --divider: #1E293B --hover-surface: #172033

## Typography

Use a clean modern sans-serif: - Preferred: Inter - Fallback: system-ui,
-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.

Hierarchy: - Main hero title: approximately 30--36px, weight 700 - Page
title: approximately 24--30px, weight 700 - Section title: approximately
16--20px, weight 700 - Card title: approximately 14--16px, weight 600 -
Body: approximately 13--15px, weight 400 - Small metadata: approximately
11--12px - Navigation: approximately 11--13px, weight 500

Desktop design is compact and precise. Do not make all text oversized.

## Borders and corners

-   Main cards: 10--14px border-radius.
-   Buttons: 5--8px radius.
-   Search inputs: 7--10px radius.
-   Pills/tags: fully rounded.
-   Borders: #E2E8F0, 1px.
-   Avoid thick borders.

## Shadows

Use subtle dark-mode shadows: - Standard card: 0 2px 10px rgba(0, 0, 0,
0.20) - Hover card: slightly stronger but still subtle. - Search/hero
input: subtle blue-tinted shadow on focus.

## Page width

-   Main content max width approximately 1180--1240px.
-   Center content horizontally.
-   Desktop pages have generous side whitespace.
-   Main page sections should not stretch edge-to-edge.

------------------------------------------------------------------------

# 1A. DARK MODE COLOR INTEGRATION CONTRACT

This is the dark-mode version of the original FixItAll design
specification.

ONLY THE VISUAL COLOR THEME HAS CHANGED.

Do NOT change: - Page count - Page hierarchy - Routes - Navigation -
User flows - Diagnosis logic - Search behavior - Forms - Components -
Logos - Logo proportions - Logo icon - Text content - SEO architecture -
Accessibility behavior - Responsive breakpoints - Spacing - Typography -
Card sizes - Component positions - Button labels - Icons

Dark mode rules: - Use the dark color tokens defined above throughout
the entire site. - Never leave large white page backgrounds in dark
mode. - Do not use pure #000000 as the general page background. - Do not
use pure #FFFFFF for large surfaces. - Use #F8FAFC / #E2E8F0 for primary
readable text. - Use #CBD5E1 and #94A3B8 for secondary/muted text. -
Keep primary blue visually bright enough to maintain contrast on dark
surfaces. - Keep Health, Automobile, Home, Success, and Warning accents
recognizable, but use dark tinted soft backgrounds. - Keep the existing
FixItAll logo exactly the same. Do not recolor or redesign it unless the
existing implementation already provides a dark-mode logo variant. -
Preserve all original light-mode geometry and component hierarchy. -
Gradients should be extremely subtle and must not become visually
dominant. - Hover states should use dark-surface changes plus the
existing accent color, not white flashes. - Inputs, cards, lists,
article cards, and category cards all use dark surfaces. - The footer
remains dark and should be slightly darker than the main page surfaces.

# 2. GLOBAL HEADER

Every page uses the same dark header.

Structure: LEFT: - Small blue circular/hexagonal FixItAll icon/logo -
"FixItAll" text - Logo text is dark navy and bold.

CENTER/RIGHT NAV: - Categories - How It Works - Blog - Login button

Header characteristics: - Dark surface background using
--header-surface. - Bottom border #263449. - Height approximately
56--64px. - Horizontal padding approximately 24--40px. - Logo on left. -
Navigation on right. - Navigation text is small and dark navy. - Login
is a compact primary-blue filled button with soft-white text. - Desktop
nav is horizontally aligned. - Mobile should collapse to a menu.

Header must be reused identically across pages.

------------------------------------------------------------------------

# 3. GLOBAL FOOTER

The footer appears at the bottom of the sitemap and should be shared
across the MPA.

Visual: - Deep dark navy background, approximately #070B14 / #0B1220. -
Rounded top-level container corners if displayed inside a page
max-width. - Soft white/light-gray text. - Four main columns.

COLUMN 1 --- BRAND: FixItAll logo Short description: "Your smart
assistant for health, home and auto problems. Get instant solutions and
expert guidance."

Small social circular icons below.

COLUMN 2 --- QUICK LINKS: - Home - Categories - How It Works - Blog -
About Us

COLUMN 3 --- CATEGORIES: - Health - Automobile - Home Repairs -
Electronics - More

COLUMN 4 --- RESOURCES: - Guides - FAQs - Disclaimer - Privacy Policy -
Terms of Use

Additional SUPPORT column/links: - Contact Us - Feedback - Report an
Issue

Bottom divider and centered copyright: "© 2024 FixItAll. All rights
reserved."

Footer typography is small, clean, and spaced. Do not make the footer
visually dominant.

------------------------------------------------------------------------

# 4. PAGE 1 --- HOME PAGE

Route: / or /index.html

Purpose: Primary entry point. The central action is describing a
problem.

## Background

Dark --background with a very subtle blue-to-lavender/pink atmospheric
gradient around the hero.

## Header

Use GLOBAL HEADER.

## Hero

Centered.

Main title: "Diagnose Any Problem"

Subtitle: "Health, Home or Auto -- Get AI-powered solutions instantly"

Search/diagnosis input: Large horizontal input centered on page.
Placeholder: "Describe your problem..."

Right-side square blue search button with search icon.

Examples / popular searches underneath: Small pill tags: - AC not
cooling - Fever - Car won't start - Bike vibration - Water leak

Pills: - dark surface background - thin dark-slate border - compact -
rounded - small text.

## Browse by Category

Centered section title: "Browse by Category"

Five category cards shown horizontally: 1. Health --- heart/medical icon
--- pink/red 2. Automobile --- car icon --- blue 3. Home Repairs ---
house icon --- orange 4. Electronics --- device/electrical icon ---
green 5. More --- three-dot icon --- neutral gray

Each card: - dark surface background - thin dark-slate border - subtle
dark shadow - rounded corners - icon inside a soft colored area -
category label below - compact dimensions

## Trust/stat row

Four small metrics horizontally: - "100K+" / "Problems Solved" - "50+" /
"Expert Sources" - "24/7" / "AI Support" - "Trusted by" / "Millions"

Use tiny icons above/alongside each metric. Blue/green accents.

------------------------------------------------------------------------

# 5. PAGE 2 --- CATEGORY PAGE: HEALTH

Example route: /health/ /health/index.html

## Page background

Very subtle deep-pink gradient near the top/right, keeping contrast low.

## Breadcrumb

Top-left: "\< Back to Home"

Small text.

## Category heading

Pink heart icon inside pale pink square. Title: "Health" Subtitle:
"Select a common symptom or search your problem"

## Search

Horizontal search input: "Search health problems..." Search icon at
right.

## Popular Symptoms

Section title: "Popular Symptoms"

Grid of 8 compact cards, 4 columns x 2 rows on desktop:

Row 1: - Fever - Headache - Cough - Stomach Pain

Row 2: - Sore Throat - Back Pain - Vomiting - Chest Pain

Each card: - dark surface - thin dark-slate border - small centered
red/pink medical icon - symptom name underneath - rounded corners -
subtle hover state.

Bottom centered button: "View All Symptoms"

Button uses a dark-slate surface with a subtle border, compact.

------------------------------------------------------------------------

# 6. PAGE 3 --- PROBLEM LISTING PAGE: FEVER

Example route: /health/fever/

Top: Breadcrumb: "\< Back to Health"

Heading: "Fever"

Subtitle: "Find causes, solutions and when to seek help"

Main card/section title: "Common Causes"

List items in a vertically stacked dark surface card.

Items: 1. Common Cold / Viral Infection Description: "Most common cause
of fever."

2.  Flu (Influenza) Description: "Fever with body ache and fatigue."

3.  Dengue Description: "High fever with severe headache."

4.  Typhoid Description: "Prolonged fever with weakness."

5.  Other Causes Description: "Infections, medication, or other
    conditions."

Each row: - small colored icon at left - bold title - small gray
description - chevron/right arrow at far right - thin separator between
rows.

At bottom: Blue/deep-blue disclaimer banner: "Disclaimer: This is for
informational purposes only. Consult a doctor for medical advice."

The disclaimer should be visually obvious but not alarming.

------------------------------------------------------------------------

# 7. PAGE 4 --- PROBLEM DETAIL / DIAGNOSIS PAGE

Example route: /health/fever/diagnose/

Heading: "Fever -- Diagnosis Assistant"

Subtitle: "Answer a few questions to get possible causes"

## Progress indicator

Horizontal 5-step progress indicator: 1 --- active blue filled circle 2
3 4 5

Connecting line between circles. Active step blue, inactive steps use
the dark surface with gray-slate border.

## Question card

Dark surface card with subtle dark shadow/border.

Question: "Q1. How long have you had the fever?"

Radio options: - Less than 1 day - 1--3 days - 3--7 days - More than 7
days

Radio buttons are circular.

Bottom/right: Blue button: "Next Question →"

## Privacy/safety notice

Green soft banner below: "Your information is safe and anonymous."

Use green shield/check icon.

------------------------------------------------------------------------

# 8. PAGE 5 --- DIAGNOSIS RESULT PAGE

Example route: /health/fever/diagnose/result/

Heading: "Possible Causes"

Subtitle: "Based on your answers"

## Probability / ranking list

Four causes:

Common Cold / Viral Infection --- 60% Subtitle: "Most likely cause of
your symptoms."

Flu (Influenza) --- 25% Subtitle: "Possible cause."

Dengue --- 10% Subtitle: "Less likely but possible."

Other Causes --- 5% Subtitle: "Rare possibilities."

Use horizontal probability bars. Each bar should visually communicate
the percentage. The top item is visually strongest.

## Right-side information cards

GREEN card: Title: "What You Can Do"

Checklist: - Rest and stay hydrated - Drink warm fluids - Use
paracetamol for fever - Monitor your symptoms

RED card: Title: "When to See a Doctor"

Checklist/warnings: - Fever more than 3 days - Difficulty breathing -
High fever (above 103°F) - Severe weakness or dizziness

At bottom: Blue disclaimer: "Disclaimer: Not a substitute for
professional medical advice."

IMPORTANT: Do not make the health diagnosis look like a definitive
medical diagnosis. Use language such as "possible causes", "may be
associated with", and "seek professional care when appropriate."

------------------------------------------------------------------------

# 9. PAGE 6 --- CATEGORY PAGE: AUTOMOBILE

Example route: /automobile/ /automobile/index.html

Background: Very subtle deep-blue gradient.

Breadcrumb: "\< Back to Home"

Category heading: Blue car icon inside pale blue square.

Title: "Automobile"

Subtitle: "Select your vehicle type"

## Vehicle type cards

Three horizontally arranged cards: - Car - Bike - Scooter

Each card: - dark surface - thin dark-slate border - centered blue
vehicle illustration/icon - label underneath - rounded corners.

## Common Problems

Section title: "Common Problems"

Vertical list: - Engine won't start - Overheating - Strange Noises -
Poor Mileage - Warning Lights On

Each row: - blue icon at left - text - right chevron - thin separator.

Bottom: "View All Problems" light button.

------------------------------------------------------------------------

# 10. PAGE 7 --- BLOG / GUIDES PAGE

Route: /blog/ /guides/

Heading centered: "Latest Guides & Articles"

Subtitle: "Expert tips and helpful guides"

## Article grid

Six cards, 3 columns x 2 rows.

Example articles visible:

1.  Image: car/AC dashboard Title: "Why AC Is Not Cooling?" Category
    badge: "Home Repairs"

2.  Image: person working on car Title: "Top 10 Car Maintenance Tips"
    Category: "Automobile"

3.  Image: person resting / health Title: "How to Reduce Fever
    Naturally?" Category: "Health"

4.  Image: motorcycle Title: "Bike Chain Noise -- Causes & Fix"
    Category: "Automobile"

5.  Image: water heater/appliance Title: "Water Heater Not Working?"
    Category: "Home Repairs"

6.  Image: person with symptoms Title: "When to See a Doctor for Fever?"
    Category: "Health"

Cards: - image at top - rounded top corners - small title - category
pill/badge - compact dark-surface card - subtle dark border/shadow.

Bottom centered blue button: "View All Articles"

------------------------------------------------------------------------

# 11. PAGE 8 --- HOW IT WORKS / ABOUT

Route: /how-it-works/ /about/

Background: Very subtle deep-lavender/pink gradient.

Centered heading: "How It Works"

Subtitle: "Get solutions in 4 simple steps"

## Four steps horizontally

1.  Describe Icon: pencil/form Text: "Tell us your problem in your own
    words."

2.  Answer Icon: document/questionnaire Text: "Answer a few simple
    questions."

3.  Get Results Icon: person/diagnostic icon Text: "AI analyzes and
    finds possible causes."

4.  Take Action Icon: heart/check Text: "Follow recommendations and get
    better."

Each step: - large circular dark-surface/light-bordered icon - step
number/title - short explanatory sentence - equal width.

## Why Choose FixItAll?

Heading: "Why Choose FixItAll?"

Four benefits: - AI-Powered - Trusted Sources - Easy to Use - 24/7
Support

Use small colored icons and concise labels.

------------------------------------------------------------------------

# 12. PAGE RELATIONSHIP / NAVIGATION FLOW

The intended user journey in the supplied image is:

HOME \| v CATEGORY \| v PROBLEM LIST \| v PROBLEM DETAIL / DIAGNOSIS \|
v DIAGNOSIS RESULT

Separate but related navigation: HOME -\> AUTOMOBILE CATEGORY -\>
AUTOMOBILE PROBLEM HOME -\> BLOG / GUIDES HOME -\> HOW IT WORKS

Footer is shared across every page.

Health example: Home -\> Health -\> Fever -\> Fever Diagnosis Assistant
-\> Possible Causes / Results

Automobile example: Home -\> Automobile -\> Car/Bike/Scooter -\> Common
Problem -\> Troubleshooting/Diagnosis

------------------------------------------------------------------------

# 13. MPA ROUTING RECOMMENDATION

Use clean, descriptive URLs:

/ /health/ /health/fever/ /health/fever/diagnose/
/health/fever/diagnose/result/

/automobile/ /automobile/car/ /automobile/car/engine-wont-start/
/automobile/bike/ /automobile/scooter/

/home-repairs/ /home-repairs/ac-not-cooling/ /home-repairs/water-leak/

/electronics/ /electronics/laptop/ /electronics/phone/

/blog/ /blog/article-slug/

/how-it-works/ /about/ /contact/ /privacy/ /terms/ /disclaimer/

------------------------------------------------------------------------

# 14. REUSABLE UI COMPONENTS

Build these once and reuse them:

1.  Header
2.  Footer
3.  SearchBar
4.  Breadcrumb
5.  CategoryCard
6.  SymptomCard
7.  ProblemListItem
8.  DiagnosisQuestionCard
9.  ProgressIndicator
10. ResultProbabilityBar
11. AdviceCard
12. WarningCard
13. ArticleCard
14. IconBadge
15. PrimaryButton
16. SecondaryButton
17. Tag/Pill
18. DisclaimerBanner
19. StatItem

Do NOT duplicate slightly different versions of the same component
unless there is a genuine functional reason.

------------------------------------------------------------------------

# 15. SPACING SYSTEM

Use a consistent spacing scale:

4px 8px 12px 16px 20px 24px 32px 40px 48px 64px

Typical: - Header horizontal padding: 24--40px - Main section vertical
padding: 40--64px - Card padding: 16--24px - Grid gap: 12--20px - Hero
spacing: 16--24px - Page title to subtitle: 6--10px

Avoid excessive empty vertical space on desktop.

------------------------------------------------------------------------

# 16. RESPONSIVE BEHAVIOR

Desktop: - Max content width around 1180--1240px. - Category cards
horizontal. - Diagnosis result can use two columns. - Article cards use
3 columns. - How-it-works uses 4 columns. - Health symptoms use 4
columns.

Tablet: - Reduce columns. - Maintain comfortable card widths.

Mobile: - Header becomes hamburger/menu. - Hero title becomes
approximately 26--30px. - Search input becomes full width. - Category
cards become 2 columns or horizontal scroll where appropriate. - Health
symptom cards become 2 columns. - Article cards become 1 column. -
Diagnosis result two-column layout becomes one column. - How-it-works
becomes vertical. - Footer columns stack. - Preserve all
functionality. - Never allow horizontal overflow.

------------------------------------------------------------------------

# 17. ICON STYLE

Use a consistent modern line-icon library such as Lucide Icons.

Suggested icons: - Health: HeartPulse / Heart - Automobile: Car - Bike:
Bike - Scooter: Scooter or suitable motorcycle icon - Home: House -
Electronics: Smartphone / Monitor / Cpu - Search: Search - Back:
ChevronLeft - Forward: ChevronRight - Diagnosis: ClipboardCheck /
Stethoscope - Safety: ShieldCheck - Warning: TriangleAlert - Articles:
FileText - How It Works: Pencil, ClipboardList, Brain/Scan,
HeartHandshake - Stats: Activity, Users, Clock, ShieldCheck

Icons should be small and clean, not oversized emoji.

------------------------------------------------------------------------

# 18. IMAGE GUIDELINES

For article cards, use clean realistic editorial images with rounded
corners.

Do not use random decorative stock images for the rest of the UI.

Category icons should preferably be vector icons, not photographs.

The reference image uses compact illustrations/icons and minimal
imagery.

------------------------------------------------------------------------

# 19. INTERACTION / MICRO-UI

Buttons: - Hover: slightly darker blue. - Active: slightly
darker/pressed. - Transition: 150--200ms.

Cards: - Hover: tiny elevation increase and/or border color change. - Do
not use dramatic transforms.

Inputs: - Focus ring in soft primary blue. - Clear placeholder text. -
Search button remains visually obvious.

Links: - Dark navy normally. - Blue on hover.

------------------------------------------------------------------------

# 20. SEO REQUIREMENTS

Because this is intended to be a public SEO-focused MPA:

Each page must have: - Unique
```{=html}
<title>
```
-   Unique meta description
-   Canonical URL
-   Semantic H1
-   Logical H2/H3 structure
-   Descriptive URL
-   Internal links to related problems
-   Breadcrumb navigation
-   Open Graph metadata
-   Relevant structured data where appropriate
-   robots.txt
-   sitemap.xml

Do not create keyword stuffing.

Use natural search intent in headings and body copy.

Examples: - "Why is my AC not cooling?" - "Common causes of a car that
won't start" - "What can cause a fever?" - "What to check when a bike
makes a clicking noise?"

------------------------------------------------------------------------

# 21. ACCESSIBILITY

-   Use semantic HTML.
-   Every form input needs a label.
-   Images need useful alt text.
-   Buttons must be keyboard accessible.
-   Visible focus states.
-   Sufficient text/background contrast.
-   Do not rely on color alone to communicate urgency or status.
-   Radio buttons and form controls should have large enough click
    targets.

------------------------------------------------------------------------

# 22. IMPORTANT IMPLEMENTATION RULES FOR THE CODING MODEL

1.  Treat this document as the visual source of truth.
2.  Do not redesign the interface.
3.  Do not replace the MPA architecture with a SPA.
4.  Keep the same header and footer on every page.
5.  Keep the same typography and spacing system.
6.  Keep category colors consistent.
7.  Use reusable components/templates.
8.  Do not add unnecessary gradients, glassmorphism, huge shadows, or
    excessive animations.
9.  Keep the interface lightweight and fast.
10. Keep desktop proportions close to the reference.
11. Make mobile responsive without changing the fundamental design.
12. Use real semantic content rather than placeholder lorem ipsum.
13. Never make health pages claim to provide a definitive medical
    diagnosis.
14. The health result page must say "possible causes" or equivalent.
15. Keep the main action obvious: describe/search a problem.
16. Internal links should connect categories -\> problems -\> diagnosis
    -\> related guides.
17. Do not modify unrelated files when implementing a requested page.
18. Before creating a new component, check whether an existing reusable
    component can be used.
19. Do not duplicate CSS for identical UI.
20. Preserve existing design tokens.

------------------------------------------------------------------------

# 23. BUILD ORDER

Implement in this order:

PHASE 1: - Global CSS/theme - Header - Footer - Buttons - Cards - Search
component - Typography

PHASE 2: - Home page

PHASE 3: - Health category - Fever problem page - Diagnosis page -
Diagnosis results

PHASE 4: - Automobile category - Vehicle/problem pages

PHASE 5: - Home Repairs - Electronics

PHASE 6: - Blog/guides - How It Works - About - Contact - Legal pages

PHASE 7: - SEO metadata - Sitemap - Robots - Structured data -
Performance - Accessibility - Mobile polish

------------------------------------------------------------------------

# 24. DESIGN SUMMARY FOR QUICK MODEL CONTEXT

If context is limited, preserve these facts above all else:

FixItAll is a modern troubleshooting MPA for Health + Automobile + Home
Repairs + Electronics.

Visual identity: - White/light background - Dark navy text - Primary
blue #2563EB - Soft pastel category colors - Inter/system sans-serif -
Rounded cards - 1px light borders - Very subtle shadows - Compact
SaaS-like UI - Generous whitespace - Small clean line icons - Blue
filled primary buttons

Homepage: "Diagnose Any Problem" + "Describe your problem..." search +
popular search pills + category cards + trust/stat row

Health: Health -\> Symptoms -\> Problem -\> Diagnosis Questions -\>
Possible Causes

Automobile: Automobile -\> Car/Bike/Scooter -\> Common Problems -\>
Troubleshooting

Blog: 3-column article grid.

How It Works: 4-step horizontal process.

All pages: same header + same footer.

The supplied reference image is a sitemap/visual design reference, not a
literal screenshot to reproduce pixel-for-pixel. Use the written
dimensions, spacing, hierarchy, colors, and component rules in this
document to create the closest possible implementation.
