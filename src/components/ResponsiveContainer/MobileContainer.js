import React, { Component, } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import HomepageHeading from "../HomepageHeading";

import logo from "../../images/logo.png";

import {
	Button,
	Container,
	Icon,
	Image,
	Menu,
	Responsive,
	Segment,
	Sidebar,
} from "semantic-ui-react";

// ----------------------------------------------------

export default class MobileContainer extends Component {
	state = {};

	handleToggle = () =>
		this.setState({ sidebarOpened: !this.state.sidebarOpened, });

	render() {
		const { children, } = this.props;
		const { sidebarOpened, } = this.state;

		return (
			<Responsive { ...Responsive.onlyMobile }>
				<Sidebar.Pushable>
					<Sidebar
						as = { Menu }
						animation = "uncover"
						visible = { sidebarOpened }
						inverted
						vertical
					>
						<Menu.Item
							as = { Link }
							to = "/new-members/"
							content = "News"
						/>

						<Menu.Item
							as = { Link }
							to = "/whats-on/"
							content = "What's On"
						/>

						<Menu.Item
							as = { Link }
							to = "/volunteering/"
							content = "Volunteering"
						/>

						<Menu.Item
							as = "a"
							href = "https://donation.labour.org.uk/page/contribute/donate-fa/"
							content = "Donate"
						/>

						<Menu.Item
							as = { Link }
							to = "/newsletter/"
							content = "Newsletter"
						/>

						<Menu.Item
							as = { Link }
							to = "/wards/"
							content = "Your Wards"
						/>

						<Menu.Item as = { Link } to = "/people/" content = "People" />

						<Menu.Item as = { Link } to = "/news/" content = "News" />

						<Menu.Item
							as = "a"
							href = "https://medium.com/hornsey-and-wood-green-labour"
							content = "Thoughts"
						/>

						<Menu.Item
							as = { Link }
							to = "/contact-us/"
							content = "Contact Us"
						/>
					</Sidebar>

					<Sidebar.Pusher
						dimmed = { sidebarOpened }
						onClick = { this.handleToggle }
						style = { { minHeight: "100vh", } }
					>
						<Segment
							color = "red"
							inverted
							textAlign = "center"
							style = { { padding: "1em 0em", } }
							vertical
						>
							<Container>
								<Menu
									inverted
									pointing
									secondary
									size = "large"
									style = { { border: "none", } }
								>
									<Menu.Item onClick = { this.handleToggle }>
										<Icon name = "sidebar" />
									</Menu.Item>

									<Menu.Item as = { Link } to = "/">
										<Image
											size = "mini"
											src = { logo }
											style = { { width: "100px", } }
										/>
									</Menu.Item>

									<Menu.Item position = "right">
										<Button
											as = "a"
											inverted
											href = "https://join.labour.org.uk/"
										>
											Join
										</Button>
									</Menu.Item>
								</Menu>
							</Container>

							{this.props.homepage && <HomepageHeading mobile />}
						</Segment>

						{children}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node,
};
