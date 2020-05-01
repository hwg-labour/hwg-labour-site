import React from "react";

import { Button, Container, Header, Segment, } from "../components/toolbox";





const MP = () => (
	<div>
		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h3">Your MP</Header>

				<Header as = "h1">Catcherine West</Header>

				<p>
					Catherine holds a degree in Social Science and Languages and
					a Masters Degree in Chinese Studies from the School of
					Oriental and African Studies, and speak five languages
					including Mandarin. She developed her Mandarin whilst
					teaching English as a second language in Nanjing, China.
				</p>

				<p>
					Before being elected am an MP Catherine was leader of
					Islington Council, and in February 2013, she was awarded the
					‘Local Authority Leader of the Year’ award by the Local
					Government Information Unit, for her work leading the
					Islington Fairness Commission.
				</p>

				<p>
					Following her election to parliament in 2015, Catherine was
					appointed to the front bench of the Official Opposition as
					Shadow Foreign Minister, with responsibility for the
					Americas, Asia-Pacific, Oceania and the Overseas
					Territories. She held this position until June 2017, when
					she returned to the backbenches. In September 2017,
					Catherine was elected onto the Parliamentary Select
					Committee on International Trade, and the joint Committee on
					Arms Export Controls. Catherine is also Deputy-Chair of the
					All-Party Parliamentary Group (APPG) on China, Vice-Chair of
					the APPG on North Korea, the patron of Hong Kong Watch and
					the Vice-Chair of the APPG on American Football.
				</p>

				<Button
					as = "a"
					size = "large"
					href = "http://www.catherinewest.org.uk/"
				>
					Find out more
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h3">Contact Catherine</Header>

				<p>
					Please include your full address, postcode and name in any
					email to Catherine, or she will be unable to take up your
					case.
				</p>

				<p>
					<b>Email</b>:{" "}

					<a href = "mailto:catherine.west.mp@parliament.uk">
						catherine.west.mp@parliament.uk
					</a>
				</p>

				<p>
					<b>Phone</b>: <a href = "tel:+442072196141">020 7219 6141</a>{" "}
				</p>

				<p>
					<b>Post</b>: House of Commons, London SW1A 0AA
				</p>

				<p>
					<b>Twitter</b>:{" "}

					<a href = "www.twitter.com/CatherineWest1">@CatherineWest1</a>
				</p>

				<p>
					<b>Facebook</b>:{" "}
					
					<a href = "www.facebook.com/CatherineWestMP">
						CatherineWestMP
					</a>
				</p>
			</Container>
		</Segment>
	</div>
);

export default MP;
