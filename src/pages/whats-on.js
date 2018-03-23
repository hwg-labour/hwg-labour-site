import React from "react";

import { Button, Container, Divider, Header, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">Contact Us</Header>

			<p>
				Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
				Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
				auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
				dolor auctor. Nullam quis risus eget urna mollis ornare vel eu
				leo.
			</p>

			<Button as = "a" size = "large">
				Read More
			</Button>

			<Divider
				as = "h4"
				className = "header"
				horizontal
				style = { { margin: "3em 0em", textTransform: "uppercase", } }
			>
				<a href = "#">Case Studies</a>
			</Divider>

			<Header as = "h3">Did We Tell You About Our Bananas?</Header>

			<p>
				Yes I know you probably disregarded the earlier boasts as
				non-sequitur filler content, but it's really true. It took years
				of gene splicing and combinatory DNA research, but our bananas
				can really dance.
			</p>

			<Button as = "a" size = "large">
				I'm Still Quite Interested
			</Button>
		</Container>
	</Segment>
);

export default IndexPage;
