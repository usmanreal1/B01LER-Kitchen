import { html } from 'lit-html';
import { BlrDividerType } from './index';
import { BlrDividerRenderFunction } from './renderFunction';
import { DividerVariations } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

// this loads the all components instances and registers their html tags
import '../../../index';

export default {
  title: 'Design System/Web Components/UI/Divider',
  argTypes: {
    directionVariant: {
      options: DividerVariations,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A127845&mode=dev',
    },
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrDivider = (params: BlrDividerType) => html`
  <div style="width: 100%; height: 100px; display: inline-block;">${BlrDividerRenderFunction(params)}</div>
`;

BlrDivider.storyName = 'Divider';

const args: BlrDividerType = {
  directionVariant: 'horizontal',
  theme: 'Light',
};

BlrDivider.args = args;
