import banner from "../images/banner-2.jpg";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import { TopImage, } from "../components/TopImage";
import { EventItem, } from "../components/ListItems";
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Segment,
} from "../components/toolbox";

// ----------------------------------------------------

// ----------------------------------------------------

export const CampaigningQuery = graphql`
	query CampaigningQuery {
		contentfulEvents: allContentfulEvent {
			edges {
				node {
					id
					title
					description
					socialEvent
					membersOnly
					date
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

const Campaigning = ( { data, }, ) => {
	const upcomingEvents = data.contentfulEvents.edges
		.filter( event => event.node.socialEvent === false ) // Campaigning only shows non-social
		.filter( event => {
			return (
				new Date(event.node.date).getTime() >=
					new Date().getTime() ||
				(new Date(event.node.date).getFullYear() ===
					new Date().getFullYear() &&
					new Date(event.node.date).getMonth() ===
						new Date().getMonth() &&
					new Date(event.node.date).getDate() ===
						new Date().getDate())
			);
		})
		.sort(function(a, b) {
			return (
				new Date(a.node.date).getTime() -
				new Date(b.node.date).getTime()
			);
		});

	return (
		<div>
			<TopImage src = { banner } />

			<Segment vertical >
				<Container text>
					<Header as = "h1">Campaigning</Header>

					<p style = { { fontSize: "1.33em", } }>
						Thank you to everyone who joined us on the doorstep in the
						run up to the May local elections!
					</p>

					<p>
						Get involved with Labour on the doorstep and share our
						message. You will find campaigning activities, like street
						stalls and door knocking sessions, here. Let us know if
						you'd like to get involved!
					</p>

					<Button size = "huge" as = { Link } to = "/contact-us">
						Get in touch
					</Button>

					<Divider
						as = "h4"
						className = "header"
						horizontal
						style = { { margin: "3em 0em", textTransform: "uppercase", } }
					>
						Upcoming events
					</Divider>

					<Grid columns = { 2 } stackable>
						{ upcomingEvents ?
							upcomingEvents
								.map(event => (
									<EventItem event = { event }/>
								))
							: <div>No upcoming events</div>
						}
					</Grid>
				</Container>
			</Segment>
		</div>
	);
};

Campaigning.propTypes = {
	data: PropTypes.object,
};

export default Campaigning;
