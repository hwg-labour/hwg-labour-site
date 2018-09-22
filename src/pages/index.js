import { Button, Container, Header, Segment, Grid, } from "../components/toolbox";
import { NewsItem, } from "../components/ListItems";

import Link from "gatsby-link";
import React from "react";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const HomeQuery = graphql`
	query HomeQuery {
		allContentfulNews {
			edges {
				node {
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

const Home = ( { data, }, ) => {
	let news = data.allContentfulNews && data.allContentfulNews.edges;

	news = news.map( entry => {
		return entry.node || entry;
	});

	if (news[0].publishingDate) {
		news
			.sort(function(a, b) {
				return (
					new Date(b.publishingDate) -
					new Date(a.publishingDate)
				);
			});
	};

	return (
		<div>
			<Segment  vertical>
				<Container text>
					<Header as = "h1" style = { { fontSize: "2em", } }>
						For the many, not the few.
					</Header>

					<p style = { { fontSize: "1.33em", } }>
						We want to build a Britain that works for the many, not the
						few. That means building the homes we need to rent and buy,
						keeping our communities safe, giving our schools the funding
						they need, and restoring the NHS to its place as the envy of
						the world.
					</p>

					<Button
						size = "huge"
						as = { Link }
						to = "/news/Haringey-Labour-2018-Manifesto-Launched"
					>
						Read our manifesto
					</Button>
				</Container>
			</Segment>

			<Segment  vertical>
				<Container text>
					<Header as = "h1" style = { { fontSize: "2em", } }>
						Meet your councillors
					</Header>

					<p style = { { fontSize: "1.33em", } }>
						There are 15 Labour councillors representing you across
						Hornsey & Wood Green. Find out who is representing your
						local area.
					</p>

					<Button size = "huge" as = { Link } to = "/councillors">
						Meet your councillors
					</Button>
				</Container>
			</Segment>

			<Segment  vertical>
				<Container text>
					<Header as = "h3" style = { { fontSize: "2em", } }>
						Recent News
					</Header>

					<br/>
					<br/>

					{news.length && (
						<Grid columns = { 2 } stackable>
							{news.slice(0,2).map(newsItem => {
								return <NewsItem news = { newsItem } />;
							})}
						</Grid>
					)}

					<Button size = "huge" as = { Link } to = "/news">
						Read more news
					</Button>
				</Container>
			</Segment>
		</div>
	)
};

Home.propTypes = {
	data: PropTypes.shape({
		allContentfulNews: PropTypes.object,
	}),
};

export default Home;
