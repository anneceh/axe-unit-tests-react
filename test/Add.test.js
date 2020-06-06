import Add from '../src/components/Add';
import axe from 'axe-core';
import { mountToDoc } from './setup';

let wrapper;
let addNode;

const config = {
  rules: {
    'color-contrast': { enabled: false }
  },
  runOnly: {
    values: ["wcag2a", "wcag2aa"]
  },
  resultTypes: ["violations"]
};

beforeEach(() => {
    wrapper = mountToDoc(<Add />);
    addNode = wrapper.getDOMNode();
});

describe('<Add /> ', () => {
    it('has no axe violations', async () => {
      const res = await axe.run(addNode, config)

      if (res.violations.length > 0) {
        console.log(res.violations)
      }

      expect(res.violations.length).toEqual(0)
    });
});
