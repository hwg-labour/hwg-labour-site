import React from "react";
import marked from "marked";

import { Container, Header, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

export const NewsItemQuery = graphql`
	query NewsItemQuery($id: String!) {
		contentfulNews(id: { eq: $id }) {
			title
			content {
				content
			}
		}
	}
`;

// ----------------------------------------------------

const NewsTemplate = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">{props.data.contentfulNews.title}</Header>

			<div
				dangerouslySetInnerHTML = { {
					__html: marked(props.data.contentfulNews.content.content),
				} }
			/>
		</Container>
	</Segment>
);

export default NewsTemplate;
