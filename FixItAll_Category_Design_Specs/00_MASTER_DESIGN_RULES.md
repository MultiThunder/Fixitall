# FixItAll — Master Design Rules

## Purpose
Every category page is a visual variation of the same approved FixItAll Health-page template. Do NOT invent a new layout per category.

## Visual direction
- Professional modern SaaS utility website.
- Clean, premium, trustworthy.
- Use the same layout rhythm as the approved Health page.
- No giant empty spaces.
- No excessive gradients, glassmorphism, shadows, or rounded cards.
- Do not replace approved illustrations with emojis or random icon substitutes.

## Desktop layout
- Full-width top navigation.
- Main content max-width: 1280px, centered.
- Horizontal padding: 48px desktop, 24px tablet, 16px mobile.
- Use an 8px spacing system.

## Header
Left: FixItAll logo. Navigation: Home | Health | Automobile | Home Repairs | Electronics | Blog | How It Works. Right: theme toggle + Login. Height approximately 70px. Active category gets subtle accent underline. Do not alter logo or functionality.

## Universal hero layout
TWO-COLUMN composition.

LEFT (~62%):
1. Breadcrumb
2. Large category headline
3. Short supporting description
4. Search input + attached Search button
5. Suggested search chips

RIGHT (~38%):
ONE unified information/benefit card containing three short statements plus a category illustration.

CRITICAL: Never split the right area into three floating cards. Illustration must stay inside the card and never overlap text. Hero must not be excessively tall.

## Notice banner
Immediately after hero with compact spacing.

## Popular problems
Heading left, View all link right. Desktop: five consistent horizontal cards where possible. Each card: illustration/icon, title, short descriptor, subtle arrow.

## Dark mode
Dark mode is NOT a redesign. Keep identical layout, spacing, hierarchy and functionality. Adapt only colors. Suggested palette: background #0F1726, elevated #182233, cards #1B2638, borders #2B3A52, primary text #F1F5F9, secondary #AAB7C8, accent #5B7CFA. Avoid pure black.

## AI coding rules
Reuse shared components and CSS variables. Do not rewrite unrelated files, routes or functionality. If assets exist in /assets, use them. Do not substitute approved illustrations with emojis, CSS drawings or generated SVGs. Match desktop first, then responsive behavior.
