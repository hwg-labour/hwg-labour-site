import { TopImage, } from "../components/TopImage";
import {
	div,
	Divider,
	Grid,
	Header,
	Image,
	div,
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
		<Page banner= { banner } />

			<Block>
				<Block.Header>
					Forums and groups
				</Block.Header>
			</Block>

			<Section>
				<Section.Container>
					<Grid columns = { 2 } stackable>
						{
							groups && 
							groups
								.map(group => (
									<Section.Row key = { group.node.id + "-newsitem" }>
										<Section.Column>
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
										</Section.Column>

										<Section.Column>
											<h3>{group.node.name}</h3>

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
										</Section.Column>
									</Section.Row>
								)
							)
						}
					</Grid>
				</Section.Container>
			</Section>
		</Page>
	);
};

Groups.propTypes = {
	data: PropTypes.shape({
		contentfulGroups: PropTypes.object,
	}),
};


export default Groups;
