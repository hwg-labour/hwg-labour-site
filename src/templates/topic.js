import { TopImage, } from "../components/TopImage";
import { div, Header, Subheader, div, } from "../components/toolbox";

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
	<div>
		{ (data.contentfulTopic.image && data.contentfulTopic.image.file )  &&
			<TopImage
				src = {
					data.contentfulTopic.image.file ?
						`https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:${ data.contentfulTopic.image.file.url }` : 
						"https://labour.org.uk/wp-content/uploads/2016/06/Search-homepage.jpg"
				}
			/>
		}

		<div>
			<div text>
				{ data.contentfulTopic.title && <h1>{data.contentfulTopic.title}</Header> }

				{ data.contentfulTopic.type && <Subheader as = "h1">{data.contentfulTopic.type}</Subheader> }

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
			</div>
		</div>
	</div>
);

NewsTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulTopic: PropTypes.object,
	}),
};

export default NewsTemplate;
