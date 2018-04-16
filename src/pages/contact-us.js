import React from "react";
import Link from "gatsby-link";

import { Button, Container, Divider, Header, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = props => (
	<div>
		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1">Contact Us</Header>

				<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>

				<Button size = "huge" as = { Link } to = "/new-members">
					Get involved
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h3">Contact Details</Header>

				<p><b>Email</b>: <a href="mailto:labourinharingey@gmail.com">labourinharingey@gmail.com</a></p>

				<p><b>Post</b>: 28 Middle Lane, London, N8 8PL</p>

				<p><b>Twitter</b>: <a href="https://twitter.com/LabourHWG">@LabourHWG</a></p>

				<p><b>Facebook</b>: <a href="https://www.facebook.com/HornseyWoodGreenLabour/">HornseyWoodGreenLabour</a></p>
			</Container>
		</Segment>
	</div>
);

export default IndexPage;
