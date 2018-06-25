import { TopImage, } from "../components/TopImage";
import { Container, Header, Segment, } from "semantic-ui-react";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const EventItemQuery = graphql`
	query EventItemQuery($id: String!) {
		contentfulEvent(id: { eq: $id }) {
			title
			description
			socialEvent
			membersOnly
			content {
				content
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

const EventTemplate = props => (
	<div>
		{props.data.contentfulEvent.image && (
			<TopImage
				src = {
					"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
					props.data.contentfulEvent.image.file.url
				}
			/>
		)}

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				{props.data.contentfulEvent.membersOnly && (
					<p style = { { color: "#aaaaaa", } }>Members only</p>
				)}

				<Header as = "h1">{props.data.contentfulEvent.title}</Header>

				<div>
					<b>{props.data.contentfulEvent.description}</b>
				</div>

				<br />

				<div
					dangerouslySetInnerHTML = { {
						__html: marked(
							props.data.contentfulEvent.content.content,
						),
					} }
				/>
			</Container>
		</Segment>
	</div>
);

EventTemplate.propTypes = {
	data: PropTypes.object,
};

export default EventTemplate;
