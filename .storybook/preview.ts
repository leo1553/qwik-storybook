import { QWIK_LOADER } from '@builder.io/qwik/loader/index';
import { JSXNode, render } from '@builder.io/qwik';

eval(QWIK_LOADER);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  ((Story: () => JSXNode) => {
    const parent = document.createElement('div');
    const jsxNode = Story();
    render(parent, jsxNode);
    return parent;
  })
];
