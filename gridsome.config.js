// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "*.md",
        typeName: "BlogPage",
        index: ["index", "readme"],
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
        },
      },
    },

    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "blog/**/*.md",
        typeName: "BlogPost",
        index: ["index", "readme"],
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },

    {
      use: "gridsome-plugin-tailwindcss",
    },
  ],
}
