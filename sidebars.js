module.exports = {
  docs: [
    "Get-Started/welcome-to-axiestudio",
    {
      type: "category",
      label: "About Axie Studio",
      items: [
        {
          type: "doc",
          id: "Get-Started/about-axiestudio",
          label: "About Axie Studio"
        },
      ],
    },
    {
      type: "category",
      label: "Quick Start",
      items: [
        {
          type: "doc",
          id: "Get-Started/get-started-quickstart",
          label: "Quickstart"
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "Tutorials/chat-with-rag",
        "Tutorials/chat-with-files",
        "Tutorials/agent",
        "Tutorials/mcp-tutorial",
      ],
    },
    {
      type: "category",
      label: "Flows",
      items: [
        {
          type: "doc",
          id: "Concepts/concepts-overview",
          label: "Use the visual editor"
        },
        {
          type: "doc",
          id: "Concepts/concepts-flows",
          label: "Build flows"
        },
        {
          type: "category",
          label: "Flow templates",
          items: [
            'Templates/basic-prompting',
            'Templates/simple-agent',
            'Templates/blog-writer',
            'Templates/document-qa',
            'Templates/memory-chatbot',
            'Templates/vector-store-rag',
            'Templates/financial-report-parser',
            'Templates/sequential-agent',
            'Templates/travel-planning-agent',
          ],
        },
        {
          type: "category",
          label: "Run flows",
          items: [
            {
              type: "doc",
              id: "Concepts/concepts-publish",
              label: "Publish and trigger flows"
            },
            {
              type: "doc",
              id: "Develop/webhook",
              label: "Trigger flows with webhooks"
            },
          ],
        },
        {
          type: "doc",
          id: "Concepts/concepts-playground",
          label: "Test flows"
        },
        {
          type: "doc",
          id: "Concepts/concepts-flows-import",
          label: "Import and export flows"
        },
      ],
    },
    {
      type: "category",
      label: "Agent",
      items: [
        "Agents/agents",
        "Agents/agents-tools",
      ],
    },
    {
      type: "category",
      label: "Model Context Protocol (MCP)",
      items: [
        "Components/mcp-client",
        "Concepts/mcp-server",
        "Integrations/mcp-component-astra",
      ],
    },
    {
      type: "category",
      label: "Develop",
      items: [
        "Configuration/configuration-api-keys",
        "Configuration/configuration-authentication",
        "Configuration/configuration-global-variables",
        "Configuration/environment-variables",
        {
          type: "category",
          label: "Storage and memory",
          items: [
            {
              type: "doc",
              id: "Concepts/concepts-file-management",
              label: "Manage files"
            },
            {
              type: "doc",
              id: "Develop/memory",
              label: "Manage memory"
            },
            {
              type: "doc",
              id: "Develop/session-id",
              label: "Use Session IDs"
            },
            "Configuration/configuration-custom-database",
          ],
        },
        {
          type: "category",
          label: "Observability",
          items: [
            "Develop/logging",
            "Integrations/Arize/integrations-arize",
            "Integrations/integrations-langfuse",
            "Integrations/integrations-langsmith",
            "Integrations/integrations-langwatch",
            "Integrations/integrations-opik",
            "Contributing/contributing-telemetry",
          ],
        },
        {
          type: "doc",
          id: "Concepts/data-types",
          label: "Use Axie Studio data types"
        },
        {
          type: "doc",
          id: "Concepts/concepts-voice-mode",
          label: "Use voice mode"
        },
        {
          type: "doc",
          id: "Configuration/configuration-cli",
          label: "Use the Axie Studio CLI"
        },
      ],
    },

    {
      type: "category",
      label: "Components reference",
      items: [
        "Concepts/concepts-components",
        {
          type: "category",
          label: "Core components",
          items: [
            "Components/components-io",
            "Components/components-agents",
            {
              type: "category",
              label: "Models",
              items: [
                "Components/components-models",
                "Components/components-embedding-models",
              ]
            },
            "Components/components-data",
            "Components/components-vector-stores",
            {
              type: "category",
              label: "Processing",
              items: [
                "Components/components-processing",
                "Components/components-prompts",
              ]
            },
            "Components/components-logic",
            "Components/components-helpers",
            "Components/components-tools",
            "Components/components-memories",
          ],
        },
        {
          type: "category",
          label: "Bundles",
          items: [
            "Components/components-bundles",
            "Components/bundles-aiml",
            "Components/bundles-amazon",
            "Components/bundles-anthropic",
            "Integrations/Apify/integrations-apify",
            "Components/bundles-arxiv",
            "Integrations/integrations-assemblyai",
            "Components/bundles-azure",
            "Components/bundles-baidu",
            "Components/bundles-bing",
            "Integrations/Cleanlab/integrations-cleanlab",
            "Components/bundles-cloudflare",
            "Components/bundles-cohere",
            "Integrations/Composio/integrations-composio",
            "Components/bundles-datastax",
            "Components/bundles-deepseek",
            "Integrations/Docling/integrations-docling",
            "Components/bundles-duckduckgo",
            "Components/bundles-exa",
            "Components/bundles-glean",
            {
              type: 'category',
              label: 'Google',
              items: [
                "Components/bundles-google",
                "Integrations/Google/integrations-google-big-query",
              ],
            },
            "Components/bundles-groq",
            "Components/bundles-huggingface",
            "Components/bundles-ibm",
            "Components/bundles-icosacomputing",
            "Components/bundles-langchain",
            "Components/bundles-lmstudio",
            "Components/bundles-maritalk",
            "Components/bundles-mem0",
            "Components/bundles-mistralai",
            {
              type: "category",
              label: "Notion",
              items: [
                "Integrations/Notion/integrations-notion",
                "Integrations/Notion/notion-agent-conversational",
                "Integrations/Notion/notion-agent-meeting-notes",
              ],
            },
            "Components/bundles-novita",
            {
              type: "category",
              label: "NVIDIA",
              items: [
                "Components/bundles-nvidia",
                {
                  type: "doc",
                  id: "Integrations/Nvidia/integrations-nvidia-ingest",
                  label: "NVIDIA Ingest"
                },
                {
                  type: "doc",
                  id: "Integrations/Nvidia/integrations-nvidia-nim-wsl2",
                  label: "NVIDIA NIM on WSL2"
                },
                {
                  type: "doc",
                  id: "Integrations/Nvidia/integrations-nvidia-g-assist",
                  label: "NVIDIA G-Assist"
                },
              ],
            },
            "Components/bundles-ollama",
            "Components/bundles-openai",
            "Components/bundles-openrouter",
            "Components/bundles-perplexity",
            "Components/bundles-redis",
            "Components/bundles-sambanova",
            "Components/bundles-searchapi",
            "Components/bundles-vertexai",
            "Components/bundles-wikipedia",
            "Components/bundles-xai",
          ],
        },
        "Components/components-custom-components",
      ],
    },


  ],
};