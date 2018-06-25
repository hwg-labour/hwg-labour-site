import { Container, Header, Segment, Grid, Image, } from "semantic-ui-react";

import Link from "gatsby-link";
import marked from "marked";
import profileImage from "../images/profile-pic.png";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";


// ----------------------------------------------------

export const CandidateItemQuery = graphql`
	query CandidateItemQuery($id: String!) {
		contentfulCandidate(id: { eq: $id }) {
			name
			image {
				file {
					url
				}
			}
			shortBiography
			biography {
				biography
			}
			email
			telephone
			twitter
			address {
				address
			}
			ward {
				id
				name
			}
		}
	}
`;

// ----------------------------------------------------

const CandidateTemplate = props => (
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Grid columns = { 3 } stackable>
				<Grid.Row>
					<Grid.Column width = { 6 }>
						<Image
							src = { `
								${
	props.data.contentfulCandidate.image
		? "https://res.cloudinary.com/codogo/image/fetch/h_530,w_430,c_fill,g_face,f_auto/https:" +
											props.data.contentfulCandidate.image
												.file.url
		: profileImage
	}` }
						/>
					</Grid.Column>

					<Grid.Column width = { 10 }>
						<Header as = "h1">
							{props.data.contentfulCandidate.name}
						</Header>

						<Link
							to = {
								"/wards/" +
								slugify(
									props.data.contentfulCandidate.ward.name,
								)
							}
							color = "#ababab"
						>
							{props.data.contentfulCandidate.ward.name}
						</Link>

						<br />
						<br />

						<b>
							<div
								dangerouslySetInnerHTML = { {
									__html: marked(
										props.data.contentfulCandidate
											.shortBiography,
									),
								} }
							/>
						</b>

						<br />

						<div
							dangerouslySetInnerHTML = { {
								__html: marked(
									props.data.contentfulCandidate.biography
										.biography,
								),
							} }
						/>

						<br />

						{props.data.contentfulCandidate.email && (
							<p>
								Email:
								<Link
									to = {
										"mailto:" +
										props.data.contentfulCandidate.email
									}
								>
									{props.data.contentfulCandidate.email}
								</Link>
							</p>
						)}

						{props.data.contentfulCandidate.twitter && (
							<p>
								Twitter:
								<Link
									to = {
										"www.twitter.com/" +
										props.data.contentfulCandidate.twitter
									}
								>
									{props.data.contentfulCandidate.twitter}
								</Link>
							</p>
						)}

						{props.data.contentfulCandidate.telephone && (
							<p>
								Telephone:
								<Link
									to = {
										"tel:" +
										props.data.contentfulCandidate.telephone
									}
								>
									{props.data.contentfulCandidate.telephone}
								</Link>
							</p>
						)}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</Segment>
);

CandidateTemplate.propTypes = {
	data: PropTypes.object,
};

export default CandidateTemplate;
