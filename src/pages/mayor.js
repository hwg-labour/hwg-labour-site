import { graphql, } from "graphql";
import { 
	Page,
	Block,
	Button,
} from "hwg-labour-components";

import React from "react";

// ----------------------------------------------------

// ----------------------------------------------------

const Mayor = () => (
	<Page>
		<Section>
			<Section.Container>
				<Section.Row>
					<Section.Column>
						<h3>Your Mayor</h3>

						<h1>Sadiq Khan</h1>

						<p>
							My vision for London is simple - I want all Londoners to have
							the same opportunities that our city gave me: a home they can
							afford, a highly-skilled job with decent pay, an affordable and
							modern transport system and a safe, clean and healthy
							environment.
						</p>
					</Section.Column>
				</Section.Row>

				<Section.Row>
					<Section.Column>
						<p>
							London is the greatest city in the world. But I want to make it
							even better.
						</p>

						<p>
							Too many people in our city don’t have a job, or get paid less
							than they need to survive. With my programme for business and
							the economy I will change that.
						</p>

						<p>
							Too many Londoners can’t afford to buy their own home or are
							trapped paying extortionate rents to sub-standard landlords. My
							plan for housing will change that.
						</p>

						<p>
							Too many people are the victims of crime and don’t feel safe in
							their communities. My policies for crime and policing, and my
							six point plan to tackle knife crime will change that.
						</p>

						<p>
							Too many workers in London have to go to work on overcrowded,
							delayed, dirty transport. My plans for transport will change
							that.
						</p>

						<p>
							For too long Londoners have had a Tory Mayor who has been little
							more than a figurehead, or chief ribbon-cutter. Some of it has
							been fun – but it is not good enough for our city.
						</p>

						<p>There is so much more to do.</p>

						<p>
							The Mayor should be fighting at every turn for better homes,
							better policing, better transport and an economy that works for
							business and for workers. The Mayor should strain every sinew so
							that every Londoner can have the opportunities that so many of
							us take for granted but so many still do not receive. Please
							give me the chance to be that Mayor.
						</p>

						<Button as = "a" size = "large" href = "https://www.london.gov.uk/">
							Visit the London Mayor's website
						</Button>
					</Section.Column>
				</Section.Row>
			</Section.Container>
		</Section>
	</Page>
);

export default Mayor;
