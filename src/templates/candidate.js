import { graphql, } from "graphql";
import { 
	Page,
	Section,
} from "hwg-labour-components";

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

const CandidateTemplate = ( { data, }, ) => (
	<Page>
		<Section>
			<Section.Container>
				<Section.Row>
					<Section.Column>
						<Image
							src = { `
								${
	data.contentfulCandidate.image
		? "https://res.cloudinary.com/codogo/image/fetch/h_530,w_430,c_fill,g_face,f_auto/https:" +
																			data.contentfulCandidate.image
																				.file.url
		: profileImage
	}` }
						/>
					</Section.Column>

					<Section.Column>
						<h1>
							{data.contentfulCandidate.name}
						</h1>

						<Link
							to = {
								"/wards/" +
								slugify(
									data.contentfulCandidate.ward.name,
								)
							}
							color = "#ababab"
						>
							{data.contentfulCandidate.ward.name}
						</Link>

						<br />
						<br />

						<b>
							<div
								dangerouslySetInnerHTML = { {
									__html: marked(
										data.contentfulCandidate
											.shortBiography,
									),
								} }
							/>
						</b>

						<br />

						<div
							dangerouslySetInnerHTML = { {
								__html: marked(
									data.contentfulCandidate.biography
										.biography,
								),
							} }
						/>

						<br />

						{data.contentfulCandidate.email && (
							<p>
								<b>{ "Email: "}</b>
								
								<a
									href = {
										"mailto:" +
										data.contentfulCandidate.email
									}
								>
									{ data.contentfulCandidate.email }
								</a>
							</p>
						)}

						{data.contentfulCandidate.twitter && (
							<p>
								<b>{ "Twitter: " }</b>
								
								<a
									href = {
										"https://www.twitter.com/" +
										data.contentfulCandidate.twitter
									}
								>
									{ `@${ data.contentfulCandidate.twitter }` }
								</a>
							</p>
						)}

						{data.contentfulCandidate.telephone && (
							<p>
								<b>{ "Telephone: " }</b>
								
								<a
									href = {
										"tel:" +
										data.contentfulCandidate.telephone
									}
								>
									{ data.contentfulCandidate.telephone }
								</a>
							</p>
						)}
					</Section.Column>
				</Section.Row>
			</Section.Container>
		</Section>
	</Page>
);

CandidateTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulCandidate: PropTypes.object,
	}),
};

export default CandidateTemplate;
