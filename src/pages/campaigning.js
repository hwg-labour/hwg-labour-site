import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import slugify from "slugify";
import Moment from "moment";

import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-2.jpg";

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

export const CampaigningQuery = graphql`
	query CampaigningQuery {
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
				<Header as = "h1">Campaigning</Header>

				<p style = { { fontSize: "1.33em", } }>
					Get involved with Labour on the doorstep and share our message. You will find campaigning activities, like street stalls and door knocking sessions, here. Let us know if you'd like to get involved!
				</p>

				<Button size = "huge" as = { Link } to = "/contact-us">
					Get in touch
				</Button>

				<Divider
					as = "h4"
					className = "header"
					horizontal
					style = { { margin: "3em 0em", textTransform: "uppercase", } }
				>
					Upcoming events
				</Divider>

				<Grid columns = { 2 } stackable>
					{props.data.contentfulEvents.edges
						.filter(event => event.node.socialEvent === false )
						//.filter(event => new Date(event.node.date) >= new Date() )
						.sort(function(a, b) {
							return (
								new Date(b.node.date) -
								new Date(a.node.date)
							);
						})
						.map(event => (
							<Grid.Row key = { event.node.id + "-newsitem" }>
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
