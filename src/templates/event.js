import React from "react";
import marked from "marked";
import styled from "styled-components";

import { Container, Header, Segment, Image, } from "semantic-ui-react";

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

const BannerImage = styled(Image)`
	width: 100%;
	max-height: 400px
	object-fit: cover;
	z-index: -1;
`;

// ----------------------------------------------------

const EventTemplate = props => (
	<div>
		{ props.data.contentfulEvent.image && <BannerImage src = { "https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" + props.data.contentfulEvent.image.file.url }/> }

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				{ props.data.contentfulEvent.membersOnly && <p style = { { color: "#cccccc", }}>Members only</p> }

				<Header as = "h1">{props.data.contentfulEvent.title}</Header>

				<div><b>{ props.data.contentfulEvent.description }</b></div>

				<br/>

				<div
					dangerouslySetInnerHTML = { {
						__html: marked(props.data.contentfulEvent.content.content),
					} }
				/>
			</Container>
		</Segment>
	</div>
);

export default EventTemplate;
