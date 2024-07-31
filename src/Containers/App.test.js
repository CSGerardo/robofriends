import { shallow } from 'enzyme';
import React from 'react';
import App from "./App.js";

it("expect to render App component", ()=> {
    const mockStore={
        robots: [],
        searchField: ""
    }
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});