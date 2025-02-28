import type { StorybookConfig } from '@storybook/web-components-webpack5';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-designs'],
  framework: '@storybook/web-components-webpack5',
  docs: {
    autodocs: true,
  },
  staticDirs: ['../../assets'],

  previewBody: (body) => `
    ${body}
    <script>console.log('this build was created on ${new Date().toLocaleString()}');</script>
  `,

  webpackFinal: async (config) => {
    config.module!.rules!.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: resolve(__dirname, 'packages'),
    });

    config.module!.rules!.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'raw-loader',
        },
      ],
    });

    // Return the altered config
    return config;
  },
};

export default config;
