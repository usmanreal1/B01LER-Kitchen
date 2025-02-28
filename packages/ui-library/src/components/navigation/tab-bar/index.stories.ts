import { BlrTabBarType } from './index';
import { BlrTabBarRenderFunction } from './renderFunction';
import {
  FormSizes,
  IconPositionVariant,
  OverflowVariantsStandard,
  OverflowVariantsFullWidth,
  TabAlignmentVariants,
  TabContentVariants,
  TabVariants,
} from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

// this loads the all components instances and registers their html tags
import '../../../index';

export default {
  title: 'Design System/Web Components/Navigation/TabBar',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    tabs: { control: 'array' },
    tabContent: {
      options: TabContentVariants,
      control: { type: 'select' },
    },
    iconPosition: {
      if: { arg: 'tabContent', eq: 'labelAndIcon' },
      options: IconPositionVariant,
      control: { type: 'select' },
    },
    variant: {
      options: TabVariants,
      control: { type: 'select' },
    },
    overflowVariantStandard: {
      if: { arg: 'variant', eq: 'standard' },
      options: OverflowVariantsStandard,
      control: { type: 'select' },
    },
    overflowVariantFullWidth: {
      if: { arg: 'variant', eq: 'fullWidth' },
      options: OverflowVariantsFullWidth,
      control: { type: 'select' },
    },
    alignment: {
      options: TabAlignmentVariants,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3231%3A94377&mode=dev',
    },
    viewMode: 'docs',
  },
};

export const BlrTabBar = (params: BlrTabBarType) => BlrTabBarRenderFunction(params);

BlrTabBar.storyName = 'TabBar';

const args: BlrTabBarType = {
  theme: 'Light',
  tabs: [
    {
      label: 'Tab 1',
      icon: 'blr360',
      href: './',
      disabled: true,
    },
    {
      label: 'Tab 2',
      icon: 'blrInfo',
      href: './',
    },
    {
      label: 'Tab 3',
      icon: 'blrCrop',
      href: './',
    },
    {
      label: 'Tab 4',
      icon: 'blrDocumentNew',
      href: './',
    },
    {
      label: 'Tab 5',
      icon: 'blrDocumentTwo',
      href: './',
    },
    {
      label: 'Tab 6',
      icon: 'blrDownload',
      href: './',
    },
    {
      label: 'Tab 7',
      icon: 'blrHeart',
      href: './',
    },
    {
      label: 'Tab 8',
      icon: 'blrHome',
      href: './',
    },
    {
      label: 'Tab 9',
      icon: 'blrLockClosed',
      href: './',
    },
    {
      label: 'Tab 10',
      icon: 'blrMusic',
      href: './',
    },
    {
      label: 'Tab 11',
      icon: 'blrPen',
      href: './',
    },
  ],
  variant: 'standard',
  overflowVariantStandard: 'buttons',
  overflowVariantFullWidth: 'browserOverflow',
  size: 'md',
  showDivider: true,
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
};

BlrTabBar.args = args;
