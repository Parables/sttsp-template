module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ["./src/**/*.svelte", "./public/*.html"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
