import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../pages/index';

const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: 'Unable to load data' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Error Handling Tests', () => {
  it('Error message for unable to load data', async () => {
    server.use(
      rest.get('/api/data', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Unable to load data' }));
      })
    );

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load data')).toBeInTheDocument();
    });
  });

  it('Error message for unable to fetch information', async () => {
    server.use(
      rest.get('/api/data', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Unable to fetch information' }));
      })
    );

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Unable to fetch information')).toBeInTheDocument();
    });
  });

});
