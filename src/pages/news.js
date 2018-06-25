import React from "react";

import { Container, Divider, Grid, Header, Segment, } from "semantic-ui-react";

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

const IndexPage = props => {
	const news = props.data.contentfulNews.edges
		.filter(news => news.node.newsSection === true)
		.sort(function(a, b) {
			return (
				new Date(b.node.publishingDate) -
				new Date(a.node.publishingDate)
			);
		});

	return (
		<div>
			<Segment vertical style = { { padding: "8em 0em", } }>
				<Container text>
					<Header as = "h1">News</Header>

					<p style = { { fontSize: "1.33em", } }>
						Stay up to date with the latest local Labour news.
					</p>

					<Divider
						as = "h4"
						className = "header"
						horizontal
						style = { {
							margin: "3em 0em",
							textTransform: "uppercase",
						} }
					>
						Recent News
					</Divider>

					{news.length && (
						<Grid columns = { 2 } stackable>
							{news.map(newsItem => {
								return <NewsItem news = { newsItem.node } />;
							})}
						</Grid>
					)}
				</Container>
			</Segment>
		</div>
	);
};

export default IndexPage;
