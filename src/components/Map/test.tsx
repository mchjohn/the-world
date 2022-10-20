import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Rio de Janeiro',
      slug: 'rio de janeiro',
      location: { latitude: 148, longitude: -16 },
    };

    const placeTwo = {
      id: '2',
      name: 'Lagoinha',
      slug: 'lagoinha',
      location: { latitude: 145, longitude: -45 },
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/rio de janeiro/i)).toBeInTheDocument();
    expect(screen.getByTitle(/lagoinha/i)).toBeInTheDocument();
  });
});
