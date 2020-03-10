import banner from "../images/banner-3.jpg";
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
import { graphql } from 'gatsby'
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

const WhatsOn = ( props ) => {
const {data } = props
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
		<div>
			<TopImage src = { banner } />

			<Segment vertical style = { { padding: "8em 0em", } }>
				<Container text>
					<Header as = "h1">What's On</Header>

					<p style = { { fontSize: "1.33em", } }>
						Social events are advertised here - get involved with labour
						in your area!
					</p>

					<p>
						Subscribe to our events calendar on 
						<a href="https://calendar.google.com/calendar/ical/haringeylabour.org.uk_v4lj35b8umtec4k047i01ciba8%40group.calendar.google.com/public/basic.ics">
							Apple Calendars
						</a> or 

						<a href="https://calendar.google.com/calendar/r/settings/calendar/aGFyaW5nZXlsYWJvdXIub3JnLnVrX3Y0bGozNWI4dW10ZWM0azA0N2kwMWNpYmE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20?cid=haringeylabour.org.uk_v4lj35b8umtec4k047i01ciba8%40group.calendar.google.com">
							Google Calendars
						</a>.
					</p>

					<p>
						If you're interested in campaigning with us, you can see our
						campaigns calendar <Link to = "/campaigning">here</Link>.
					</p>

					<Button size = "huge" as = { Link } to = "/campaigning">
						Campaigning
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

WhatsOn.propTypes = {
	data: PropTypes.shape({
		contentfulEvents: PropTypes.object,
	}),
};

export default WhatsOn;
