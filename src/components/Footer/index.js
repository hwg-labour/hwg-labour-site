import { Container, Grid, Header, List, Segment, } from "../toolbox";

import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Link from "gatsby-link";

// ----------------------------------------------------

// ----------------------------------------------------

const Footer = ( { events, }, ) => {
	const upcomingEvents = events.edges
		.filter( event => {
			const eventDate = event.node.date;

			return (
				new Date(eventDate).getTime() >= new Date().getTime() ||
				(new Date(eventDate).getFullYear() ===
					new Date().getFullYear() &&
					new Date(eventDate).getMonth() === new Date().getMonth() &&
					new Date(eventDate).getDate() === new Date().getDate())
			);
		})
		.sort(function(a, b) {
			return (
				new Date(b.node.publishingDate) -
				new Date(a.node.publishingDate)
			);
		})
		.slice(1, 3);

	return (
		<Segment color = "grey" style = { { padding: "5em 0em", } } inverted vertical>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width = { 4 }>
							<Header inverted as = "h4" content = "About" />

							<List link inverted>
								<List.Item to = "/contact-us/" as = { Link }>
									Contact Us
								</List.Item>

								<List.Item
									to = "a"
									as = { Link }
									href = "https://join.labour.org.uk/"
								>
									Join
								</List.Item>

								<List.Item to = "/new-members/" as = { Link }>
									Donate
								</List.Item>

								<List.Item to = "/sitemap/" as = { Link }>
									Sitemap
								</List.Item>

								<List.Item to = "https://twitter.com/mcclowes" as = "a">
									Site by @mcclowes
								</List.Item>
							</List>
						</Grid.Column>

						<Grid.Column width = { 4 }>
							<Header inverted as = "h4" content = "Getting Involved" />

							<List link inverted>
								<List.Item to = "/new-members/" as = { Link }>
									New Members
								</List.Item>

								<List.Item to = "/whats-on/" as = { Link }>
									What's On
								</List.Item>

								<List.Item to = "/campaigning/" as = { Link }>
									Campaigning
								</List.Item>

								<List.Item to = "/donate/" as = { Link }>
									Donate
								</List.Item>

								<List.Item
									to = "https://labourinlondon.org.uk/"
									as = "a"
								>
									https://labourinlondon.org.uk/
								</List.Item>
							</List>
						</Grid.Column>

						<Grid.Column width = { 8 }>
							<Header as = "h4" inverted>
								Upcoming events:
							</Header>

							{ upcomingEvents
								.map(event => (
									<p key = { event.node.date }>
										{moment(event.node.date).format(
											"MMMM Do YYYY",
										)}{" "}
										- {event.node.title}
									</p>
								))}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	);
};

Footer.propTypes = {
	events: PropTypes.object,
};

export default Footer;
