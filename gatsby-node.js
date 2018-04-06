var slugify = require('slugify')
var path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 // Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const GroupTemplate = path.resolve(`src/templates/group.js`);
		const WardTemplate = path.resolve(`src/templates/ward.js`);
		const CandidateTemplate = path.resolve(`src/templates/candidate.js`);
		const NewsTemplate = path.resolve(`src/templates/news.js`);
		const EventTemplate = path.resolve(`src/templates/event.js`);
		
		resolve( // Query for markdown nodes to use in creating pages.
			graphql(
				`
					{
						contentfulGroups: allContentfulGroup {
							edges {
								node {
									id
									name
								}
							}
						}
						contentfulWards: allContentfulWard {
							edges {
								node {
									id
									name
								}
							}
						}
						contentfulCandidates: allContentfulCandidate {
							edges {
								node {
									id
									name
								}
							}
						}
						contentfulNews: allContentfulNews {
							edges {
								node {
									id
									title
								}
							}
						}
						contentfulEvents: allContentfulEvent {
							edges {
								node {
									id
									title
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					reject(result.errors);
				}

				// Create pages for each markdown file.
				result.data.contentfulGroups.edges.forEach( ( { node, } ) => {
					const path = `/groups/${ slugify(node.name, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: GroupTemplate,
						context: { // In your blog post template's graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulWards.edges.forEach( ( { node, } ) => {
					const path = `/wards/${ slugify(node.name, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: WardTemplate,
						//layout: `ward-layout`, // If you have a layout component at src/layouts/blog-layout.js
						context: { // In your blog post template's graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulCandidates.edges.forEach( ( { node, } ) => {
					const path = `/councillors/${ slugify(node.name, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: CandidateTemplate,
						//layout: `ward-layout`, // If you have a layout component at src/layouts/blog-layout.js
						context: { // In your blog post template's graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulNews.edges.forEach( ( { node, } ) => {
					const path = `/news/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: NewsTemplate,
						//layout: `ward-layout`, // If you have a layout component at src/layouts/blog-layout.js
						context: { // In your blog post template's graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulEvents.edges.forEach( ( { node, } ) => {
					const path = `/events/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: EventTemplate,
						context: { // In your blog post template's graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							path,
							id,
						},
					});
				});
			})
		);
	});
};