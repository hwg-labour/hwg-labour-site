import React from "react";

import { Button, Container, Divider, Header, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">Contact Us</Header>

			<p>
				28 Middle Lane,
				London,
				N8 8PL
			</p>

			<Button as = "a" size = "large">
				Read More
			</Button>
		</Container>
	</Segment>
);

export default IndexPage;
