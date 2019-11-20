import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './containers/Weather';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
  ReactDOM.unmountComponentAtNode(div);
});
