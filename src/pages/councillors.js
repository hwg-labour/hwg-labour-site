import { graphql, } from "graphql";
import { 
	Page,
	Block,
	Button,
} from "hwg-labour-components";

import Link from "gatsby-link";
import profileImage from "../images/profile-pic.png";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";

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

// ----------------------------------------------------

const Councillors = ( { data, }, ) => {
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
		<Page>
			<Block>
				<Block.Header>
					Your Councillors
				</Block.Header>

				<Block.Content>
					<p>
						There are 15 Labour councillors representing you across Hornsey
						& Wood Green. Find out who is representing your local area.
					</p>
				</Block.Content>
			</Block>

			
			{wards && 
				wards.map( ward => (
					<Block key = { ward.node.id + "-ward" }>
						<Block.Header as = "h4">
							<Link
								to = { `/wards/${ slugify(ward.node.name, {
									lower: true,
								}) }` }
							>
								{ward.node.name}
							</Link>
						</Block.Header>
								
						<Block.Content>
							{ 
								councillors.filter(councillor => {
									return (
										councillor.node.ward.id === ward.node.id
									);
								}) 
									? (
										<Grid columns = { 3 }>
											<Row>
												{councillors
													.filter(councillor => {
														return (
															councillor.node.ward.id === ward.node.id
														);
													})
													.map(councillor => (
														<Column
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
														</Column>
													))}
											</Row>
										</Grid>
									) : (
										<div>
												There are currently no Labour councillors in
												this ward.
										</div>
									)
							}
						</Block.Content>
					</Block>
				))
			}
		</Page>
	);
};

Councillors.propTypes = {
	data: PropTypes.shape({
		contentfulWards: PropTypes.object,
		contentfulCandidates: PropTypes.object,
	}),
};

export default Councillors;
