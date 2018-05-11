import React from "react";
import marked from "marked";

import { Container, Header, Segment, } from "semantic-ui-react";

import { TopImage, } from "../components/TopImage";

// ----------------------------------------------------

export const GroupItemQuery = graphql`
	query GroupItemQuery($id: String!) {
		contentfulGroup(id: { eq: $id }) {
			name
			description {
				description
			}
			image {
				file {
					url
				}
			}
		}
	}
`;

// ----------------------------------------------------

const NewsTemplate = props => (
	<div>
		{props.data.contentfulGroup.image && (
			<TopImage
				src = {
					"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
					props.data.contentfulGroup.image.file.url
				}
			/>
		)}

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1">{props.data.contentfulGroup.name}</Header>

				<div
					dangerouslySetInnerHTML = { {
						__html: marked(
							props.data.contentfulGroup.description.description,
						),
					} }
				/>
			</Container>
		</Segment>
	</div>
);

export default NewsTemplate;
