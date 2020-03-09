import Footer from "../index";
import React from "react";
import { shallow } from "enzyme";

describe.skip("Footer", () => {
  it("renders component", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
