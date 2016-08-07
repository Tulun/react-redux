import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests.
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  // Use 'it' to test a single attribute of a target.
  it('renders something', () => {
    // Use 'expect' to make an 'assertion' about a target.
    expect(component).to.exist;
  });

  it('Shows the correct text', () => {
    expect(component).to.contain('React simple starter');
  });

});

