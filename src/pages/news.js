import PropTypes from "prop-types";
import React from "react";

import { div, Divider, Grid, Header, div, } from "../components/toolbox";
import { NewsItem, } from "../components/ListItems";

// ----------------------------------------------------

// ----------------------------------------------------

export const NewsQuery = graphql`
	query NewsQuery {
		contentfulNews: allContentfulNews {
			edges {
				node {
					id
					title
					description {
						description
					}
					publishingDate
					newsSection
					image {
						file {
							url
						}
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const News = ( { data, }, ) => {
	const news = data.contentfulNews.edges
		.filter(news => news.node.newsSection === true)
		.sort(function(a, b) {
			return (
				new Date(b.node.publishingDate) -
				new Date(a.node.publishingDate)
			);
		});

	return (
		<Page>
			<Block>
				<Block.Header>
					News
				</Block.Header>

				<Block.Content>
					<p>
						Stay up to date with the latest local Labour news.
					</p>

				</Block.Content>
			</Block>

			<Block>
				<Block.Header as = "h4">
					Recent News
				</Block.Header>

				<Block.Content>
					{news.length && (
						<Grid columns = { 2 } stackable>
							{news.map(newsItem => {
								return <NewsItem news = { newsItem.node } />;
							})}
						</Grid>
					)}
				</Block.Content>
			</Block>
		</Page>
	);
};

News.propTypes = {
	data: PropTypes.shape({
		contentfulNews: PropTypes.object,
	}),
};

export default News;
