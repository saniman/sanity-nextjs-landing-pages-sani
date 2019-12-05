export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de87a4ec48451320548e623',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-sani-studio',
                  apiId: 'f019762e-d785-411d-bf87-a59a2f559358'
                },
                {
                  buildHookId: '5de87a4e280eba21fea7dbb7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-sani',
                  apiId: 'b38777d1-23e5-4ace-b51e-497a9650ac2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saniman/sanity-nextjs-landing-pages-sani',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-sani.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
