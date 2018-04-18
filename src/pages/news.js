import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import slugify from "slugify";
import Moment from "moment";

import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	Segment,
} from "semantic-ui-react";

// ----------------------------------------------------

const NewsThumbnail = styled(Image)`
	.ui.label {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 0;
		font-size: 1.33em;
	}
`;

const NewsDivider = styled(Divider)`
	width: 100%;
`;

// ----------------------------------------------------

export const NewsQuery = graphql`
	query NewsQuery {
		contentfulNews: allContentfulNews {
			edges {
				node {
					id
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
				}
			}
		}
	}
`;

// ----------------------------------------------------

const IndexPage = props => (
	<div>
		<Segment vertical style = { { padding: "8em 0em", } }>
			<Container text>
				<Header as = "h1">News</Header>

				<p style = { { fontSize: "1.33em", } }>
					Stay up to date with the latest local Labour news.
				</p>

				<Divider
					as = "h4"
					className = "header"
					horizontal
					style = { { margin: "3em 0em", textTransform: "uppercase", } }
				>
					Recent News
				</Divider>

				<Grid columns = { 2 } stackable>
					{props.data.contentfulNews.edges
						.sort(function(a, b) {
							return (
								new Date(b.node.publishingDate) -
								new Date(a.node.publishingDate)
							);
						})
						.map(newsItem => (
							<Grid.Row key = { newsItem.node.id + "-newsitem" }>
								<Grid.Column>
									<NewsThumbnail
										src = { "https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" + newsItem.node.image.file.url }
										as = { Link }
										to = { "/news/" + slugify(newsItem.node.title) }
									/>
								</Grid.Column>

								<Grid.Column>
									<Header as = "h3">
										{newsItem.node.title}
									</Header>

									<p style = { { color: "#cccccc", }}>{ Moment(newsItem.node.publishingDate).format('MMMM Do YYYY') }</p>

									<p>
										{newsItem.node.description.description}
									</p>

									<Button
										as = { Link }
										size = "small"
										to = { "/news/" + slugify(newsItem.node.title) }
									>
										Read more <Icon name = "right arrow" />
									</Button>
								</Grid.Column>

								<NewsDivider section />
							</Grid.Row>
						))}
				</Grid>
			</Container>
		</Segment>
	</div>
);

export default IndexPage;
