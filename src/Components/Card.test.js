import { shallow } from 'enzyme';
import React from 'react';
import Card from "./Card.js";

// it("expect to render Card component", ()=> {
//     expect(shallow(<Card />).length).toEqual(1);
// });

it("expect to render Card component", ()=> {
    expect(shallow(<Card />)).toMatchSnapshot();
});
