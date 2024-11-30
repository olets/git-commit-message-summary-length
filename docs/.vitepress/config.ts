import { defineConfig } from "vitepress";
import { createTitle } from "vitepress/dist/client/shared.js";
import markdownItFootnote from "markdown-it-footnote";

const TITLE = "git-commit-message-summary-length";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformPageData(pageData, ctx) {
    const description =
      pageData.frontmatter?.description ?? ctx.siteConfig.site?.description;

    const title = createTitle(ctx.siteConfig.site, pageData);

    pageData.frontmatter.head ??= [];

    pageData.frontmatter.head.push(
      [
        "meta",
        {
          name: "og:title",
          content: title,
        },
      ],
      [
        "meta",
        {
          name: "twitter:title",
          content: title,
        },
      ]
    );

    if (description) {
      pageData.frontmatter.head.push(
        [
          "meta",
          {
            name: "og:description",
            content: description,
          },
        ],
        [
          "meta",
          {
            name: "twitter:description",
            content: description,
          },
        ]
      );
    }
  },
  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-title",
        content: "git-commit-message-summary-length",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],

    // social metas
    // og:title and og:description are set dynamically in transformPageData
    [
      "meta",
      {
        property: "og:url",
        content: "https://git-commit-message-summary-length.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: TITLE }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://git-commit-message-summary-length.olets.dev/git-commit-message-summary-length-card.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    // twitter:title and twitter:description are set dynamically in transformPageData
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content:
          "https://git-commit-message-summary-length.olets.dev/git-commit-message-summary-length-card.png",
      },
    ],

    // Analytics
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "ERUTVFVO",
        "data-spa": "auto",
        defer: "true",
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],

    // Font
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  title: TITLE,
  description:
    "Cross-repo customizable Git activity log dotfile with CLI for viewing and filtering entries",
  // https://vitepress.dev/reference/site-config#titletemplate
  titleTemplate: `:title :: ${TITLE}`, // to change delimiter from default pipe to play nice with Fathom event id format. see also homepage frontmatter
  // https://vitepress.dev/reference/default-theme-last-updated
  lastUpdated: true,
  markdown: {
    externalLinks: {
      class: "vp-external-link-icon",
      target: "_self",
    },
    config: (md) => {
      md.use(markdownItFootnote);
    },
    theme: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
  },
  srcExclude: ["vitepressignore"],
  sitemap: {
    hostname: "https://git-commit-message-summary-length.olets.dev",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern:
        "https://github.com/olets/git-commit-message-summary-length/edit/main/docs/:path",
    },

    logo: "/images/git-commit-message-summary-length-logo.png",

    nav: [
      {
        text: "Source, Changelog, License",
        link: "https://github.com/olets/git-commit-message-summary-length/",
        target: "_self",
      },
      {
        text: "olets.dev",
        link: "https://olets.dev",
        target: "_self",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      { text: "Overview & Usage", link: "/" },
      { text: "Installation", link: "/installation" },
      { text: "Examples", link: "/examples" },
      {
        text: "Options",
        link: "/options",
      },
      { text: "Contributing", link: "/contributing" },
    ],
  },
});
