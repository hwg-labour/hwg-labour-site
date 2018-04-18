import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
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

export const WardAndCandidateQuery = graphql`
	query WardAndCandidateQuery {
		contentfulWards: allContentfulWard {
			edges {
				node {
					id
					name
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

const WardDivider = styled(Divider)`
	width: 100%;
	margin: 3em 0em;
	text-transform: uppercase;
`;

// ----------------------------------------------------

const IndexPage = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">Your Councillor Candidates</Header>

			<p>
				There are 30 councillor candidates representing Labour across
				Hornsey & Wood Green in the upcoming May local elections. Find
				out who is representing your local area.
			</p>

			<br />

			{props.data.contentfulWards.edges
				.sort((x, y) => {
					return x.node.name.toUpperCase() < y.node.name.toUpperCase()
						? -1
						: 1;
				})
				.map(ward => (
					<Container key = { ward.node.id + "-ward" }>
						<Divider as = "h4" className = "header" horizontal>
							<Link
								to = { `/wards/${ slugify(ward.node.name, {
									lower: true,
								}) }` }
							>
								{ward.node.name}
							</Link>
						</Divider>

						<br />

						<Grid columns = { 3 }>
							<Grid.Row>
								{props.data.contentfulCandidates.edges
									.sort((x, y) => {
										return x.node.name.toUpperCase() <
											y.node.name.toUpperCase()
											? -1
											: 1;
									})
									.map(councillor => {
										return (
											councillor.node.ward.id ===
												ward.node.id && (
												<Grid.Column
													key = {
														councillor.node.id +
														"-councillor"
													}
													verticalAlign = "middle"
												>
													<Image
														src = { `
														${
												councillor.node
													.image
													? "https://res.cloudinary.com/codogo/image/fetch/h_530,w_430,c_fill,g_face,f_auto/https:" +
																  councillor
																  	.node
																  	.image
																  	.file
																  	.url
													: profileImage
												}` }
														as = { Link }
														to = { `/councillors/${ slugify(
															councillor.node
																.name,
															{ lower: true, },
														) }` }
													/>

													<Header
														as = "h4"
														textAlign = "center"
													>
														{councillor.node.name}
													</Header>
												</Grid.Column>
											)
										);
									})}
							</Grid.Row>
						</Grid>
						<br />
						<br />
					</Container>
				))}
		</Container>
	</Segment>
);

export default IndexPage;
