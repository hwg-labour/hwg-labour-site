import { graphql, } from "graphql";
import { 
	Page,
	Block,
	Button,
} from "hwg-labour-components";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const TopicItemQuery = graphql`
	query TopicItemQuery($id: String!) {
		contentfulTopic(id: { eq: $id }) {
			title
			type
			description
			content {
				content
			}
		}
	}
`;

// ----------------------------------------------------

const NewsTemplate = ( { data, }, ) => (
	<Page
		banner = {
			data.contentfulTopic.image.file ?
				`https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:${ data.contentfulTopic.image.file.url }` : 
				"https://labour.org.uk/wp-content/uploads/2016/06/Search-homepage.jpg"
		}
	>
		<Block>
			<Block.Header>
				{data.contentfulTopic.title }
			</Block.Header>

			<Block.Content>
				{ data.contentfulTopic.type && <h2>{data.contentfulTopic.type}</h2> }

				{ 
					data.contentfulTopic.description &&
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								data.contentfulTopic.description,
							),
						} }
					/>
				}

				{ 
					data.contentfulTopic.content &&
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								data.contentfulTopic.content.content,
							),
						} }
					/>
				}
			</Block.Content>
		</Block>
	</Page>
);

NewsTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulTopic: PropTypes.object,
	}),
};

export default NewsTemplate;
