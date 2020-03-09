import React from "react";
import PropTypes from "prop-types";

import "semantic-ui-css/semantic.min.css";

import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";

export const MenuGroupsAndWards = graphql`
  query MenuGroupsWardsEvents {
    contentfulWards: allContentfulWard {
      edges {
        node {
          id
          name
        }
      }
    }
    contentfulGroups: allContentfulGroup {
      edges {
        node {
          id
          name
        }
      }
    }
    contentfulEvents: allContentfulEvent {
      edges {
        node {
          title
          date
          socialEvent
        }
      }
    }
  }
`;

const TemplateWrapper = ({ location, data, children, ...props }) => (
  <Header
    candidates={data.contentfulCandidates}
    groups={data.contentfulGroups}
    homepage={location.pathname === "/"}
    wards={data.contentfulWards}
  >
    <Head />

    {children(...props)}

    <Footer events={data.contentfulEvents} />
  </Header>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any,
  location: PropTypes.any
};

export default TemplateWrapper;
