import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contacto from './Contacto';

global.fetch = vi.fn();

describe('Contacto', () => {
  it('should submit the form with the correct data', async () => {
    render(<Contacto />);

    const nombreInput = screen.getByPlaceholderText('Nombre');
    const emailInput = screen.getByPlaceholderText('Email');
    const mensajeTextarea = screen.getByPlaceholderText('Mensaje');
    const submitButton = screen.getByText('Enviar');

    fireEvent.change(nombreInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(mensajeTextarea, { target: { value: 'This is a test message' } });

    fetch.mockResolvedValueOnce({ ok: true });

    fireEvent.click(submitButton);

    await vi.waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining('/prospectos'),
          expect.objectContaining({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: 'Test User',
              email: 'test@example.com',
              mensaje: 'This is a test message',
            }),
          })
        );
    });
  });
});
