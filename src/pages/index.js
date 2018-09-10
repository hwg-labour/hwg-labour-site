import { Button, Container, Header, Segment, Grid, } from "../components/toolbox";
import { NewsItem, } from "../components/ListItems";

import Link from "gatsby-link";
import React from "react";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const HomeQuery = graphql`
	query HomeQuery {
		contentfulNews(limit: 2)  {
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
`;

// ----------------------------------------------------

const Home = ( { data, }, ) => (
	<div>
		<Segment style = { { padding: "8em 0em", } } vertical>
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

		<Segment style = { { padding: "8em 0em", } } vertical>
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

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h3" style = { { fontSize: "2em", } }>
					Recent News
				</Header>

				<br/>
				<br/>

				{data.contentfulNews.length && (
					<Grid columns = { 2 } stackable>
						{data.contentfulNews.map(newsItem => {
							return <NewsItem news = { newsItem.node } />;
						})}
					</Grid>
				)}
			</Container>
		</Segment>
	</div>
);

Home.propTypes = {
	data: PropTypes.shape({
		contentfulNews: PropTypes.object,
	}),
};

export default Home;
