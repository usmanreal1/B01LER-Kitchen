import '@boiler/ui-library/dist/';

import { BlrLoaderRenderFunction } from './renderFunction';
import type { BlrLoaderType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrLoaderType = {
  variant: 'default',
  loadingStatus: 'Loading',
  theme: 'Light',
};

describe('blr-loader', () => {
  it('is having a statusRole containing the right className', async () => {
    const element = await fixture(BlrLoaderRenderFunction(sampleParams));

    const statusRole = querySelectorDeep('[role="status"]', element.getRootNode() as HTMLElement);

    const className = statusRole?.className;

    expect(className).to.contain('blr-loader');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrLoaderRenderFunction(sampleParams));

    const loader = querySelectorDeep('div.blr-loader', element.getRootNode() as HTMLElement);
    const className = loader?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrLoaderRenderFunction({ ...sampleParams, size: 'sm' }));

    const loader = querySelectorDeep('div.blr-loader', element.getRootNode() as HTMLElement);
    const className = loader?.className;

    expect(className).to.contain('sm');
  });
});
