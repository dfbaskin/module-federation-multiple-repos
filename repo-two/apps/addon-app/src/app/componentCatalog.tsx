import { lazy } from 'react';
import { registerInteropCustomElement, InteropComponent } from '@example/interop';

const CustomOrange = lazy(() =>
  import('@example/additional').then(({ CustomOrange }) => ({
    default: CustomOrange,
  }))
) as React.ComponentType<unknown>;

registerInteropCustomElement('custom-orange', () => (
  <InteropComponent Component={CustomOrange} />
));
