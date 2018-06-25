import { Button, Divider, Grid, Header, Icon, Image, } from "semantic-ui-react";

import Link from "gatsby-link";
import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// ----------------------------------------------------

const NewsThumbnail = styled(Image)`
	.ui.label {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 0;
		font-size: 1.33em;
	}
`;

const NewsDivider = styled(Divider)`
	width: 100%;
`;

// ----------------------------------------------------

const NewsItem = ( { news, } ) => (
	<Grid.Row key = { news.id + "-news" }>
		<Grid.Column>
			<NewsThumbnail
				src = {
					"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
					news.image.file.url
				}
				as = { Link }
				to = { "/news/" + slugify(news.title) }
			/>
		</Grid.Column>

		<Grid.Column>
			<Header as = "h3">{news.title}</Header>

			<p style = { { color: "#aaaaaa", } }>
				{Moment(news.publishingDate).format("MMMM Do YYYY")}
			</p>

			<p>{news.description.description}</p>

			<Button
				as = { Link }
				size = "small"
				to = { "/news/" + slugify(news.title) }
			>
				Read more <Icon name = "right arrow" />
			</Button>
		</Grid.Column>

		<NewsDivider section />
	</Grid.Row>
);

NewsItem.propTypes = {
	news: PropTypes.object,
};

export { NewsItem, };
