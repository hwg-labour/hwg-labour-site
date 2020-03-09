import { NewsItem } from "../index";
import React from "react";
import { shallow } from "enzyme";

const EVENT = {
  id: "82842695-2c07-42ef-aa7d-6170aea375f0",
  image: {
    file: {
      url: "image.png"
    }
  },
  title: "News EVent Title",
  date: Date(),
  membersOnly: false,
  description: "dsjadhiuashdiashidhasd"
};

describe("NewsItem", () => {
  it("renders component", () => {
    const wrapper = shallow(<NewsItem news={EVENT} />);

    expect(wrapper).toMatchSnapshot();
  });
});
