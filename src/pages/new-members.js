import React from "react";

import { Button, Container, Divider, Header, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1" style = { { fontSize: "2em", } }>
				New Members
			</Header>

			<p style = { { fontSize: "1.33em", } }>
				We want to build a Britain that works for the many, not the
				few. That means building the homes we need to rent and buy,
				keeping our communities safe, giving our schools the funding
				they need, and restoring the NHS to its place as the envy of
				the world.
			</p>

			<p>Get involved</p>
			{/*<Button size = "huge">Check Them Out</Button>*/}
		</Container>
	</Segment>
);

export default IndexPage;
