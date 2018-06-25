import Link from "gatsby-link";
import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

import {
	Button,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
} from "semantic-ui-react";

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

const EventItem = ( { event, }, ) => (
	<Grid.Row key = { event.node.id + "-newsitem" }>
		<Grid.Column>
			<NewsThumbnail
				src = {
					"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
					event.node.image.file.url
				}
				as = { Link }
				to = {
					"/events/" +
					slugify(event.node.title)
				}
			/>
		</Grid.Column>

		<Grid.Column>
			<Header as = "h3">
				{event.node.title}
			</Header>

			<p style = { { color: "#aaaaaa", } }>
				{Moment(event.node.date).format(
					"MMMM Do YYYY",
				)}
			</p>

			{event.node.membersOnly && (
				<p style = { { color: "#aaaaaa", } }>
					Members only
				</p>
			)}

			<p>{event.node.description}</p>

			<Button
				as = { Link }
				size = "small"
				to = {
					"/events/" +
					slugify(event.node.title)
				}
			>
				Read more{" "}
				<Icon name = "right arrow" />
			</Button>
		</Grid.Column>

		<NewsDivider section />
	</Grid.Row>
);

EventItem.propTypes = {
	event: PropTypes.object,
};

export { EventItem, };