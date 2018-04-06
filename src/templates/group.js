import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import marked from "marked";
import slugify from "slugify";

import {
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
} from "semantic-ui-react";

import profileImage from "../images/profile-pic.png";

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

const BannerImage = styled(Image)`
	width: 100%;
	max-height: 400px
	object-fit: cover;
	z-index: -1;
`;

// ----------------------------------------------------

const NewsTemplate = props => (
	<div>
		{ props.data.contentfulGroup.image && <BannerImage src = { "https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" + props.data.contentfulGroup.image.file.url }/> }
		
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
