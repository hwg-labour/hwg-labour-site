import { div, Divider, H3, Header, div, } from "../components/toolbox";
import { NewsItem, } from "../components/ListItems";
import { TopImage, } from "../components/TopImage";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const GroupItemQuery = graphql`
	query GroupItemQuery($id: String!) {
		contentfulGroup(id: { eq: $id }) {
			id
			name
			description {
				description
			}
			image {
				file {
					url
				}
			}
		}
		contentfulNews: allContentfulNews {
			edges {
				node {
					title
					description {
						description
					}
					publishingDate
					image {
						file {
							url
						}
					}
					groupRef {
						id
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const GroupTemplate = ( { data, }, ) => {
	const group = data.contentfulGroup;

	const news =
		data.contentfulNews &&
		data.contentfulNews.edges.filter(
			newsItem =>
				newsItem.node.groupRef
					? newsItem.node.groupRef.id === group.id
					: false,
		);

	console.log(group.id, data.contentfulNews);

	return (
		<Page
			banner = {
				"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
			group.image.file.url
			}>
			<Block>
				<Block.Header>
					{group.name}
				</Block.Header>

				<Block.Content>
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(group.description.description),
						} }
					/>
				</Block.Content>
			</Block>
					
			<Block>
				<Block.Header as = "h3">
					Recent News
				</Block.Header>

				<Block.Content>
					{news.length >= 1 ? (
						<div>
							{news
								.sort(function(a, b) {
									return (
										new Date(b.node.publishingDate) -
										new Date(a.node.publishingDate)
									);
								})
								.map( newsItem => (
									<NewsItem news = { newsItem.node } />
								))}
						</div>
					)
						: <div>No recent news</div>
					}
				</Block.Content>
			</Block>
		</Page>
	);
};

GroupTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulGroup: PropTypes.object,
		contentfulNews: PropTypes.object,
	}),
};

export default GroupTemplate;
