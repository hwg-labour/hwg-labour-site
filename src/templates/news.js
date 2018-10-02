import { graphql, } from "graphql";
import { 
	Block,
	Page, 
} from "hwg-labour-components";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const NewsItemQuery = graphql`
	query NewsItemQuery($id: String!) {
		contentfulNews(id: { eq: $id }) {
			title
			description {
				description
			}
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

const NewsTemplate = ( { data, }, ) => (
	<Page
		banner = {
			data.contentfulNews.image.file ?
				`https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:${ data.contentfulNews.image.file.url }` : 
				"https://labour.org.uk/wp-content/uploads/2016/06/Search-homepage.jpg"
		}
	>
		<Block>
			<Block.Header>
				{ data.contentfulNews.title} }
			</Block.Header>

			<Block.Content>
				{ 
					data.contentfulNews.description &&
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								data.contentfulNews.description.description,
							),
						} }
					/>
				}

				{ 
					data.contentfulNews.content &&
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								data.contentfulNews.content.content,
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
		contentfulNews: PropTypes.object,
	}),
};

export default NewsTemplate;
