import { Section, getChildrenByType } from '../toolbox';

import PropTypes from 'prop-types';
import React from 'react';

const Block = (props) => {
	return (
		<Section>
			<Section.Container>
				<Section.Row>
					<Section.Column>
						{getChildrenByType(Header, children)[0]}
					</Section.Column>
				</Section.Row>

				<Section.Row>
					<Section.Column>
						{getChildrenByType(Content, children)[0]}
					</Section.Column>
				</Section.Row>
			</Section.Container>
		</Section>
	);
};

Block.Header = Header
Block.Content = Content

Block.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export { Block, };