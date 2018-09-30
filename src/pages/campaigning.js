import banner from "../images/banner-2.jpg";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import { EventItem, } from "../components/ListItems";
import {
	Button,
	div,
	Divider,
	Grid,
	Header,
	div,
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
		<Page banner = { banner }>
			<Block>
				<Block.Header>
					Campaigning
				</Block.Header>

				<Block.Content>
					<p>
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
				</Block.Content>
			</Block>

			<Block>
				<Block.Header as = "h2">
					Upcoming events
				</Block.Header>

				<Block.Content>
					<Grid columns = { 2 } stackable>
						{ upcomingEvents ?
							upcomingEvents
								.map(event => (
									<EventItem event = { event }/>
								))
							: <div>No upcoming events</div>
						}
					</Grid>
				</Block.Content>
			</Block>
		</Page>
	);
};

Campaigning.propTypes = {
	data: PropTypes.object,
};

export default Campaigning;
