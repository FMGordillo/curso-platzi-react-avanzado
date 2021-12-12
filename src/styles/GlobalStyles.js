import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/*
  10. Scrollbars upgraded
*/
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: gray orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: gray;
}

*::-webkit-scrollbar-thumb {
  background-color: hsl(0deg, 0%, 70%);
  border-radius: 20px;
  border: 3px solid hsl(0deg, 0%, 40%);
}

body {
  background: black;
  color: hsl(50deg, 0%, 90%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 500px;
  overscroll-behavior: none;
  width: 100%;
  margin: 0 auto;

}
main {
  box-shadow: 0 0 10px hsla(0deg, 0%, 0%, .05);
  overflow-x: hidden;
  min-height: 100%;
  padding-bottom: 10px;
}
`
