import {
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
} from "../components/toolbox";
import { graphql } from 'gatsby'
import Link from "gatsby-link";
import profileImage from "../images/profile-pic.png";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";

const Councillors = ( props ) => {
	const {data } = props
	const wards = data.contentfulWards.edges
		.sort((x, y) => {
			return x.node.name.toUpperCase() <
				y.node.name.toUpperCase()
				? -1
				: 1;
		});

	const councillors = data.contentfulCandidates.edges
		.sort((x, y) => {
			return x.node.name.toUpperCase() <
				y.node.name.toUpperCase()
				? -1
				: 1;
		});

	return (
		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1">Your Councillors</Header>

				<p>
					There are 15 Labour councillors representing you across Hornsey
					& Wood Green. Find out who is representing your local area.
				</p>

				<br />

				{wards && 
					wards.map( ward => (
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

							{ 
								councillors.filter(councillor => {
									return (
										councillor.node.ward.id === ward.node.id
									);
								}) 
									? (
										<Grid columns = { 3 }>
											<Grid.Row>
												{councillors
													.filter(councillor => {
														return (
															councillor.node.ward.id === ward.node.id
														);
													})
													.map(councillor => (
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
													))}
											</Grid.Row>
										</Grid>
									) : (
										<div>
											There are currently no Labour councillors in
											this ward.
										</div>
									)}
							<br />
							<br />
						</Container>
					))}
			</Container>
		</Segment>
	);
};

Councillors.propTypes = {
	data: PropTypes.shape({
		contentfulWards: PropTypes.object,
		contentfulCandidates: PropTypes.object,
	}),
};

export default Councillors;

const WardAndCandidateQuery = graphql`
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