import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import slugify from "slugify";

import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-4.jpg";

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

const GroupThumbnail = styled(Image)`
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

export const GroupListQuery = graphql`
	query GroupListQuery {
		contentfulGroups: allContentfulGroup {
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

const GroupDivider = styled(Divider)`
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
					Forums and groups
				</Header>
			</Container>
		</Segment>

		<Segment style = { { padding: "3em 0em", } } vertical>
			<Container text>
				<Grid columns = { 2 }>
					{props.data.contentfulGroups.edges
						.sort((x, y) => {
							return x.node.name.toUpperCase() < y.node.name.toUpperCase()
								? -1
								: 1;
						})
						.map(group => (
							<Grid.Row key = { group.node.id + "-newsitem" }>
								<Grid.Column>
									<GroupThumbnail
										src = { "https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" + group.node.image.file.url }
										as = { Link }
										size = "medium"
										to = { "/groups/" + slugify(group.node.name) }
									/>
								</Grid.Column>

								<Grid.Column>
									<Header as = "h3">
										{group.node.name}
									</Header>

									<Button
										as = { Link }
										size = "small"
										to = { "/groups/" + slugify(group.node.name) }
									>
										See more <Icon name = "right arrow" />
									</Button>
								</Grid.Column>

								<GroupDivider section />
							</Grid.Row>
						))
					}
				</Grid>
			</Container>
		</Segment>
	</div>
);

export default IndexPage;
