import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { textInput } from '../../foundation/semantic-tokens/form.css';
import { SizesType, InputTypes } from '../../globals/types';
import { BlrFormLabel } from '../form-label';
import { BlrFormHint } from '../form-hint';
import { IconType } from '@boiler/icons';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, textInput];

  @property() textInputId!: string;
  @property() type!: InputTypes;
  @property() label!: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() size?: SizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() minLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint?: string;
  @property() hintIcon?: IconType;

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`${this.disabled}`]: this.disabled || false,
    });

    return html`
      <div class="blr-input ${classes}">
        ${BlrFormLabel({ labelText: this.label })}
        <input
          class="blr-text-input ${this.hasError ? 'inputerror' : 'default'}"
          id=${this.textInputId}
          type="${this.type}"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          maxlength="${this.maxLength}"
          minlength="${this.minLength}"
          pattern="${this.pattern}"
          hasError="${this.hasError}"
        />
        ${BlrFormHint({
          message: this.hasError ? this.errorMessage : this.hint,
          variant: this.hasError ? 'error' : 'hint',
          iconName: this.hintIcon,
        })}
      </div>
    `;
  }
}
