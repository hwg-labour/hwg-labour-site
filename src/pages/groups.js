import { TopImage, } from "../components/TopImage";
import {
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
	Button,
	Icon,
} from "../components/toolbox";

import banner from "../images/banner-4.jpg";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

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

// ----------------------------------------------------

const Groups = ( { data, }, ) => {
	const groups = data.contentfulGroups.edges
		.sort((x, y) => {
			return x.node.name.toUpperCase() <
				y.node.name.toUpperCase()
				? -1
				: 1;
		});

	return (
		<div>
			<TopImage src = { banner } />

			<Segment>
				<Container text>
					<Header as = "h1" style = { { fontSize: "2em", } }>
						Forums and groups
					</Header>
				</Container>
			</Segment>

			<Segment style = { { padding: "3em 0em", } } vertical>
				<Container text>
					<Grid columns = { 2 } stackable>
						{
							groups && 
							groups
								.map(group => (
									<Row key = { group.node.id + "-newsitem" }>
										<Column>
											<GroupThumbnail
												src = {
													"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
													group.node.image.file.url
												}
												as = { Link }
												to = {
													"/groups/" +
													slugify(group.node.name)
												}
											/>
										</Column>

										<Column>
											<Header as = "h3">{group.node.name}</Header>

											<Button
												as = { Link }
												size = "small"
												to = {
													"/groups/" +
													slugify(group.node.name)
												}
											>
												See more <Icon name = "right arrow" />
											</Button>
										</Column>

										<Divider section />
									</Row>
								)
								)
						}
					</Grid>
				</Container>
			</Segment>
		</div>
	);
};

Groups.propTypes = {
	data: PropTypes.shape({
		contentfulGroups: PropTypes.object,
	}),
};


export default Groups;
