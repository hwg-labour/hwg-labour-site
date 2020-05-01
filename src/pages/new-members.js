import React from "react";
import Link from "gatsby-link";

import { TopImage, } from "../components/TopImage";

import banner from "../images/banner-1.jpg";

import { Button, Container, Header, Segment, } from "../components/toolbox";





const NewMembers = () => (
	<div>
		<TopImage src = { banner } />

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1" style = { { fontSize: "2em", } }>
					New Members
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					Welcome to the Hornsey and Wood Green Constituency Labour Party (HWGCLP).
				</p>

				<p>
					We are a friendly enthusiastic group of campaigners who form
					the largest CLP in the country. We will support you every
					step of the way if you are new to campaigning, make sure you
					are involved in the many social events that take place
					during the year and look forward to seeing you at our ward
					and general meetings.
				</p>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h2" style = { { fontSize: "2em", } }>
					Join the Labour Party
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					If you're not yet a Labour member, you can join{" "}
					
					<a href = "https://join.labour.org.uk/">here</a>, to help us campaign for a fairer Britain.
				</p>

				<Button size = "huge" as = { "a" } to = "https://join.labour.org.uk/">
					Join now
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h2" style = { { fontSize: "2em", } }>
					Find your ward
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					Hornsey and Wood Green is divided into 10 wards. If you don't know which is your local ward, you can use the ward-finder tool below.
				</p>

				<Button
					size = "huge"
					as = { "a" }
					to = "http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward"
				>
					Find your ward
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h2" style = { { fontSize: "2em", } }>
					Campaign with us
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					The best way to get involved is by coming along to one of our campaign events!
				</p>

				<Button size = "huge" as = { Link } to = "/campaigning">
					Campaign with us
				</Button>
			</Container>
		</Segment>

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h2" style = { { fontSize: "2em", } }>
					Social events
				</Header>

				<p style = { { fontSize: "1.33em", } }>
					Getting involved with the Labour party is a great way of meeting like-minded, active local residents.
				</p>

				<Button size = "huge" as = { Link } to = "/whats-on">
					What's on
				</Button>
			</Container>
		</Segment>
	</div>
);

export default NewMembers;
