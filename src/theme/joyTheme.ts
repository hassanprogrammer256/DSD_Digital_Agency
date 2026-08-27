import { extendTheme } from "@mui/joy/styles";

// Joy's extendTheme() eagerly decomposes every palette color into RGB channels at
// construction time and throws ("MUI: Unsupported color") if given a var(--...) string
// instead of a real color — so colorSchemes here MUST hold literal hex, unlike
// theme/tokens.ts and index.css which are var()-driven throughout. This is a real, verified
// runtime crash, not a style preference — see library-docs.md and progress-tracker.md.
//
// defaultMode stays "light" forever (main.tsx) and is never toggled — these literal values
// are only what Joy needs to construct its internal palette; they do NOT track this site's
// real light/dark toggle. Any Joy component whose color must actually track the toggle (the
// accent CTA buttons) gets an explicit `sx` override pointing at the live CSS variables
// instead — see CtaButton.tsx.
const lightPalette = {
  primary: { 500: "#123B8C", 600: "#0B2760", softBg: "#E8EEFB" },
  danger: { 500: "#E31E2D", 600: "#A9121E", softBg: "#FDEAEB" },
  success: { 500: "#1E9E5A", softBg: "#E3F7EC" },
  warning: { 500: "#C9821D", softBg: "#FBEEDC" },
  neutral: { softBg: "#F5F7FB" },
};

const darkPalette = {
  primary: { 500: "#4C7FE0", 600: "#2C56B0", softBg: "#16213A" },
  danger: { 500: "#F2434C", 600: "#C22530", softBg: "#33161A" },
  success: { 500: "#3ECB84", softBg: "#12291F" },
  warning: { 500: "#E3A23F", softBg: "#33260F" },
  neutral: { softBg: "#1B2540" },
};

export const joyTheme = extendTheme({
  fontFamily: {
    body: "var(--font-sans)",
    display: "var(--font-display)",
  },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  components: {
    JoyFormControl: {
      styleOverrides: {
        root: {
          "--FormLabel-asteriskColor": "var(--color-accent)",
        },
      },
    },
  },
});
