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

export const WhatsOnQuery = graphql`
	query WhatsOnQuery {
		contentfulEvents: allContentfulEvent {
			edges {
				node {
					id
					title
					description
					socialEvent
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
				<Header as = "h1">What's On</Header>

				<p style = { { fontSize: "1.33em", } }>Get involved with Labour</p>

				<Divider
					as = "h4"
					className = "header"
					horizontal
					style = { { margin: "3em 0em", textTransform: "uppercase", } }
				>
					Upcoming events
				</Divider>

				<Grid columns = { 2 }>
					{props.data.contentfulEvents.edges
						.filter(event => event.node.socialEvent === false )
						.sort(function(a, b) {
							return (
								new Date(b.node.publishingDate) -
								new Date(a.node.publishingDate)
							);
						})
						.map(event => (
							<Grid.Row key = { event.node.id + "-event" }>
								<Grid.Column>
									<NewsThumbnail
										src = {
											"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
											event.node.image.file.url
										}
										as = { Link }
										size = "medium"
										to = { "/events/" + slugify(event.node.title) }
									/>
								</Grid.Column>

								<Grid.Column>
									<Header as = "h4">
										{event.node.title}
									</Header>

									<p>{event.node.description}</p>

									<Button
										as = { Link }
										size = "small"
										to = { "/events/" + slugify(event.node.title) }
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
