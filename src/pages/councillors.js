import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import slugify from "slugify";

import {
	Container,
	Divider,
	Grid,
	Header,
	Image,
	Segment,
} from "semantic-ui-react";

import profileImage from "../images/profile-pic.png";

// ----------------------------------------------------

export const WardAndCandidateQuery = graphql`
	query AllCandidatesQuery {
		contentfulWards: allContentfulWard {
			edges {
				node {
					id
					name
					candidates {
						id
						name
						biography {
							biography
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
	<Segment style = { { padding: "8em 0em", } } vertical>
		<Container text>
			<Header as = "h1">Your Councillors</Header>

			<p>
				Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
				Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
				auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
				dolor auctor. Nullam quis risus eget urna mollis ornare vel eu
				leo.
			</p>

			{props.data.contentfulWards.edges.map(ward => (
				<div key = { ward.node.id + "-ward" }>
					<Divider as = "h4" className = "header" horizontal>
						<Link
							to = { `/wards/${ slugify(ward.node.name, {
								lower: true,
							}) }` }
						>
							{ward.node.name}
						</Link>
					</Divider>

					<Grid columns = { 3 }>
						<Grid.Row>
							{ward.node.candidates &&
								ward.node.candidates.map(councillor => (
									<Grid.Column
										key = { councillor.id + "-councillor" }
										verticalAlign = "middle"
									>
										<Image
											src = {
												councillor.image
													? councillor.image.file.url
													: profileImage
											}
											as = { Link }
											size = "medium"
											to = { `/councillors/${ slugify(
												councillor.name,
												{ lower: true, },
											) }` }
										/>

										<Header as = "h4">
											{councillor.name}
										</Header>
									</Grid.Column>
								))}
						</Grid.Row>
					</Grid>
				</div>
			))}
		</Container>
	</Segment>
);

export default IndexPage;
