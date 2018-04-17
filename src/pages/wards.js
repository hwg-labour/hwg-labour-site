import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import slugify from "slugify";

import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-1.jpg";

import {
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
	Button,
	Icon,
} from "semantic-ui-react";

import profileImage from "../images/profile-pic.png";

// ----------------------------------------------------

const WardThumbnail = styled(Image)`
	.ui.label {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 0;
		font-size: 1.33em;
	}
`;

// ----------------------------------------------------

export const WardListQuery = graphql`
	query WardListQuery {
		contentfulWards: allContentfulWard {
			edges {
				node {
					id
					name
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

const WardDivider = styled(Divider)`
	width: 100%;
	margin: 3em 0em;
	text-transform: uppercase;
`;

// ----------------------------------------------------

const IndexPage = props => (
	<div>
		<TopImage src = { banner }/>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1" style = { { fontSize: "2em", } }>
					Your wards
				</Header>

				<Header as = "h3">
					Find your ward
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					If you don't know which is your local ward, you can use the ward-finder tool below.
				</p>

				<Button size = "huge" as = { 'a' } to = "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward">
					Find your ward
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "3em 0em", } } vertical>
			<Container text>
				<Grid columns = { 2 }>
					{props.data.contentfulWards.edges
						.sort((x, y) => {
							return x.node.name.toUpperCase() < y.node.name.toUpperCase()
								? -1
								: 1;
						})
						.map(ward => (
							<Grid.Row key = { ward.node.id + "-newsitem" }>
								<Grid.Column>
									<WardThumbnail
										src = { "https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" + ward.node.image.file.url }
										as = { Link }
										size = "medium"
										to = { "/wards/" + slugify(ward.node.name) }
									/>
								</Grid.Column>

								<Grid.Column>
									<Header as = "h3">
										{ward.node.name}
									</Header>

									<Button
										as = { Link }
										size = "small"
										to = { "/wards/" + slugify(ward.node.name) }
									>
										See more <Icon name = "right arrow" />
									</Button>
								</Grid.Column>

								<WardDivider section />
							</Grid.Row>
						))
					}
				</Grid>
			</Container>
		</Segment>
	</div>
);

export default IndexPage;
