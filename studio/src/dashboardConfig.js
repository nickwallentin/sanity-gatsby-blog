export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e96f30321313a01dd428e29',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s2qzzwww',
                  apiId: '12be679c-f4a7-431f-8e81-d506b072cafc'
                },
                {
                  buildHookId: '5e96f3039f4b4b0173b8be2f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-13v51sfm',
                  apiId: 'cad2d0c4-96c4-444d-a786-5d77573f3bdc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickwallentin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-13v51sfm.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
