import { EventItem } from "../index";
import React from "react";
import { shallow } from "enzyme";

const EVENT = {
  node: {
    image: {
      file: {
        url: "image.png"
      }
    },
    title: "Event Title",
    date: Date(),
    membersOnly: false,
    description: "dsjadhiuashdiashidhasd"
  }
};

describe("EventItem", () => {
  it("renders component", () => {
    const wrapper = shallow(<EventItem event={EVENT} />);

    expect(wrapper).toMatchSnapshot();
  });
});
