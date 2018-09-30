import banner from "../images/banner-3.jpg";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import { TopImage, } from "../components/TopImage";
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

export const WhatsOnQuery = graphql`
	query WhatsOnQuery {
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

const WhatsOn = ( { data, }, ) => {
	const upcomingEvents = data.contentfulEvents.edges
		.filter( event => event.node.socialEvent === true ) // Campaigning only shows non-social
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
					What's On
				</Block.Header>

				<Block.Content>
					<p>
						Social events are advertised here - get involved with labour
						in your area!
					</p>

					<p>
						If you're interested in campaigning with us, you can see our
						campaigns calendar <Link to = "/campaigning">here</Link>.
					</p>

					<Button size = "huge" as = { Link } to = "/campaigning">
						Campaigning
					</Button>
				</Block.Content>
			</Block>

			<Block>
				<Block.Header as = "h4">
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

WhatsOn.propTypes = {
	data: PropTypes.shape({
		contentfulEvents: PropTypes.object,
	}),
};

export default WhatsOn;
