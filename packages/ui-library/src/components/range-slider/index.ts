import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleCustom } from './index.css';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/slider.css';
import { FormSizesType, ActionVariantType } from '../../globals/types';
import { findNearestValue, findPercentage, generateRangeBar } from '../../utils/range-slider-utils';

import { BlrIconButtonRenderFunction } from '../icon-button';
import { RenderBtnProps } from '../../globals/types';

import { IconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-range-slider')
export class BlrRangeSlider extends LitElement {
  static styles = [styleCustom];

  @property() onClickMinMax?: (param: number) => void;
  @property() onChange!: (val: number, event: Event) => HTMLButtonElement['onchange'];

  @property() rangeInputId!: string;

  @property() initialValue!: number;
  @property() minValue!: number;
  @property() maxValue!: number;
  @property() units?: string = '';
  @property() stepFactor!: number;

  @property() size: FormSizesType = 'md';
  @property() btnVariant: ActionVariantType = 'silent';

  @property() incrementIcon!: IconType;
  @property() decrementIcon!: IconType;

  @property() showLegend?: boolean = true;
  @property() disabled?: boolean = false;

  @property() theme: ThemeType = 'Light';

  @state() protected valueToSlider = 0;

  protected updated(changedProperties: Map<string, number>) {
    if (changedProperties.has('valueToSlider')) {
      this.valueToSlider = findPercentage(this.minValue, this.maxValue, this.initialValue);
    }
  }

  protected renderBtn = ({ btnId, btnEventHandler, iconName }: RenderBtnProps) =>
    html` ${BlrIconButtonRenderFunction({
      arialabel: btnId,
      onClick: btnEventHandler,
      icon: iconName,
      loading: false,
      disabled: this.disabled,
      buttonId: btnId,
      variant: this.btnVariant,
      size: this.size,
      loadingStatus: 'Loading',
      theme: this.theme,
    })}`;

  protected render() {
    const rangeStyle = generateRangeBar(this.theme, this.valueToSlider, 0, this.disabled);
    const generatedStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];
    const dynamicStyles = [...generatedStyles, ...rangeStyle];

    const setValue = (btnType: string) => {
      if (btnType === 'INC' && this.valueToSlider < 100) {
        this.valueToSlider = this.valueToSlider + this.stepFactor;
        this.initialValue = findNearestValue(this.minValue, this.maxValue, this.valueToSlider + this.stepFactor);
      } else if (btnType === 'DEC' && this.valueToSlider > 0) {
        this.valueToSlider = this.valueToSlider - this.stepFactor;
        this.initialValue = findNearestValue(this.minValue, this.maxValue, this.valueToSlider - this.stepFactor);
      }
      return this.onClickMinMax?.(this.initialValue);
    };

    const showVal = (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);
      this.valueToSlider = value;
      this.initialValue = findNearestValue(this.minValue, this.maxValue, value);

      this.onChange?.(this.initialValue, event);
    };

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const inlineLegendStyles = !this.disabled ? 'inline-legend' : 'inline-legend inline-legend-disabled';

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
            ${this.renderBtn({
              btnId: 'dec_btn',
              btnEventHandler: () => setValue('DEC'),
              iconName: this.decrementIcon,
            })}
            ${this.showLegend
              ? html`<div class=${inlineLegendStyles}><p>${this.minValue} ${this.units}</p></div>`
              : nothing}
            <div class="range-wrapper">
              <input
                id=${this.rangeInputId || 'rangeInputId'}
                type="range"
                min="0"
                value=${this.valueToSlider}
                max="100"
                step="${this.stepFactor}"
                class="range blr-slider-bar"
                ?disabled=${this.disabled}
                @change=${showVal}
                @input=${showVal}
              />
              <div id="tooltip" class="tooltip" style="left:${this.valueToSlider}%">
                ${this.initialValue} ${this.units}
              </div>
            </div>
            ${this.showLegend
              ? html`<div class=${inlineLegendStyles}><p>${this.maxValue} ${this.units}</p></div>`
              : nothing}
            ${this.renderBtn({
              btnId: 'inc_btn',
              btnEventHandler: () => setValue('INC'),
              iconName: this.incrementIcon,
            })}
          </div>
        </fieldset>
      </div>`;
  }
}

export type BlrRangeSliderType = Omit<BlrRangeSlider, keyof LitElement>;

export const BlrRangeSliderRenderFunction = ({
  onClickMinMax,
  onChange,
  rangeInputId,
  initialValue,
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
}: BlrRangeSliderType) => {
  return html`
    <blr-range-slider
      .onClickMinMax=${onClickMinMax}
      .onChange=${onChange}
      .rangeInputId=${rangeInputId}
      .initialValue=${initialValue}
      .minValue=${minValue}
      .maxValue=${maxValue}
      .units=${units}
      .stepFactor=${stepFactor}
      .size=${size}
      .btnVariant=${btnVariant}
      .showLegend=${showLegend}
      .disabled=${disabled}
      .incrementIcon=${incrementIcon}
      .decrementIcon=${decrementIcon}
      .theme=${theme}
    ></blr-range-slider>
  `;
};
