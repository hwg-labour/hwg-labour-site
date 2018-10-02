import { graphql, } from "graphql";
import {
	Page,
	Block,
	Section,
	Button,
} from "hwg-labour-components";

import banner from "../images/banner-1.jpg";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";


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

// ----------------------------------------------------

const Wards = ( { data, }, ) => (
	<Page banner = { banner }>
		<Block>
			<Block.Header>
				Your wards
			</Block.Header>
		</Block>


		<Block>
			<Block.Header as = "h3">
				Find your ward
			</Block.Header>

			<Block.Content>
				<p>
					If you don't know which is your local ward, you can use the
					ward-finder tool below.
				</p>

				<Button
					size = "huge"
					as = { "a" }
					to = "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward"
				>
					Find your ward
				</Button>
			</Block.Content>
		</Block>

		<Section>
			<Section.Container>
				{data.contentfulWards.edges
					.sort((x, y) => {
						return x.node.name.toUpperCase() <
							y.node.name.toUpperCase()
							? -1
							: 1;
					})
					.map(ward => (
						<Section.Row key = { ward.node.id + "-newsitem" }>
							<Section.Column>
								<WardThumbnail
									src = {
										"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
										ward.node.image.file.url
									}
									as = { Link }
									to = { "/wards/" + slugify(ward.node.name) }
								/>
							</Section.Column>

							<Section.Column>
								<h3>{ward.node.name}</h3>

								<Button
									as = { Link }
									size = "small"
									to = { "/wards/" + slugify(ward.node.name) }
								>
									See more <Icon name = "right arrow" />
								</Button>
							</Section.Column>
						</Section.Row>
					))
				}
			</Section.Container>
		</Section>
	</Page>
);

Wards.propTypes = {
	data: PropTypes.shape({
		contentfulWards: PropTypes.object,
	}),
};

export default Wards;
