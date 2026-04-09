# Profile Card Builder

A frontend task built as part of a technical interview. This project features a multi-card generation system with a responsive 50/50 layout.

## How to Run
1. Open `index.html` directly in the browser to view the Vanilla JS implementation.
2. For the React part: open `react/ProfileCard.jsx` to view the component structure or integrate it into a React development environment (e.g., Vite/Webpack).

## Tech Used
- **HTML5**: Semantic structure and BEM naming convention.
- **CSS3 / SCSS**: Modular architecture with responsive mixins and CSS Grid.
- **Vanilla JavaScript**: Dynamic DOM manipulation, array-based state management, and field validation.
- **React**: Functional component implementation for the ProfileCard.

## Time Taken
~60 minutes

## What I’d Improve
- **Persistence**: Implement `localStorage` to save the `generatedCards` array so data persists across browser refreshes.
- **Testing**: Add unit tests (Jest) for form validation functions and component rendering.
- **Accessibility**: Enhance keyboard navigation and add `aria-live` regions for dynamic content updates.
- **Animations**: Add entrance animations for new cards added to the container.
