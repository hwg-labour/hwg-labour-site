import {
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
} from "semantic-ui-react";
import profileImage from "../images/profile-pic.png";
import { NewsItem, } from "../components/ListItems";
import { TopImage, } from "../components/TopImage";

import Link from "gatsby-link";
import marked from "marked";
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

const WardTemplate = props => {
	const ward = props.data.contentfulWard;

	const candidates =
		props.data.contentfulCandidates &&
		props.data.contentfulCandidates.edges.filter(
			candidate => candidate.node.ward.id === ward.id,
		);

	const news =
		props.data.contentfulNews &&
		props.data.contentfulNews.edges.filter(
			newsItem =>
				newsItem.node.wardRef
					? newsItem.node.wardRef.id === ward.id
					: false,
		);

	return (
		<div>
			{console.log(props)}
			{ward &&
				ward.image && (
				<TopImage
					src = {
						"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
							ward.image.file.url
					}
				/>
			)}

			<Segment style = { { padding: "8em 0em", } } vertical>
				<Container text>
					<Header as = "h1">{ward && ward.name}</Header>

					<div
						dangerouslySetInnerHTML = {
							ward && {
								__html: marked(ward.description.description),
							}
						}
					/>

					<Divider
						as = "h4"
						className = "header"
						horizontal
						style = { {
							margin: "3em 0em",
							textTransform: "uppercase",
						} }
					>
						Your Councillors
					</Divider>

					{candidates && candidates.length >= 1 ? (
						<Grid columns = { 3 }>
							<Grid.Row>
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
											);
										})}
							</Grid.Row>
						</Grid>
					) : (
						<div>
							There are currently no Labour Councillors in this
							ward.
						</div>
					)}

					<Divider
						as = "h4"
						className = "header"
						horizontal
						style = { {
							margin: "3em 0em",
							textTransform: "uppercase",
						} }
					>
						Recent News
					</Divider>

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
				</Container>
			</Segment>
		</div>
	);
};

WardTemplate.propTypes = {
	data: PropTypes.object,
};

export default WardTemplate;
