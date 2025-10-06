### Project: Meeting Example
Your goal is to implement UI pages based on a Figma design provided to you. Please follow the standards below and deliver a runnable, clean, and maintainable result.

### Requirements
- Node.js: LTS (recommended: 18 or 20)
- Package manager: one of `npm`, `yarn`, or `pnpm`
- Modern browsers for testing (Chrome/Edge/Firefox)
- Figma account to view and export assets

### Quick Start
- If this repo already has a `package.json`:
  1) Install dependencies:
  ```bash
  npm install
  # or
  yarn
  # or
  pnpm install
  ```
  2) Run development server:
  ```bash
  npm start
  ```
  3) Build production:
  ```bash
  npm run build
  ```

### Required and Suggested Packages
- UI library: `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled` (required)
- Routing: `react-router-dom` (required)
- Forms/Validation: `formik`, `yup` (required)


### Development Standards
- UI must be implemented using MUI only (no Tailwind, no other UI frameworks).
- Create and use a centralized MUI theme (palette, typography, spacing) where appropriate.
- Responsiveness: support 768px, 1024px, and 1440px widths.
- Design fidelity: match Figma spacing, typography, and colors precisely.
- Routing: use `react-router-dom` (v6) for all navigation.
- Forms: use `formik` + `yup` for form state and validation.
- State and architecture: small, single-responsibility, testable components.


### Working with Figma
- Use Inspect to extract sizes, spacing, typography, and colors.
- Export icons as SVG and use them as React components.
- Web-optimize images (format, size) and consider lazy loading where appropriate.
- Implement explicit Hover/Active/Disabled states matching Figma.

### Acceptance Criteria
- Only MUI is used for UI components, icons and styling.
- A custom-designed Login page exists, implemented with MUI.
- All forms use `formik` with `yup` validation (inline errors, disabled submit on invalid).
- Visual implementation closely matches Figma (±2px acceptable).
- Reusable components and short docs or stories.
- Responsive at the listed breakpoints.
- No console errors and no TypeScript warnings.
- Lint passes with no errors.

### Timeline
- Project deadline: 4 days from assignment.

### Tasks
receives one or more Figma pages. Additionally, a custom Login page (own design) must be implemented with MUI.

- Task 1: Implement the custom Login page
  - Route: `/login` via `react-router-dom`
  - Use MUI components only; apply theme tokens consistently
  - Form with `formik` + `yup` (email/username + password, show validation errors)
  - Show loading/disabled state on submit; basic success/failure handling
  - Ensure responsiveness at 768/1024/1440

- Task 2: Implement the assigned primary Figma page
  - Set up the route (e.g., `/`)
  - Implement layout with MUI Grid/Box and shared Header/Footer
  - Extract and apply design tokens (colors, typography, spacing)
  - Build needed reusable components (e.g., Button variants, Input, Tag, Avatar)
  - Handle interaction states: Hover/Active/Focus/Disabled
  - Ensure responsiveness and a11y similar to the login page



Final delivery should include:
- PR folder targeting `main.zip`
- Short description of work done + screenshots


Good luck!


