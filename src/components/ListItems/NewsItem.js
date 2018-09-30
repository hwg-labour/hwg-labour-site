import { 
	Button,
	Divider,
	Section,
	div,
	Row,
	Column,
	Header,
	Icon,
	Image, 
} from "../toolbox";

import Link from "gatsby-link";
import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// ----------------------------------------------------

const NewsThumbnail = styled(Image)`
	.ui.image {
		display: flex;
	}

	img {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		border-radius: 0;
		font-size: 1.33em;
		max-height: 250px;
		height: 100%;
		object-fit: contain;
	}
`;

// ----------------------------------------------------

const NewsItem = ( { news, } ) => (
	<Section>
		<div>
			<Row key = { news.id + "-news" }>
				<Column>
					<NewsThumbnail
						src = {
							( news.image ) ?
								`https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:
							${ news.image.file.url }` : "https://images.ctfassets.net/j8b2h64cwsnc/jYzRGcSiDQksQC2SQQSoy/77f3eddbf1cece8f652c8f6cf0752a42/Artboard_1.png"
						}
						as = { Link }
						to = { "/news/" + slugify(news.title) }
					/>
				</Column>

				<Column>
					<Link to = { "/news/" + slugify(news.title) }>
						<h3>{news.title}</Header>
					</Link>

					<p>
						{ Moment(news.publishingDate).format("MMMM Do YYYY") }
					</p>

					<p>{news.description.description}</p>

					<Button
						as = { Link }
						size = "small"
						to = { "/news/" + slugify(news.title) }
					>
						Read more <Icon name = "right arrow" />
					</Button>
				</Column>
			</Row>

			<Divider section />
		</div>
	</Section>
);

NewsItem.propTypes = {
	news: PropTypes.object,
};

export { NewsItem, };
