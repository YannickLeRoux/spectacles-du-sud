import Typography from "typography";
// import sutroTheme from 'typography-theme-sutro';

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Gloria Hallelujah',
      styles: [
        '400',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '100',
        '300',
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
});

export default typography;