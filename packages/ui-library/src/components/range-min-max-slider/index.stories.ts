/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrRangeMinMaxSliderType, BlrRangeMinMaxSliderRenderFunction } from './index';
import { Sizes } from '../../globals/constants';
import './index';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/InputSlider',
  argTypes: {
    incrementIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    decrementIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    stepFactor: {
      description: 'Please enter valid factor of the total steps eg: 5 of 50',
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    btnVariant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrRangeMinMaxSlider = ({
  onClickMin,
  onClickMax,
  onChange,
  rangeInputId,
  startValue,
  endValue,
  minValue,
  maxValue,
  units,
  stepFactor,
  size,
  btnVariant,
  showLegend,
  disabled,
  incrementIcon,
  decrementIcon,
  theme,
}: BlrRangeMinMaxSliderType) =>
  html`
    ${BlrRangeMinMaxSliderRenderFunction({
      onClickMin,
      onClickMax,
      onChange,
      rangeInputId,
      startValue,
      endValue,
      minValue,
      maxValue,
      units,
      stepFactor,
      size,
      btnVariant,
      showLegend,
      disabled,
      incrementIcon,
      decrementIcon,
      theme,
    })}
  `;

BlrRangeMinMaxSlider.storyName = 'BlrRangeMinMaxSlider';

const logEventType = (minVal: number, maxVal: number, event: Event) => {
  console.log('storybook:story:min', minVal);
  console.log('storybook:story:max', maxVal);
  console.log('storybook:story:logEventValue', (event.target as HTMLInputElement).value);
};

const btnEventType = (minValue: number, maxValue: number) => {
  console.log('storybook:story:logEventType:minValue', minValue);
  console.log('storybook:story:logEventType:maxValue', maxValue);
};

BlrRangeMinMaxSlider.args = {
  theme: 'Light',
  onClickMin: btnEventType,
  onClickMax: btnEventType,
  onChange: logEventType,
  rangeInputId: 'range-cmpt',
  startValue: 80,
  endValue: 85,
  minValue: 75,
  maxValue: 130,
  units: '$',
  stepFactor: 1,
  size: 'md',
  btnVariant: 'silent',
  showLegend: true,
  disabled: false,
  incrementIcon: 'blrPlus',
  decrementIcon: 'blrMinus',
};
