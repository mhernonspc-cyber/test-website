import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import type { Service } from '../../types';

const mockService: Service = {
  id: 'svc-test',
  slug: 'test-service',
  title: 'Test Service',
  shortDescription: 'Short description text',
  longDescription: 'Long description text',
  price: 150,
  duration: '45 minutes',
  ingredients: ['A', 'B'],
  heroImage: '/images/hero-placeholder.svg',
  whoFor: 'People who love tests'
};

describe('ServiceCard', () => {
  it('renders service info', () => {
    render(
      <MemoryRouter>
        <ServiceCard service={mockService} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Test Service/)).toBeInTheDocument();
    expect(screen.getByText(/45 minutes/)).toBeInTheDocument();
    expect(screen.getByText('$150.00')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /learn more about test service/i })
    ).toHaveAttribute('href', '/services/test-service');
  });
});
