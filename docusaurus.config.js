// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { remarkCodeHike } = require("@code-hike/mdx");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Axie Studio Documentation",
  tagline:
    "Axie Studio is a powerful low-code platform for building RAG and multi-agent AI applications.",
  favicon: "img/favicon.ico",
  url: process.env.DOCS_URL || "https://docs.axiestudio.se",
  baseUrl: process.env.BASE_URL || process.env.DOCS_BASE_URL || "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",
  organizationName: "axie-studio",
  projectName: "axie-studio",
  trailingSlash: false,
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@550;600&display=swap",
      },
    },
    ...(isProduction
      ? [
          // Ketch consent management script
          {
            tagName: "script",
            attributes: {},
            innerHTML: `!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=document.createElement("script");e.type="text/javascript",e.src="https://global.ketchcdn.com/web/v3/config/datastax/langflow_org_web/boot.js",e.defer=e.async=!0,document.getElementsByTagName("head")[0].appendChild(e)}();`,
          },
          // Ketch jurisdiction dynamic link and GA4 consent tracking
          {
            tagName: "script",
            attributes: {
              defer: "true",
            },
            innerHTML: `
          ;(function () {
            const onKetchConsentGtagTrack = (consent) => {
              if (window.gtag &&
                  consent.purposes &&
                  'analytics' in consent.purposes &&
                  'targeted_advertising' in consent.purposes
              ) {
                const analyticsString = consent.purposes.analytics === true ? 'granted' : 'denied'
                const targetedAdsString = consent.purposes.targeted_advertising === true ? 'granted' : 'denied'
                const gtagObject = {
                  analytics_storage: analyticsString,
                  ad_personalization: targetedAdsString,
                  ad_storage: targetedAdsString,
                  ad_user_data: targetedAdsString,
                }
                window.gtag('consent', 'update', gtagObject)
              }
            }
            if (window.ketch) {
              window.ketch('on', 'consent', onKetchConsentGtagTrack)
            }
          })()
        `,
          },
        ]
      : []),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: process.env.DOCS_ROUTE_BASE_PATH || "/", // Serve the docs at the site's root or custom path
          sidebarPath: require.resolve("./sidebars.js"), // Use sidebars.js file
          sidebarCollapsed: true,
          beforeDefaultRemarkPlugins: [
            [
              remarkCodeHike,
              {
                theme: "github-dark",
                showCopyButton: true,
                lineNumbers: true,
              },
            ],
          ],
        },
        sitemap: {
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap
          // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
          lastmod: "datetime",
          changefreq: null,
          priority: null,
          ignorePatterns: ["/preferences"],
        },
        gtag: {
          trackingID: "G-SLQFLQ3KPT",
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./css/custom.css"),
            require.resolve("./css/docu-notion-styles.css"),
            require.resolve(
              "./css/gifplayer.css"
              //"./node_modules/react-gif-player/dist/gifplayer.css" // this gave a big red compile warning which is seaming unrelated "  Replace Autoprefixer browsers option to Browserslist config..."
            ),
          ],
        },
      }),
    ],
  ],
  plugins: [
    ["docusaurus-node-polyfills", { excludeAliases: ["console"] }],
    "docusaurus-plugin-image-zoom",
    ["./src/plugins/segment", { segmentPublicWriteKey: process.env.SEGMENT_PUBLIC_WRITE_KEY, allowedInDev: true }],
    ["./src/plugins/scroll-tracking", {
      segmentPublicWriteKey: process.env.SEGMENT_PUBLIC_WRITE_KEY,
      allowedInDev: true,
      selectors: [
        {
          selector: 'h1, h2, h3, h4, h5, h6',
          eventName: 'Docs.axiestudio.com - Heading Viewed',
          properties: {
            element_type: 'heading'
          }
        },
        {
          selector: '.ch-codeblock',
          eventName: 'Docs.axiestudio.com - Codeblock Viewed',
          properties: {
            element_type: 'code',
            language: 'helper:codeLanguage'
          }
        }
      ]
    }],
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          // Support slug-based routing for multi-tenant scenarios
          if (process.env.ENABLE_SLUG_ROUTING === 'true') {
            return [
              `/:slug${existingPath}`, // Support /:slug/docs/... routing
              `/:slug/docs${existingPath}`, // Support /:slug/docs/... routing
            ];
          }
          return undefined; // Return undefined if no redirects are needed
        },
        redirects: [
          {
            to: "/",
            from: [
              "/whats-new-a-new-chapter-axiestudio",
              "/👋 Welcome-to-Axie-Studio",
              "/getting-started-welcome-to-axiestudio",
              "/guides-new-to-llms",
            ],
          },

          {
            to: "/get-started-quickstart",
            from: "/getting-started-quickstart",
          },
          {
            to: "concepts-overview",
            from: [
              "/workspace-overview",
              "/365085a8-a90a-43f9-a779-f8769ec7eca1",
              "/My-Collection",
              "/workspace",
              "/settings-project-general-settings",
            ],
          },
          {
            to: "/concepts-components",
            from: ["/components", "/components-overview"],
          },
          {
            to: "/configuration-global-variables",
            from: "/settings-global-variables",
          },
          {
            to: "/concepts-playground",
            from: [
              "/workspace-playground",
              "/workspace-logs",
              "/guides-chat-memory",
            ],
          },
          {
            to: "/data-types",
            from: ["/guides-data-message", "/configuration-objects"],
          },
          {
            to: "/blog-writer",
            from: [
              "/starter-projects-blog-writer",
              "/tutorials-blog-writer",
            ],
          },
          {
            to: "/memory-chatbot",
            from: [
              "/starter-projects-memory-chatbot",
              "/tutorials-memory-chatbot",
            ],
          },
          {
            to: "/document-qa",
            from: [
              "/starter-projects-document-qa",
              "/tutorials-document-qa",
            ],
          },
          {
            to: "/simple-agent",
            from: [
              "/math-agent",
              "/starter-projects-simple-agent",
              "/starter-projects-math-agent",
              "/tutorials-math-agent",
            ],
          },
          {
            to: "/sequential-agent",
            from: [
              "/starter-projects-sequential-agent",
              "/tutorials-sequential-agent",
            ],
          },
          {
            to: "/travel-planning-agent",
            from: [
              "/starter-projects-travel-planning-agent",
              "/tutorials-travel-planning-agent",
              "/starter-projects-dynamic-agent/",
            ],
          },
          {
            to: "/components-vector-stores",
            from: "/components-rag",
          },
          {
            to: "/configuration-authentication",
            from: [
              "/configuration-security-best-practices",
              "/Configuration/configuration-security-best-practices",
            ],
          },
          {
            to: "/environment-variables",
            from: [
              "/configuration-auto-saving",
              "/Configuration/configuration-auto-saving",
              "/configuration-backend-only",
              "/Configuration/configuration-backend-only",
            ],
          },

          {
            to: "/components-custom-components",
            from: "/components/custom",
          },
          {
            to: "/components-bundle-components",
            from: "/components-loaders",
          },
          {
            to: "/mcp-server",
            from: "/integrations-mcp",
          },
          {
            to: "/integrations-nvidia-g-assist",
            from: "/integrations-nvidia-system-assist",
          },
          {
            to: "/basic-prompting",
            from: "/starter-projects-basic-prompting",
          },
          {
            to: "/vector-store-rag",
            from: "/starter-projects-vector-store-rag",
          },
          {
            to: "/contributing-github-issues",
            from: "/contributing-github-discussions",
          },
          {
            to: "/agents",
            from: "/agents-tool-calling-agent-component",
          },
          {
            to: "/concepts-publish",
            from: "/embedded-chat-widget",
          },
          {
            to: "/bundles-google",
            from: "/integrations-setup-google-oauth-langflow",
          },
          {
            to: "/bundles-vertexai",
            from: "/integrations-setup-google-cloud-vertex-ai-langflow",
          },
          {
            to: "/develop-application",
            from: "/develop-overview",
          },
          {
            to: "/data-types",
            from: "/concepts-objects",
          },
          // add more redirects like this
          // {
          //   to: '/docs/anotherpage',
          //   from: ['/docs/legacypage1', '/docs/legacypage2'],
          // },
        ],
      },
    ],
    // ....
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Axie Studio",
          src: "img/axie-docs-light.svg",
          srcDark: "img/axie-docs-dark.svg",
        },
        items: [
          // Social links removed for Axie Studio branding
        ],
      },
      colorMode: {
        defaultMode: "light",
        /* Allow users to chose light or dark mode. */
        disableSwitch: false,
        /* Respect user preferences, such as low light mode in the evening */
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: ".markdown :not(a) > img:not(.no-zoom)",
        background: {
          light: "rgba(240, 240, 240, 0.9)",
        },
        config: {},
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      footer: {
        logo: {
          alt: "Axie Studio",
          src: "img/axie-studio-logo-light.svg",
          srcDark: "img/axie-studio-logo-dark.svg",
          width: 160,
          height: 40,
        },
        links: [
          {
            title: null,
            items: [
              {
                html: `<div class="footer-links">
                  <span>© ${new Date().getFullYear()} Axie Studio</span>
                  <span> ·&nbsp; <a href="mailto:support@axiestudio.se">Support</a></span>
                  </div>`,
              },
            ],
          },
        ],
      },
      // Search disabled for now - can be configured later with Axie Studio search
      // algolia: {
      //   appId: "YOUR_APP_ID",
      //   apiKey: "YOUR_API_KEY",
      //   indexName: "axie-studio",
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: "search",
      // },
    }),
};

module.exports = config;
