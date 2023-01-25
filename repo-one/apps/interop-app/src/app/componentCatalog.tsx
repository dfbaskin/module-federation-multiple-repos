import { lazy } from 'react';
import { registerInteropCustomElement } from './componentInteropWrapper';
import { InteropComponent } from './interopComponent';

const CustomRed = lazy(() =>
  import('@example/components').then(({ CustomRed }) => ({
    default: CustomRed,
  }))
) as React.ComponentType<unknown>;
const CustomBlue = lazy(() =>
  import('@example/components').then(({ CustomBlue }) => ({
    default: CustomBlue,
  }))
) as React.ComponentType<unknown>;
const CustomGreen = lazy(() =>
  import('@example/components').then(({ CustomGreen }) => ({
    default: CustomGreen,
  }))
) as React.ComponentType<unknown>;

registerInteropCustomElement('custom-red', () => (
  <InteropComponent Component={CustomRed} />
));
registerInteropCustomElement('custom-blue', () => (
  <InteropComponent Component={CustomBlue} />
));
registerInteropCustomElement('custom-green', () => (
  <InteropComponent Component={CustomGreen} />
));
