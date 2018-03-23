import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import slugify from "slugify";

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
		{console.log(props)}

		<Segment vertical style = { { padding: "8em 0em", } }>
			<Container text>
				<Header as = "h1">News</Header>

				<p style = { { fontSize: "1.33em", } }>
					Integer posuere erat a ante venenatis dapibus posuere velit
					aliquet. Aenean lacinia bibendum nulla sed consectetur.
					Donec id elit non mi porta gravida at eget metus. Cras justo
					odio, dapibus ac facilisis in, egestas eget quam. Integer
					posuere erat a ante venenatis dapibus posuere velit aliquet.
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus
					dolor auctor.
				</p>

				<Divider
					as = "h4"
					className = "header"
					horizontal
					style = { { margin: "3em 0em", textTransform: "uppercase", } }
				>
					Recent News
				</Divider>

				<Grid columns = { 2 }>
					{props.data.contentfulNews.edges.map(newsItem => (
						<Grid.Row key = { newsItem.node.id + "-newsitem" }>
							<Grid.Column>
								<NewsThumbnail
									src = { newsItem.node.image.file.url }
									as = { Link }
									size = "medium"
									to = { slugify(newsItem.node.title) }
								/>
							</Grid.Column>

							<Grid.Column>
								<Header as = "h4">{newsItem.node.title}</Header>

								<p>{newsItem.node.description.description}</p>

								<Button as = "a" size = "small">
									Read more
									<Icon name = "right arrow" />
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
