import { Button, Container, Link, Header, Segment, } from "semantic-ui-react";
import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-4.jpg";
import React from "react";

// ----------------------------------------------------

// ----------------------------------------------------

const Volunteering = () => (
	<div>
		<TopImage src = { banner } />

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1" style = { { fontSize: "2em", } }>
					Volunteering
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					We welcome all volunteers, whatever your skill-set or interests!
				</p>

				<p>
					We need people for leaflet delivery, doorstep campaigning, street stalls, phoning potential voters, envelope stuffing and many other tasks.
				</p>

				<p>
					If you have specialist skills, such as in IT, marketing or design, we would like to hear from you.
				</p>

				<Button size = "huge" as = { Link } to = "/contact-us">
					Get in touch
				</Button>
			</Container>
		</Segment>
	</div>
);

export default Volunteering;
