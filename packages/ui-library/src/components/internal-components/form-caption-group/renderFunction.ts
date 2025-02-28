import { TemplateResult } from 'lit';
import { BlrFormCaptionGroupType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-form-caption-group';

export const BlrFormCaptionGroupRenderFunction = (params: BlrFormCaptionGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrFormCaptionGroupType>(TAG_NAME, { ...params }, children);
