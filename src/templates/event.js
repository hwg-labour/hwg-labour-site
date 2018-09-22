import { TopImage, } from "../components/TopImage";
import { Container, Header, Segment, } from "../components/toolbox";

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

const EventTemplate = ( { data, }, ) => (
	<div>
		{ ( data.contentfulEvent.image && data.contentfulEvent.image.file ) && (
			<TopImage
				src = {
					data.contentfulEvent.image.file ?
						`https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:${ data.contentfulEvent.image.file.url }` : 
						"https://labour.org.uk/wp-content/uploads/2016/06/Search-homepage.jpg"
				}
			/>
		)}

		<Segment>
			<Container text>
				{
					data.contentfulEvent.membersOnly &&
					<p style = { { color: "#aaaaaa", } }>Members only</p>
				}

				{
					data.contentfulEvent.title &&
					<Header as = "h1">{data.contentfulEvent.title}</Header>
				}

				{ 
					data.contentfulEvent.description &&
					<div>
						<b>{data.contentfulEvent.description}</b>
					</div>
				}

				<br />

				{ 
					data.contentfulEvent.content &&
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								data.contentfulEvent.content.content,
							),
						} }
					/>
				}
			</Container>
		</Segment>
	</div>
);

EventTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulEvent: PropTypes.object,
	}),
};

export default EventTemplate;
