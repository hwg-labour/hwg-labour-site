import Dropdown from "./Dropdown";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import styled from "styled-components";

const LinksWrapper = styled.div`
	align-items: center;
	color: ${ props => props.theme.colors.link };
	justify-content: center;
	left: 0;
	margin: auto;
	position: absolute;
	right: 0;
`;

const LinksContainer = styled.div`
	display: flex;
	bottom: 0;
	width: 100%;
	max-width: ${ props => props.theme.breakpoints.lg.min }px;
	flex-direction: column;
`;

const LinkWrapper = styled.div`
	position: relative;
`;

const StyledLink = styled(Link)`
`;

const DropdownArrow = styled.span`
	margin-left: 0.5em;
	font-size: 0.8em;
`;

const StyledAnchor = styled.a`

`;

const LinkSwitch = ({as, to, content, dropdown}) => {
	if(as === 'gatsby-link') {
		return <StyledLink
			to = { to }
			activeClassName = "active"
			exact
		>
			{ content }

			{ dropdown && <DropdownArrow>▼</DropdownArrow> }
		</StyledLink>
	}
	
	return <StyledAnchor
			href={to}
			activeClassName = "active"
		>
			{content}

			{ dropdown && <DropdownArrow>▼</DropdownArrow> }
		</StyledAnchor>
}

const Links = (props) => {
	const { links, close, open, } = props;

	return (
		<LinksWrapper open = { open }>
			<LinksContainer>
				{
					links && links.map( link => {
						return (
							<LinkWrapper key = { link.to } onClick = { close }>
								<LinkSwitch {...link}/>

								{ 
									link.dropdown && <Dropdown links = { link.dropdown } />
								}
							</LinkWrapper>
						);
					})
				}
			</LinksContainer>
		</LinksWrapper>
	);
};

Links.propTypes = {
	close: PropTypes.func,
	links: PropTypes.array,
	open: PropTypes.bool,
};

export default Links;
