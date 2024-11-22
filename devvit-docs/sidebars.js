/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'doc',
      label: 'Quickstart',
      id: 'quickstart',
    },
    {
      type: 'doc',
      label: 'Ask AI',
      id: 'ask_ai'
    },
    {
      type: 'category',
      label: 'Learn Devvit',
      items: [
        'dev_guide',
        'about_devvit',
        'templates',
        'publishing',
        'rendering_apps',
        'optimize_performance',
        'devvit_for_pythonistas',
      ],
    },
    {
      type: 'category',
      label: 'Showcase',
      items: ['showcase/apps', 'showcase/playgrounds', 'showcase/tutorials'],
    },
    {
      type: 'category',
      label: 'Interactive Posts',
      items: [
        'interactive_posts',
        {
          type: 'category',
          label: 'Blocks',
          items: [
            'blocks/overview',
            'blocks/stacks',
            'blocks/text',
            'blocks/icon',
            'blocks/button',
            'blocks/image',
            'blocks/spacer',
            'blocks/colors',
          ],
        },
        'webviews',
        'community_games',
        'app_image_assets',
        'post_size',
        'dimensions',
        'custom_post_preview',
        'text_fallback',
        'working_with_usestate',
        'working_with_useasync',
        'working_with_useinterval',
      ],
    },
    {
      type: 'category',
      label: 'Capabilities',
      items: [
        'capabilities/app-configurations',
        'capabilities/adding-links',
        'capabilities/cache',
        'capabilities/forms',
        'capabilities/http-fetch',
        'capabilities/image-uploads',
        'capabilities/menu-actions',
        'capabilities/payments',
        'capabilities/redis',
        'capabilities/realtime',
        'capabilities/scheduler',
        'capabilities/secrets-storage',
        'capabilities/server-side-functions',
        'capabilities/triggers',
      ],
    },
    {
      type: 'category',
      label: 'Developer tools',
      items: ['playground', 'playtest', 'debug', 'devvit_cli', 'devvit_kit'],
    },
    {
      type: 'category',
      label: 'Reference docs',
      items: [
        {
          type: 'doc',
          label: 'Devvit library',
          id: 'api/public-api/classes/Devvit-1',
        },
        {
          type: 'category',
          label: 'Reddit API',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/redditapi/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/redditapi/interfaces',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: 'Guidelines',
      id: 'guidelines',
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['mod_resources', 'beta_participation', 'limits', 'help', 'reddit_developer_funds'],
    },
    {
      type: 'doc',
      label: 'Changelog',
      id: 'changelog',
    },
  ],
};

module.exports = sidebars;
