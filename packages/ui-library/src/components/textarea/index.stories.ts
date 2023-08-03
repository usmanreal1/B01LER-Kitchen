/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';

import { FormSizes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    warningLimitType: {
      name: 'Warning Limit Type',
      options: ['warningLimitInt', 'warningLimitPer'],
      control: {
        type: 'radio',
        labels: {
          warningLimitInt: 'Whole Number',
          warningLimitPer: 'Percentage',
        },
      },
    },
    // Only enabled if warningLimitType is Whole Number
    warningLimitInt: {
      control: 'number',
      name: 'Warning Limit (Whole Number)',
      if: { arg: 'warningLimitType', eq: 'warningLimitInt' },
      description: 'Please provide a whole number',
    },
    // Only enabled if warningLimitType is Percentage
    warningLimitPer: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
      name: 'Warning Limit (Percentage)',
      if: { arg: 'warningLimitType', eq: 'warningLimitPer' },
      description:
        'Please provide a percentage. Warning limit is calculated based on the percentage of the maximum length reached ((maximum length / 100) * percentage value)',
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrTextarea = ({
  textareaId,
  label,
  labelAppendix,
  placeholder,
  required,
  disabled,
  size,
  maxLength,
  warningLimitType,
  warningLimitInt,
  warningLimitPer,
  cols,
  rows,
  errorMessage,
  hintText,
  hintIcon,
  hasError,
  onChange,
  onFocus,
  onSelect,
  readonly,
  isResizeable,
  showHint,
  value,
}: BlrTextareaType) =>
  html`
    ${BlrTextareaRenderFunction({
      textareaId,
      label,
      labelAppendix,
      placeholder,
      required,
      disabled,
      size,
      maxLength,
      warningLimitType,
      warningLimitInt,
      warningLimitPer,
      cols,
      rows,
      errorMessage,
      hintText,
      hintIcon,
      hasError,
      onChange,
      onFocus,
      onSelect,
      readonly,
      isResizeable,
      showHint,
      value,
    })}
  `;

BlrTextarea.storyName = 'BlrTextarea';

BlrTextarea.args = {
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  minLength: 0,
  maxLength: 140,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  cols: 20,
  rows: 5,
  errorMessage: 'OMG it`s an error',
  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  readonly: false,
  hintText: 'Rindfleischetikettierungs',
  hasError: false,
  isResizeable: true,
  hintIcon: 'blrInfo',
  showHint: true,
  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
};
