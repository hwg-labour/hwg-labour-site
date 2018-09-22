import banner from "../images/banner-5.jpg";
import React from "react";

import { TopImage, } from "../components/TopImage";
import { Container, Header, Segment, } from "../components/toolbox";

// ----------------------------------------------------

// ----------------------------------------------------

const ContactUs = () => (
	<div>
		<TopImage src = { banner } />

		<Segment>
			<Container text>
				<Header as = "h1">Contact Us</Header>
			</Container>
		</Segment>

		<Segment>
			<Container text>
				<Header as = "h3">Contact Details</Header>

				<p>
					<b>Email</b>:{" "}
					
					<a href = "mailto:labourinharingey@gmail.com">
						labourinharingey@gmail.com
					</a>
				</p>

				<p>
					<b>Phone</b>: <a href = "tel:+442083407362">0208 340 7362</a>{" "}
				</p>

				<p>
					<b>Post</b>: 28 Middle Lane, London, N8 8PL
				</p>

				<p>
					<b>Twitter</b>:{" "}

					<a href = "https://twitter.com/LabourHWG">@LabourHWG</a>
				</p>

				<p>
					<b>Facebook</b>:{" "}

					<a href = "https://www.facebook.com/HornseyWoodGreenLabour/">
						HornseyWoodGreenLabour
					</a>
				</p>
			</Container>
		</Segment>
	</div>
);

export default ContactUs;
