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

export const WardItemQuery = graphql`
	query WardItemQuery($id: String!) {
		contentfulWard(id: { eq: $id }) {
			name
			description {
				description
			}
		}
	}
`;

// ----------------------------------------------------

const CouncillorImage = styled(Image)`
	.ui.label {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 0;
		font-size: 1.33em;
	}
`;

// ----------------------------------------------------

const NewsTemplate = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		{console.log(props.data)}

		<Container text>
			<Header as = "h1">{props.data.contentfulWard.name}</Header>

			<div
				dangerouslySetInnerHTML = { {
					__html: marked(
						props.data.contentfulWard.description.description,
					),
				} }
			/>

			<Divider
				as = "h4"
				className = "header"
				horizontal
				style = { { margin: "3em 0em", textTransform: "uppercase", } }
			>
				Councillors
			</Divider>

			<Grid columns = { 3 }>
				{props.data.contentfulWard.candidates &&
					props.data.contentfulWard.candidates.map(councillor => (
						<Grid.Row
							key = { councillor.id + "-councillor" }
							verticalAlign = "middle"
						>
							<Grid.Column width = { 5 }>
								<CouncillorImage
									src = {
										councillor.image
											? councillor.image.file.url
											: profileImage
									}
									as = { Link }
									size = "medium"
									to = { `/councillors/${ slugify(
										councillor.name,
										{ lower: true, },
									) }` }
								/>
							</Grid.Column>

							<Grid.Column width = { 11 }>
								<Header as = "h4">{councillor.name}</Header>

								<p>{councillor.biography.biography}</p>
							</Grid.Column>
						</Grid.Row>
					))}
			</Grid>
		</Container>
	</Segment>
);

export default NewsTemplate;
