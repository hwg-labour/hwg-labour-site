import banner from "../images/banner-1.jpg";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

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
	Row,
	Column,
	Section,
} from "../components/toolbox";

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
	<div>
		<TopImage src = { banner } />

		<div>
			<div text>
				<Header as = "h1" style = { { fontSize: "2em", } }>
					Your wards
				</Header>

				<h3>Find your ward</Header>

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
			</div>
		</div>

		<div style = { { padding: "3em 0em", } } vertical>
			<div text>
				<Grid columns = { 2 } stackable>
					{data.contentfulWards.edges
						.sort((x, y) => {
							return x.node.name.toUpperCase() <
								y.node.name.toUpperCase()
								? -1
								: 1;
						})
						.map(ward => (
							<Row key = { ward.node.id + "-newsitem" }>
								<Column>
									<WardThumbnail
										src = {
											"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
											ward.node.image.file.url
										}
										as = { Link }
										to = { "/wards/" + slugify(ward.node.name) }
									/>
								</Column>

								<Column>
									<h3>{ward.node.name}</Header>

									<Button
										as = { Link }
										size = "small"
										to = { "/wards/" + slugify(ward.node.name) }
									>
										See more <Icon name = "right arrow" />
									</Button>
								</Column>

								<Divider section />
							</Row>
						))}
				</Grid>
			</div>
		</div>
	</div>
);

Wards.propTypes = {
	data: PropTypes.shape({
		contentfulWards: PropTypes.object,
	}),
};

export default Wards;
