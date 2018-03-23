import React from "react";
import marked from "marked";

import { Container, Header, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

export const CandidateItemQuery = graphql`
	query CandidateItemQuery($id: String!) {
		contentfulCandidate(id: { eq: $id }) {
			name
			biography {
				biography
			}
		}
	}
`;

// ----------------------------------------------------

const NewsTemplate = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">{props.data.contentfulCandidate.name}</Header>

			<div
				dangerouslySetInnerHTML = { {
					__html: marked(
						props.data.contentfulCandidate.biography.biography,
					),
				} }
			/>
		</Container>
	</Segment>
);

export default NewsTemplate;
