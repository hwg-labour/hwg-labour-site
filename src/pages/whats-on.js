import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import slugify from "slugify";
import Moment from "moment";

import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-3.jpg";

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
					membersOnly
					date
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
		<TopImage src = { banner }/>

		<Segment vertical style = { { padding: "8em 0em", } }>
			<Container text>
				<Header as = "h1">What's On</Header>

				<p style = { { fontSize: "1.33em", } }>
					Social events are advertised here - get involved with labour in your area!
				</p>

				<p>We are now in full campaign mode for the May 3rd local elections, so we have 
				fewer social events than normal. After May 3rd we'll be back to normal.</p>

				<p>If you're interested in campaigning with us, you can see our campaigns calendar <Link to = "/campaigning">here</Link>.</p>

				<Button size = "huge" as = { Link } to = "/campaigning">
					Campaigning
				</Button>

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
						.filter(event => event.node.socialEvent === true )
						//.filter(event => new Date(event.node.date) >= new Date() )
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
									<Header as = "h3">
										{event.node.title}
									</Header>

									<p style = { { color: "#cccccc", }}>{ Moment(event.node.date).format('MMMM Do YYYY') }</p>

									{ event.node.membersOnly && <p style = { { color: "#cccccc", }}>Members only</p> }

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
