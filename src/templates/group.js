import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";
import { NewsItem } from "../components/ListItems";
import { TopImage } from "../components/TopImage";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

export const GroupItemQuery = graphql`
  query GroupItemQuery($id: String!) {
    contentfulGroup(id: { eq: $id }) {
      id
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
    contentfulNews: allContentfulNews {
      edges {
        node {
          title
          description {
            description
          }
          publishingDate
          image {
            file {
              url
            }
          }
          groupRef {
            id
          }
        }
      }
    }
  }
`;

const GroupTemplate = ({ data }) => {
  const group = data.contentfulGroup;

  const news =
    data.contentfulNews &&
    data.contentfulNews.edges.filter(newsItem =>
      newsItem.node.groupRef ? newsItem.node.groupRef.id === group.id : false
    );

  console.log(group.id, data.contentfulNews);

  return (
    <div>
      {group.image && (
        <TopImage
          src={
            "https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
            group.image.file.url
          }
        />
      )}

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h1">{group.name}</Header>

          <div
            dangerouslySetInnerHTML={{
              __html: marked(group.description.description)
            }}
          />

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{
              margin: "3em 0em",
              textTransform: "uppercase"
            }}
          >
            Recent News
          </Divider>

          {news.length >= 1 ? (
            <Grid columns={2} stackable>
              {news
                .sort(function(a, b) {
                  return (
                    new Date(b.node.publishingDate) -
                    new Date(a.node.publishingDate)
                  );
                })
                .map(newsItem => (
                  <NewsItem news={newsItem.node} />
                ))}
            </Grid>
          ) : (
            <div>No recent news</div>
          )}
        </Container>
      </Segment>
    </div>
  );
};

GroupTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulGroup: PropTypes.object,
    contentfulNews: PropTypes.object
  })
};

export default GroupTemplate;
