import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import './index';

const defaultParams: BlrTextareaType = {
  theme: 'Light',
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  cols: 20,
  rows: 5,

  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  readonly: false,

  showHint: true,
  hintIcon: 'blrInfo',
  hintText: 'hint message',

  hasError: false,
  errorMessage: "OMG it's an error",

  isResizeable: true,
};

const fontStyle = html`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  </style>
`;

export default {
  title: 'Design System/Web Components/BlrTextarea/Examples',
  parameters: {
    // backgrounds: {
    //     default: 'light',
    // },
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      description: 'Defines a short hint intended to aid the user with data entry when the component has no value.',
      defaultValue: '',
      control: {
        type: 'text',
        label: 'Enter Text',
      },
    },
  },
};

export const Example1 = () => {
  return html`
    ${fontStyle}
    <style>
      .wrapper {
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }
      .stories-textarea {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
      }
      .focus {
        outline: 2px solid hsla(220, 10%, 10%, 1);
        border-radius: 4px;
      }
      .row {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="row">
        <p style="text-align: center">Default</p>
        <div class="stories-textarea">
          <div class="story-textarea">
            <p>Rest</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Light',
            })}
          </div>
          <div class="story-textarea">
            <p>Hover</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Light',
            })}
          </div>
          <div class="story-textarea">
            <p>Pressed</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Light',
            })}
          </div>
          <div class="story-textarea">
            <p>Focus</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Light',
            })}
          </div>
          <div class="story-textarea">
            <p>Disabled</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              disabled: true,
            })}
          </div>
          <div class="story-textarea">
            <p>readOnly</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              readonly: true,
            })}
          </div>
          <div class="story-textarea">
            <h3>Description</h3>
            <p>Here is a description</p>
          </div>
        </div>
      </div>
      <div class="row">
        <p style="text-align: center">Error</p>
        <div class="story-textarea">
          <p>Rest</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
          })}
        </div>
        <div class="story-textarea">
          <p>Hover</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
          })}
        </div>
        <div class="story-textarea">
          <p>Pressed</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
          })}
        </div>
        <div class="story-textarea">
          <p>Focus</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
          })}
        </div>
      </div>
    </div>
  `;
};
Example1.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Example1.storyName = 'Textarea Examples Light Theme';

export const Example2 = () =>
  html`
    ${fontStyle}
    <style>
      .wrapper {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
      }

      .stories-textarea {
        display: flex;
        color: white;
        flex-wrap: wrap;
        flex-direction: column;
      }

      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
      }
      .row {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="row">
        <p style="text-align: center; color: white">Default</p>
        <div class="stories-textarea">
          <div class="story-textarea">
            <p>Rest</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Dark',
            })}
          </div>
          <div class="story-textarea">
            <p>Hover</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Dark',
            })}
          </div>
          <div class="story-textarea">
            <p>Pressed</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Dark',
            })}
          </div>
          <div class="story-textarea">
            <p>Focus</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              theme: 'Dark',
            })}
          </div>
          <div class="story-textarea">
            <p>Disabled</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              disabled: true,
              theme: 'Dark',
            })}
          </div>
          <div class="story-textarea">
            <p>readOnly</p>
            ${BlrTextareaRenderFunction({
              ...defaultParams,
              readonly: true,
              theme: 'Dark',
            })}
          </div>
          <div class="story-textarea">
            <p>Description</p>
            <p>Here is a description</p>
          </div>
        </div>
      </div>
      <div class="row">
        <p style="text-align: center; color: white">Error</p>
        <div class="story-textarea">
          <p style="color: white">Rest</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
            theme: 'Dark',
          })}
        </div>
        <div class="story-textarea">
          <p style="color: white">Hover</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
            theme: 'Dark',
          })}
        </div>
        <div class="story-textarea">
          <p style="color: white">Pressed</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
            theme: 'Dark',
          })}
        </div>
        <div class="story-textarea">
          <p style="color: white">Focus</p>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            hasError: true,
            theme: 'Dark',
          })}
        </div>
      </div>
    </div>
  `;
(Example2.parameters = {
  backgrounds: {
    default: 'dark',
  },
}),
  (Example2.storyName = 'Textarea Examples Dark Theme');

export const InteractivePlaceholder = ({ placeholder }) =>
  html`
    ${fontStyle}
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      placeholder: placeholder,
      value: '',
    })}
  `;
InteractivePlaceholder.storyName = 'Interaktiver Placeholder';
InteractivePlaceholder.args = {
  placeholder: defaultParams.placeholder,
};
