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
} from "../toolbox";

// ----------------------------------------------------

const EventThumbnail = styled(Image)`
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

const NewsDivider = styled(Divider)`
	width: 100%;
`;

// ----------------------------------------------------

const EventItem = ( { event, }, ) => (
	<Grid.Row key = { event.node.id + "-newsitem" }>
		<Grid.Column>
			<EventThumbnail
				src = {
					event.node.image ?
						`https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:
					${ event.node.image.file.url }` : 
					"https://images.ctfassets.net/j8b2h64cwsnc/1ZTuenkUXyQ2Ysg2yi2q2S/13fd01df20e971e456e7763413b01d0f/Artboard_1.png"
				}
				as = { Link }
				to = {
					"/events/" +
					slugify(event.node.title, { lower: true })
				}
			/>
		</Grid.Column>

		<Grid.Column>
			<Link
				to = {
					"/events/" +
					slugify(event.node.title, { lower: true })
				}
			>
				<Header as = "h3">
					{event.node.title}
				</Header>
			</Link>

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
					slugify(event.node.title, { lower: true })
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