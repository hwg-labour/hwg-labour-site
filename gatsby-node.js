var slugify = require("slugify");
var path = require("path");

/**
 * Implement Gatsby"s Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const queries = [
			{
				template: "src/templates/group.js",
				route: 'groups',
				dataName: 'contentfulGroups',
				titleType: 'name',
				query: `{
					contentfulGroups: allContentfulGroup {
						edges {
							node {
								id
								name
							}
						}
					}
				}`
			},
			{
				template: "src/templates/ward.js" ,
				route: 'wards',
				dataName: 'contentfulWards',
				titleType: 'name',
				query: `{
					contentfulWards: allContentfulWard {
						edges {
							node {
								id
								name
							}
						}
					}
				}`
			},
			{
				template: "src/templates/candidate.js",
				route: 'councillors',
				dataName: 'contentfulCandidates',
				titleType: 'name',
				query: `{
					contentfulCandidates: allContentfulCandidate {
						edges {
							node {
								id
								name
							}
						}
					}
				}`
			},
			{
				template: "src/templates/news.js",
				route: 'news',
				dataName: 'contentfulNews',
				titleType: 'title',
				query: `{
					contentfulNews: allContentfulNews {
						edges {
							node {
								id
								title
							}
						}
					}
				}`
			},
			{
				template: "src/templates/event.js",
				route: 'events',
				dataName: 'contentfulEvents',
				titleType: 'title',
				query: `{
					contentfulEvents: allContentfulEvent {
						edges {
							node {
								id
								title
							}
						}
					}
				}`
			},
		]

exports.onCreateWebpackConfig = ({ stage, actions }) => {
	switch(stage) {
		case (stage === "build-html"):
			actions.setWebpackConfig({
        plugins: [webpackFooPlugin],
      })
	}
};

exports.createPages = async ({ boundActionCreators, graphql }) => {
	const { createPage, } = boundActionCreators;

	await queries.map( async ({
		query,
		dataName,
		template,
		titleType,
		route,
	}) => {
 		const result = await graphql(query)

	  if (result.errors) {
	    reporter.panicOnBuild(`Error while running GraphQL query.`)
	    return
	  }

	  const Template = path.resolve( template );

		result
			.data[dataName]
			.edges
			.forEach( ( { node, } ) => {
				const path = `/${route}/${ 
					slugify(node[titleType], { lower: true, }) 
				}`;
				
				createPage({
					path,
					component: Template,
					context: {
						slug: path,
						id: node.id,
					},
				});
			});
	})
};