# Interactive rating component 📈

This project was created based on a Frontend Mentor [https://www.frontendmentor.io/] challenge. The layout and design idea come from Frontend Mentor, while the code implementation is my own.

## 📦 About the project
<details>
  <summary><b>index.html</b></summary> 
  
  - Semantic HTML5
  
  - BEM (Block Element Modifier)
    
  - Forms and Input Handling
    
  - Accessibility
</details>
<details>
  <summary><b>main.scss</b></summary> 
  
  - Modular Architecture: Used @import to separate concerns into _resets.scss, _variables.scss, and main styles, making the codebase maintainable and organized.
  - BEM Methodology: Strictly followed Block Element Modifier naming (e.g., .rating__submit-btn), ensuring low selector specificity and avoiding style conflicts.
  - Advanced Selectors: Implemented the CSS Adjacent Sibling Selector (input:checked + label) to manage the interactive rating states purely through CSS, reducing JavaScript dependency.
  - Variables: Centralized colors, font sizes, and weights for easy theme management.
  - Mixins: Created a @include flexBox mixin to reuse centering logic and keep the code DRY (Don't Repeat Yourself).
  - Functions & Maps: Utilized map-get() for font-weight management and rgba() with variables for subtle transparency effects.
  - Used Flexbox for layout alignment.
  - Used appearance: none to hide default browser radio buttons.
  - Applied transition properties for smooth hover and active state effects, enhancing the interactive feel.
  - Centered absolute elements using the left: 50% / transform: translateX(-50%) technique.

</details>

<details>
  <summary><b>app.js</b></summary> 

  - Event Delegation: Implemented efficient event handling by attaching a single listener to the ratingRormInputsContainer. It captures the selected value only when a radio input changes, reducing memory usage.
  - State Management: Used a userRating variable to track the user's selection across different interaction stages (selection vs. submission).
  - Conditional Submission: Prevents the form from submitting if no rating is selected, triggering a user-friendly error message.
  - Timer Management: Implemented setTimeout combined with clearTimeout to ensure the error message disappears automatically after 3 seconds, while preventing "timer overlapping" during multiple clicks.
  - Dynamically updates the textContent of the "Thank You" state to reflect the specific rating chosen by the user.
  - Controls UI flow by toggling the .hide class to switch between the rating and success views.
  - Event Handling: Switched to the change event for radio inputs to ensure the logic only executes when a new value is actually selected.

</details>

## 🚀 How It Can Be Improved?
While the current version is fully functional, here are some planned improvements and professional enhancements:

- Keyboard Accessibility: Add custom :focus-visible styles for the rating circles so that users navigating via the Tab key can clearly see which number is currently focused.
- Animated State Transitions: Replace the abrupt display: none toggle with CSS animations (e.g., opacity and transform: scale) to create a smooth fading effect when switching between the Rating and Thank You cards.
- Feedback Persistence: Implement localStorage to remember the user's rating if they accidentally refresh the page before submitting.
- Micro-interactions: Add a "pop" scale animation when a user clicks a rating number to provide immediate visual confirmation of their choice.

## 🍿 Video
https://github.com/user-attachments/assets/f9226b63-b4d2-4dea-bede-007169be99d7
