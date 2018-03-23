import React, { Component, } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import slugify from "slugify";

import HomepageHeading from "../HomepageHeading";

import logo from "../../images/logo.png";
import logoAlt from "../../images/logo-alt.png";

import {
	Button,
	Container,
	Dropdown,
	Image,
	Menu,
	Responsive,
	Segment,
	Visibility,
} from "semantic-ui-react";

// ----------------------------------------------------

export default class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false, });
	showFixedMenu = () => this.setState({ fixed: true, });

	render() {
		const { children, } = this.props;
		const { fixed, } = this.state;

		return (
			<Responsive { ...Responsive.onlyComputer }>
				<Visibility
					once = { false }
					onBottomPassed = { this.showFixedMenu }
					onBottomPassedReverse = { this.hideFixedMenu }
				>
					<Segment
						inverted
						textAlign = "center"
						style = { {
							minHeight: this.props.homepage ? 500 : 0,
							padding: "1em 0em",
							overflow: this.props.homepage ? "hidden" : "show",
							background: "rgba(50, 0, 0, 0.7)",
						} }
						vertical
						color = { this.props.homepage ? "clear" : "red" }
					>
						<Menu
							fixed = { fixed ? "top" : null }
							inverted = { !fixed }
							pointing = { !fixed }
							secondary = { !fixed }
							size = "large"
							style = { { border: "none", } }
						>
							<Container>
								<Menu.Item as = { Link } to = "/">
									<Image
										size = "mini"
										src = { !fixed ? logo : logoAlt }
										style = { { width: "100px", } }
									/>
								</Menu.Item>

								<Dropdown item text = "Get Involved">
									<Dropdown.Menu>
										<Dropdown.Item>
											<Link
												to = "/new-members/"
												className = "ui"
											>
												New Members
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<Link
												to = "/whats-on/"
												className = "ui"
											>
												What's On
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<Link
												to = "/campaigning/"
												className = "ui"
											>
												Campaigning
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<Link
												to = "/volunteering/"
												className = "ui"
											>
												Volunteering
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<a
												href = "https://donation.labour.org.uk/page/contribute/donate-fa/"
												className = "ui"
											>
												Donate
											</a>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown item text = "Your Wards">
									<Dropdown.Menu>
										{this.props.wards.edges.sort( (x, y) => { return x.node.name.toUpperCase() < y.node.name.toUpperCase() ? -1 : 1 } ).map(ward => (
											<Dropdown.Item
												key = { ward.node.id + "-dropdown" }
											>
												<Link
													to = { `/wards/${ slugify(
														ward.node.name,
														{ lower: true, },
													) }` }
													className = "ui"
												>
													{ ward.node.name }
												</Link>
											</Dropdown.Item>
										))}

										<Dropdown.Item>
											<a
												href = "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward"
												className = "ui"
											>
												Find your ward
											</a>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								
								<Dropdown item text = "People">
									<Dropdown.Menu>
										<Dropdown.Item>
											<Link to = "/mp/" className = "ui">
												Catherine West MP
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<Link to = "/am/" className = "ui">
												Joanne McCartney AM
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<Link to = "/mayor/" className = "ui">
												Your Mayor
											</Link>
										</Dropdown.Item>

										<Dropdown.Item>
											<Link
												to = "/councillors/"
												className = "ui"
											>
												Councillor Candidates
											</Link>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Menu.Item
									as = { Link }
									to = "/news/"
									content = "News"
								/>

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

								<Menu.Item position = "right">
									<Button
										as = "a"
										inverted = { !fixed }
										color = { fixed ? "red" : null }
										style = { { marginLeft: "0.5em", } }
										href = "https://join.labour.org.uk/"
									>
										Donate
									</Button>

									<Button
										as = "a"
										inverted = { !fixed }
										color = { fixed ? "red" : null }
										style = { { marginLeft: "0.5em", } }
										href = "https://join.labour.org.uk/"
									>
										Join
									</Button>
								</Menu.Item>
							</Container>
						</Menu>

						{
							this.props.homepage 
							&& <HomepageHeading />
						}
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
};
