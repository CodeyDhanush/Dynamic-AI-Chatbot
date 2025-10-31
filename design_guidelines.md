# Dynamic AI Chatbot - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid - Drawing inspiration from ChatGPT's clean conversational interface + Linear's modern aesthetic + Material Design system foundations

**Justification:** This chatbot requires both exceptional usability (productivity tool) and engaging visual design (conversational experience). We'll combine ChatGPT's minimalist chat patterns with Linear's sophisticated color treatment and polished interactions.

**Core Design Principles:**
- Clarity over decoration - every element serves the conversation
- Responsive intelligence - UI adapts to conversation context
- Trust through polish - premium feel inspires confidence in AI capabilities
- Data visibility - analytics feel integrated, not separate

---

## Color Palette

### Dark Mode (Primary)
- **Background Base:** 222 15% 8% (deep charcoal)
- **Background Elevated:** 222 15% 12% (chat container)
- **Background Interactive:** 222 15% 16% (hover states)
- **Primary Brand:** 220 90% 56% (vibrant blue for AI responses, CTAs)
- **Primary Hover:** 220 90% 64%
- **User Message:** 142 76% 36% (emerald green for user bubbles)
- **Sentiment Positive:** 142 76% 36% (emerald)
- **Sentiment Negative:** 0 84% 60% (warm red)
- **Sentiment Neutral:** 220 14% 71% (cool gray)
- **Text Primary:** 220 14% 96%
- **Text Secondary:** 220 9% 71%
- **Text Muted:** 220 9% 46%
- **Border Subtle:** 220 14% 20%
- **Border Default:** 220 14% 24%

### Light Mode
- **Background Base:** 0 0% 100%
- **Background Elevated:** 220 14% 98%
- **Primary Brand:** 220 90% 56%
- **User Message:** 142 71% 45%
- **Text Primary:** 222 15% 12%
- **Text Secondary:** 220 9% 36%

---

## Typography

**Font Stack:**
- **Primary:** Inter (via Google Fonts) - clean, modern, excellent readability
- **Monospace:** JetBrains Mono - for code blocks in AI responses

**Scale & Hierarchy:**
- **Hero/Dashboard Title:** text-4xl font-bold tracking-tight (2.25rem)
- **Section Headers:** text-2xl font-semibold (1.5rem)
- **Chat Messages:** text-base font-normal leading-relaxed (1rem, 1.625 line-height)
- **Metadata/Timestamps:** text-sm font-medium text-secondary (0.875rem)
- **Analytics Labels:** text-xs font-semibold uppercase tracking-wide (0.75rem)
- **Button Text:** text-sm font-semibold (0.875rem)

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- **Component Padding:** p-4 for cards, p-6 for containers
- **Stack Spacing:** space-y-4 for tight groups, space-y-6 for section spacing
- **Chat Bubbles:** px-4 py-3 for message padding
- **Page Margins:** px-6 md:px-8 lg:px-12

**Grid System:**
- **Dashboard:** Two-column (lg:grid-cols-[1fr_320px]) - main chat + sidebar
- **Analytics:** Three-column grid (md:grid-cols-2 lg:grid-cols-3) for metric cards
- **Mobile:** Full-width stack (grid-cols-1)

**Container Widths:**
- **Chat Container:** max-w-4xl mx-auto (optimal reading width)
- **Dashboard:** max-w-7xl mx-auto
- **Analytics Cards:** No max-width (grid-controlled)

---

## Component Library

### Navigation
- **Top Bar:** Fixed header with glassmorphism (backdrop-blur-xl bg-background/80)
- Logo left, navigation center, user profile right
- Height: h-16, border-b with subtle border color
- **Mobile:** Slide-out drawer menu with overlay

### Chat Interface
- **Message Bubbles:**
  - **User:** Rounded-2xl, emerald background, white text, max-w-[80%] ml-auto
  - **AI:** Rounded-2xl, elevated background, primary text, max-w-[80%] mr-auto
  - **Typing Indicator:** Three animated dots (scale pulse) in AI bubble style
  
- **Input Area:**
  - Sticky bottom (sticky bottom-0), elevated background with border-t
  - Textarea with rounded-xl, focus:ring-2 ring-primary
  - Send button: rounded-full w-10 h-10, primary background, white arrow icon
  - Character count and sentiment indicator below input

- **Chat Header:**
  - Conversation title with edit capability
  - Detected sentiment badge (rounded-full px-3 py-1, color-coded)
  - Quick actions: Export, Clear, Settings (icon buttons)

### Analytics Dashboard
- **Metric Cards:**
  - Rounded-xl with elevated background
  - Large number display (text-3xl font-bold) with trend indicator
  - Small chart/sparkline below number
  - Icon in corner (w-10 h-10 rounded-lg with tinted background)

- **Conversation Stats:**
  - Bar chart showing message frequency over time
  - Sentiment distribution pie chart
  - Response time metrics with progress bars
  - Most common intents as tag cloud

- **Activity Timeline:**
  - Vertical timeline with dots and connecting lines
  - Recent conversations with preview
  - Click to load conversation

### Forms & Inputs
- **Text Input:** rounded-lg border-2 focus:border-primary px-4 py-2.5
- **Dropdown:** Custom select with chevron icon, rounded-lg
- **Toggle:** Switch component for settings (w-11 h-6 rounded-full)
- **Buttons:**
  - **Primary:** rounded-lg px-6 py-2.5 bg-primary text-white font-semibold
  - **Secondary:** rounded-lg px-6 py-2.5 border-2 bg-transparent
  - **Icon:** rounded-full w-10 h-10 centered icon

### Data Display
- **Conversation List:**
  - Card-based layout with hover lift effect (hover:-translate-y-0.5)
  - Preview of last message (text-sm text-secondary truncate)
  - Timestamp and sentiment badge
  - Unread indicator (w-2 h-2 rounded-full bg-primary)

- **Code Blocks (in AI responses):**
  - Dark background with syntax highlighting
  - Copy button in top-right corner
  - Language badge in bottom-left

### Overlays
- **Modal:** Max-w-2xl rounded-2xl with backdrop blur
- **Toast Notifications:** slide-in-right from bottom-right corner
- **Tooltips:** rounded-lg px-3 py-1.5 text-sm with arrow

---

## Images

**Hero Section:**
- **Landing/Welcome Screen:** 
  - Abstract 3D gradient illustration showing conversation bubbles or AI neural network
  - Dimensions: Full viewport width, 60vh height
  - Style: Modern, colorful gradients (blue-to-purple), floating geometric shapes
  - Placement: Top of page, text overlay with "Start Intelligent Conversations"

**Dashboard Visuals:**
- **Empty State Illustration:** Friendly robot character with speech bubble when no conversations exist
- **Analytics Icons:** Custom iconography for metrics (message count, sentiment, response time)
- **Avatar Placeholders:** Gradient circles for user/AI avatars (user: emerald, AI: blue)

**Decorative Elements:**
- Subtle dot grid pattern in background (opacity-5)
- Gradient orbs in analytics section backgrounds (blur-3xl)
- No hero image on dashboard - focus on functional interface

---

## Animations

**Minimal, Purposeful Motion:**
- Message send: slide-up with fade (duration-200)
- Typing indicator: pulse animation on dots
- Page transitions: fade (duration-150)
- Hover effects: scale-[1.02] or lift (-translate-y-0.5) on cards
- **No:** scroll-triggered animations, parallax, or loading spinners (use skeleton instead)

---

## Accessibility Notes

- Maintain 4.5:1 contrast ratio on all text
- Focus visible states with ring-2 ring-primary
- ARIA labels on all icon buttons
- Keyboard navigation fully supported (Tab, Enter, Escape)
- Sentiment indicators have text labels, not just colors
- Screen reader announcements for new AI messages