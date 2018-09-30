import {
	div,
	Divider,
	Grid,
	Header,
	Image,
	div,
} from "../components/toolbox";
import { NewsItem, } from "../components/ListItems";
import { TopImage, } from "../components/TopImage";

import Link from "gatsby-link";
import marked from "marked";
import profileImage from "../images/profile-pic.png";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";

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
		contentfulNews: allContentfulNews {
			edges {
				node {
					title
					description {
						description
					}
					publishingDate
					image {
						file {
							url
						}
					}
					wardRef {
						id
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

// ----------------------------------------------------

const WardTemplate = ( { data, }, ) => {
	const ward = data.contentfulWard;

	const candidates =
		data.contentfulCandidates &&
		data.contentfulCandidates.edges.filter(
			candidate => candidate.node.ward.id === ward.id,
		);

	const news =
		data.contentfulNews &&
		data.contentfulNews.edges.filter(
			newsItem =>
				newsItem.node.wardRef
					? newsItem.node.wardRef.id === ward.id
					: false,
		);

	return (
		<Page banner = {
			"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
				ward.image.file.url
		}>
			<Block>
				<Block.Header>
					{ward && ward.name}
				</Block.Header>

				<Block.Content>
					<div
						dangerouslySetInnerHTML = {
							ward && {
								__html: marked(ward.description.description),
							}
						}
					/>
				</Block.Content>
			</Block>

			<Block>
				<Block.Header as = "h4">
					Your Councillors
				</Block.Header>

				<Block.Content>
					{ ( candidates && candidates.length ) >= 1 ? (
						<Grid columns = { 3 }>
							<Row>
								{candidates &&
									candidates
										.sort((x, y) => {
											return x.node.name.toUpperCase() <
												y.node.name.toUpperCase()
												? -1
												: 1;
										})
										.map(councillor => {
											return (
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
											);
										})}
							</Row>
						</Grid>
					) : (
						<div>
							There are currently no Labour Councillors in this
							ward.
						</div>
					)}
				</Block.Content>
			</Block>

			<Block>
				<Block.Header as = "h4">
					Recent News
				</Block.Header>

				<Block.Content>
					{news.length >= 1 ? (
						<Grid columns = { 2 } stackable>
							{news
								.sort(function(a, b) {
									return (
										new Date(b.node.publishingDate) -
										new Date(a.node.publishingDate)
									);
								})
								.map(newsItem => (
									<NewsItem news = { newsItem.node } />
								))}
						</Grid>
					)
						: <div>No recent news</div>
					}
				</Block.Content>
			</Block>
		</Page>
	);
};

WardTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulCandidates: PropTypes.object,
		contentfulGroup: PropTypes.object,
		contentfulWard: PropTypes.object,
	}),
};

export default WardTemplate;
