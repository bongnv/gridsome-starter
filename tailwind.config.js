module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["src/**/*.js", "src/**/*.vue"],
  },
};
