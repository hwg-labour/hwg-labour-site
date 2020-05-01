import { TopImage, } from "../components/TopImage";
import { Container, Header, Segment, } from "semantic-ui-react";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components"
import { graphql } from 'gatsby'

const ContentWrapper = styled.div`
	p > img {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		max-width: 100%;
	}
`;

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
					<ContentWrapper
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

const NewsItemQuery = graphql`
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