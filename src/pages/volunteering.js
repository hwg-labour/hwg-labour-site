import { graphql, } from "graphql";
import { 
	Page,
	Block,
	Button,
} from "hwg-labour-components";

import banner from "../images/banner-4.jpg";
import React from "react";

// ----------------------------------------------------

// ----------------------------------------------------

const Volunteering = () => (
	<Page banner = { banner }>
		<Block>
			<Block.Header>
				Volunteering
			</Block.Header>

			<Block.Content>
				<p>
					We welcome all volunteers, whatever your skill-set or interests!
				</p>

				<p>
					We need people for leaflet delivery, doorstep campaigning, street stalls, phoning potential voters, envelope stuffing and many other tasks.
				</p>

				<p>
					If you have specialist skills, such as in IT, marketing or design, we would like to hear from you.
				</p>

				<Button size = "huge" as = { Link } to = "/contact-us">
					Get in touch
				</Button>
			</Block.Content>
		</Block>
	</Page>
);

export default Volunteering;
