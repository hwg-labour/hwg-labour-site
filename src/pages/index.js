import React from "react";

import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
} from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = props => (
	<div>
		<Segment style = { { padding: "8em 0em", } } vertical>
			<Grid container stackable verticalAlign = "middle">
				<Grid.Row>
					<Grid.Column>
						<Header as = "h1" style = { { fontSize: "2em", } }>
							For the many, not the few.
						</Header>

						<p style = { { fontSize: "1.33em", } }>
							We want to build a Britain that works for the many, not the few. That means building the homes we need to rent and buy, keeping our communities safe, giving our schools the funding they need, and restoring the NHS to its place as the envy of the world.
						</p>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column textAlign = "center">
						Our 2018 manifesto well be released shortly.
						{/*<Button size = "huge">Check Them Out</Button>*/}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h3" style = { { fontSize: "2em", } }>
					Breaking The Grid, Grabs Your Attention
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					Instead of focusing on content creation and hard work, we
					have learned how to master the art of doing nothing by
					providing massive amounts of whitespace and generic content
					that can seem massive, monolithic and worth your attention.
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
					Case Studies
				</Divider>

				<Header as = "h3" style = { { fontSize: "2em", } }>
					Did We Tell You About Our Bananas?
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					Yes I know you probably disregarded the earlier boasts as
					non-sequitur filler content, but it's really true. It took
					years of gene splicing and combinatory DNA research, but our
					bananas can really dance.
				</p>

				<Button as = "a" size = "large">
					I'm Still Quite Interested
				</Button>
			</Container>
		</Segment>
	</div>
);

export default IndexPage;
