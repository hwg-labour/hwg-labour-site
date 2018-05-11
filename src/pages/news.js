import React from "react";

import {
	Container,
	Divider,
	Grid,
	Header,
	Segment,
} from "semantic-ui-react";

import { NewsItem, } from "../components/News";

// ----------------------------------------------------

// ----------------------------------------------------

export const NewsQuery = graphql`
	query NewsQuery {
		contentfulNews(newsSection: { eq: true }) {
			id
			title
			description {
				description
			}
			publishingDate
			image {
				file {
					url
				}
			}
		}
	}
`;

// ----------------------------------------------------

const IndexPage = props => {
	const news = props.data.contentfulNews;

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
						style = { { margin: "3em 0em", textTransform: "uppercase", } }
					>
						Recent News
					</Divider>

					{
						news.length && (
							<Grid columns = { 2 } stackable>
								{news.edges
									.sort(function(a, b) {
										return (
											new Date(b.node.publishingDate) -
											new Date(a.node.publishingDate)
										);
									})
									.map(newsItem => (
										<NewsItem newsItem = { newsItem } />
									))}
							</Grid>
						)
					}
				</Container>
			</Segment>
		</div>
	)
};

export default IndexPage;
