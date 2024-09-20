import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/interviewrunbook/blog',
    component: ComponentCreator('/interviewrunbook/blog', '5fb'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/archive',
    component: ComponentCreator('/interviewrunbook/blog/archive', '90b'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/authors',
    component: ComponentCreator('/interviewrunbook/blog/authors', '51c'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/interviewrunbook/blog/authors/all-sebastien-lorber-articles', '9d1'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/authors/yangshun',
    component: ComponentCreator('/interviewrunbook/blog/authors/yangshun', 'b33'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/first-blog-post',
    component: ComponentCreator('/interviewrunbook/blog/first-blog-post', '855'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/long-blog-post',
    component: ComponentCreator('/interviewrunbook/blog/long-blog-post', 'bfa'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/mdx-blog-post',
    component: ComponentCreator('/interviewrunbook/blog/mdx-blog-post', '715'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/tags',
    component: ComponentCreator('/interviewrunbook/blog/tags', 'df3'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/tags/docusaurus',
    component: ComponentCreator('/interviewrunbook/blog/tags/docusaurus', '16f'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/tags/facebook',
    component: ComponentCreator('/interviewrunbook/blog/tags/facebook', '641'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/tags/hello',
    component: ComponentCreator('/interviewrunbook/blog/tags/hello', '962'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/tags/hola',
    component: ComponentCreator('/interviewrunbook/blog/tags/hola', '51c'),
    exact: true
  },
  {
    path: '/interviewrunbook/blog/welcome',
    component: ComponentCreator('/interviewrunbook/blog/welcome', '4f4'),
    exact: true
  },
  {
    path: '/interviewrunbook/markdown-page',
    component: ComponentCreator('/interviewrunbook/markdown-page', '534'),
    exact: true
  },
  {
    path: '/interviewrunbook/docs',
    component: ComponentCreator('/interviewrunbook/docs', '65a'),
    routes: [
      {
        path: '/interviewrunbook/docs',
        component: ComponentCreator('/interviewrunbook/docs', 'da5'),
        routes: [
          {
            path: '/interviewrunbook/docs',
            component: ComponentCreator('/interviewrunbook/docs', '04c'),
            routes: [
              {
                path: '/interviewrunbook/docs/category/tutorial---basics',
                component: ComponentCreator('/interviewrunbook/docs/category/tutorial---basics', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/category/tutorial---extras',
                component: ComponentCreator('/interviewrunbook/docs/category/tutorial---extras', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/intro',
                component: ComponentCreator('/interviewrunbook/docs/intro', 'ad4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-basics/congratulations', '1b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-basics/create-a-blog-post', '831'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-basics/create-a-document', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-basics/create-a-page', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-basics/deploy-your-site', '644'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-basics/markdown-features', '24b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-extras/manage-docs-versions', 'c09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interviewrunbook/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/interviewrunbook/docs/tutorial-extras/translate-your-site', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/interviewrunbook/',
    component: ComponentCreator('/interviewrunbook/', 'a09'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
