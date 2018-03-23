import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Link from "gatsby-link";

import { Container, Grid, Header, List, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const Footer = () => (
	<Segment color = "grey" style = { { padding: "5em 0em", } } inverted vertical>
		<Container>
			<Grid divided inverted stackable>
				<Grid.Row>
					<Grid.Column width = { 3 }>
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
						</List>
					</Grid.Column>

					<Grid.Column width = { 3 }>
						<Header inverted as = "h4" content = "Getting Involved" />

						<List link inverted>
							<List.Item to = "/new-members/" as = { Link }>
								New Members
							</List.Item>

							<List.Item to = "/whats-on/" as = { Link }>
								What's On
							</List.Item>

							<List.Item to = "/volunteering/" as = { Link }>
								Volunteering
							</List.Item>

							<List.Item to = "/donate/" as = { Link }>
								Donate
							</List.Item>

							<List.Item to = "/newsletter/" as = { Link }>
								Newsletter
							</List.Item>
						</List>
					</Grid.Column>

					<Grid.Column width = { 7 }>
						<Header as = "h4" inverted>
							Next Door-knocking Sessions:
						</Header>

						<p>29th February, Stroud Green</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</Segment>
);

export default Footer;
