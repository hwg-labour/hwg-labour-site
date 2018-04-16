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

import { TopImage, } from "../components/TopImage";

import profileImage from "../images/profile-pic.png";

// ----------------------------------------------------

export const WardItemQuery = graphql`
	query WardItemQuery($id: String!) {
		contentfulWard(id: { eq: $id }) {
			id
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
		contentfulCandidates: allContentfulCandidate {
			edges {
				node {
					id
					name
					shortBiography
					image {
						file {
							url
						}
					}
					ward {
						id
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------



// ----------------------------------------------------

const NewsTemplate = props => (
	<div>
		{ console.log(props) }
		{ props.data && props.data.contentfulWard.image && <TopImage src = { "https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" + props.data.contentfulWard.image.file.url }/> }
		
		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1">{props.data && props.data.contentfulWard.name}</Header>

				<div
					dangerouslySetInnerHTML = { props.data && {
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
					Councillor Candidates
				</Divider>

				<Grid columns = { 3 }>
					<Grid.Row>
						{props.data && props.data.contentfulCandidates.edges
							.sort((x, y) => {
								return x.node.name.toUpperCase() <
									y.node.name.toUpperCase()
									? -1
									: 1;
							})
							.map(councillor => {
								return (
									councillor.node.ward.id ===
										props.data.contentfulWard.id && (
										<Grid.Column
											key = { councillor.node.id + "-councillor" }
											verticalAlign = "middle"
										>
											<Image
												src = { `
												${
										councillor.node.image
											? "https://res.cloudinary.com/codogo/image/fetch/h_530,w_430,c_fill,g_face,f_auto/https:" +
														  councillor.node.image.file
														  	.url
											: profileImage
										}` }
												as = { Link }
												size = "medium"
												to = { `/councillors/${ slugify(
													councillor.node.name,
													{ lower: true, },
												) }` }
											/>

											<Header as = "h4" textAlign = "center">
												{councillor.node.name}
											</Header>
										</Grid.Column>
									)
								);
							})}
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	</div>
);

export default NewsTemplate;
