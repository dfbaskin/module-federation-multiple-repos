import { render } from '@testing-library/react';

import Additional from './additional';

describe('Additional', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Additional />);
    expect(baseElement).toBeTruthy();
  });
});
