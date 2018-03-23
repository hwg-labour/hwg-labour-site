import React from "react";

import {
	Button,
	Container,
	Header,
	Segment,
} from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const IndexPage = () => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">Your MP</Header>

			<Header as = "h2">Catcherine West</Header>

			<p>
				Catherine holds a degree in Social Science and Languages and a
				Masters Degree in Chinese Studies from the School of Oriental
				and African Studies, and speak five languages including
				Mandarin. She developed her Mandarin whilst teaching English as
				a second language in Nanjing, China.
			</p>

			<p>
				Before being elected am an MP Catherine was leader of Islington
				Council, and in February 2013, she was awarded the ‘Local
				Authority Leader of the Year’ award by the Local Government
				Information Unit, for her work leading the Islington Fairness
				Commission.
			</p>

			<p>
				Following her election to parliament in 2015, Catherine was
				appointed to the front bench of the Official Opposition as
				Shadow Foreign Minister, with responsibility for the Americas,
				Asia-Pacific, Oceania and the Overseas Territories. She held
				this position until June 2017, when she returned to the
				backbenches. In September 2017, Catherine was elected onto the
				Parliamentary Select Committee on International Trade, and the
				joint Committee on Arms Export Controls. Catherine is also
				Deputy-Chair of the All-Party Parliamentary Group (APPG) on
				China, Vice-Chair of the APPG on North Korea, the patron of Hong
				Kong Watch and the Vice-Chair of the APPG on American Football.
			</p>

			<Button as = "a" size = "large" href = "http://www.catherinewest.org.uk/">
				Read more on her website
			</Button>
		</Container>
	</Segment>
);

export default IndexPage;
