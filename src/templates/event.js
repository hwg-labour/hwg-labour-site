import { div, Page, Block } from "../components/toolbox";

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
	<Page banner = { ( data.contentfulEvent.image && data.contentfulEvent.image.file ) && (
		data.contentfulEvent.image.file ?
			`https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:${ data.contentfulEvent.image.file.url }` : 
			"https://labour.org.uk/wp-content/uploads/2016/06/Search-homepage.jpg"
		)}
	>
		<Block>
			<Block.Header>
				{
					data.contentfulEvent.membersOnly &&
					<p style = { { color: "#aaaaaa", } }>Members only</p>
				}

				{
					data.contentfulEvent.title &&
					<h1>{data.contentfulEvent.title}</h1>
				}
			</Block.Header>

			<Block.Content>
				{ 
					data.contentfulEvent.description &&
					<div>
						<b>{data.contentfulEvent.description}</b>
					</div>
				}
			</Block.Content>
		</Block>

		<Block>
			<Block.Content>
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
			</Block.Content>
		</Block>
	</Page>
);

EventTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulEvent: PropTypes.object,
	}),
};

export default EventTemplate;
