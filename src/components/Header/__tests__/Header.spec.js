import Header from "../index";
import React from "react";
import { shallow } from "enzyme";

describe("Header", () => {
  it("renders component", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
