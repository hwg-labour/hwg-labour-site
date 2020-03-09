import Footer from "../index";
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

describe("Footer", () => {
  it("renders component", () => {
    const wrapper = shallow(<Footer events={EVENTS_MOCK} />);

    expect(wrapper).toMatchSnapshot();
  });
});
