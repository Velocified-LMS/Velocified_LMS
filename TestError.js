import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../pages/index';

const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Error Tests', () => {
  it('Error', async () => {
    server.use(
      rest.get('/api/data', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }));
      })
    );

    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Error fetching data.')).toBeInTheDocument();
    });
  });
});
