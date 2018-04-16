import React from "react";
import Link from "gatsby-link";

import {
	Button,
	Container,
	Header,
	Segment,
} from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = props => (
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

				<Button size = "huge" as = { Link } to = "/councillors">
					Read the manifesto
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1" style = { { fontSize: "2em", } }>
					Meet your councillor candidates
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					There are 30 councillor candidates representing Labour
					across Hornsey & Wood Green in the upcoming May local
					elections. Find out who is representing your local area.
				</p>

				<Button size = "huge" as = { Link } to = "/councillors">
					See the candidates
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1" style = { { fontSize: "2em", } }>
					Campaign with us
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					Help us share Labour's manifesto for the upcoming May local
					elections at an upcoming campaign event.
				</p>

				<Button size = "huge" as = { Link } to = "/campaigning">
					Campaigning
				</Button>
			</Container>
		</Segment>
	</div>
);

export default IndexPage;
