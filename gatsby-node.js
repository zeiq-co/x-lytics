// const fs = require(`fs`);
const path = require('path');
// const fetch = require('isomorphic-unfetch');

// exports.onPreBootstrap = () => {
//   // fetch currency rates
//   const currencyApiKey = '63d77b57d7ac9e3b74d8';
//   fetch(
//     `http://free.currconv.com/api/v7/convert?q=CAD_USD,CAD_INR&compact=y&apiKey=${currencyApiKey}`,
//   )
//     .then(r => r.json())
//     .then(data => {
//       fs.writeFileSync(`./data/currency.json`, JSON.stringify(data, ``, 2));
//     })
//     .catch(error => {
//       console.log(error);ssss
//     });
// };

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulPages {
        edges {
          node {
            id
            title
            slug
            content {
              internal {
                content
              }
            }
            image {
              file {
                url
              }
            }
            imageTag
          }
        }
      }
    }
  `).then(async result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString())); // eslint-disable-line
      return Promise.reject(result.errors);
    }

    // console.log('result', result);
    result.data.allContentfulPages.edges.forEach(({ node }) => {
      // console.log('node', node);
      const pagePath = `page/${node.slug}`;
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/page.js`),
        // additional data can be passed via context
        context: {
          slug: node.slug,
        },
      });
    });

    // result.data.allContentfulProduct.edges.forEach(({ node }) => {
    //   // console.log('node', node);
    //   const pagePath = `product/${node.slug}`;
    //   createPage({
    //     path: pagePath,
    //     component: path.resolve(`src/templates/product.js`),
    //     // additional data can be passed via context
    //     context: {
    //       slug: node.slug,
    //     },
    //   });
    // });

    return null;
  });
};
