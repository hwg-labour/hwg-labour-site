import Head from "../index";
import React from "react";
import { shallow } from "enzyme";

const EVENTS_MOCK = {
  edges: [
    {
      node: {
        event: {
          Date
        }
      }
    }
  ]
};

describe("Head", () => {
  it("renders component", () => {
    const wrapper = shallow(<Head events={EVENTS_MOCK} />);

    expect(wrapper).toMatchSnapshot();
  });
});
