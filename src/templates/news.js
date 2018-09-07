import { TopImage, } from "../components/TopImage";
import { Container, Header, Segment, } from "semantic-ui-react";

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
	<div>
		{ (data.contentfulNews.image && data.contentfulNews.image.file )  &&
			<TopImage
				src = {
					data.contentfulNews.image.file ?
					`https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:${ data.contentfulNews.image.file.url }` : 
					"https://labour.org.uk/wp-content/uploads/2016/06/Search-homepage.jpg"
				}
			/>
		}

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				{ data.contentfulNews.title && <Header as = "h1">{data.contentfulNews.title}</Header> }

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
			</Container>
		</Segment>
	</div>
);

NewsTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulNews: PropTypes.object,
	}),
};

export default NewsTemplate;
