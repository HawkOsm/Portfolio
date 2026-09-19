import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Contact from '../pages/Contact.jsx';
import { RouterProvider } from '../router.jsx';

vi.mock('@emailjs/browser', () => ({
    default: { send: vi.fn() },
}));

const renderContact = () =>
    render(
        <RouterProvider>
            <Contact />
        </RouterProvider>
    );

describe('Contact form (EmailJS API call)', () => {
    beforeEach(() => {
        emailjs.send.mockReset();
    });

    const fillAndSubmit = async (user) => {
        await user.type(screen.getByPlaceholderText('Your name'), 'Ada Lovelace');
        await user.type(screen.getByPlaceholderText('you@company.com'), 'ada@example.com');
        await user.type(screen.getByPlaceholderText('What are you working on?'), 'Hello there!');
        await user.click(screen.getByRole('button', { name: /send message/i }));
    };

    it('calls emailjs.send with the service/template/public keys and mapped form fields', async () => {
        emailjs.send.mockResolvedValueOnce({ status: 200, text: 'OK' });
        const user = userEvent.setup();

        renderContact();
        await fillAndSubmit(user);

        expect(emailjs.send).toHaveBeenCalledTimes(1);
        const [serviceId, templateId, params, publicKey] = emailjs.send.mock.calls[0];

        expect(serviceId).toBeTruthy();
        expect(templateId).toBeTruthy();
        expect(publicKey).toBeTruthy();
        expect(params).toMatchObject({
            from_name: 'Ada Lovelace',
            from_email: 'ada@example.com',
            message: 'Hello there!',
            to_email: 'osmansahinguler@gmail.com',
        });
    });

    it('shows a success alert and resets the form on a successful send', async () => {
        emailjs.send.mockResolvedValueOnce({ status: 200, text: 'OK' });
        const user = userEvent.setup();

        renderContact();
        await fillAndSubmit(user);

        expect(await screen.findByRole('alert')).toHaveTextContent(/message sent/i);
        expect(screen.getByPlaceholderText('Your name')).toHaveValue('Ada Lovelace');
    });

    it('shows a failure alert with a fallback email when the send rejects', async () => {
        emailjs.send.mockRejectedValueOnce(new Error('network error'));
        const user = userEvent.setup();

        renderContact();
        await fillAndSubmit(user);

        expect(await screen.findByRole('alert')).toHaveTextContent(/sending failed/i);
        expect(screen.getByRole('alert')).toHaveTextContent('osmansahinguler@gmail.com');
    });

    it('disables the submit button and shows a loading state while the request is in flight', async () => {
        let resolveSend;
        emailjs.send.mockImplementationOnce(
            () => new Promise((resolve) => { resolveSend = resolve; })
        );
        const user = userEvent.setup();

        renderContact();
        await fillAndSubmit(user);

        const button = screen.getByRole('button', { name: /sending/i });
        expect(button).toBeDisabled();

        resolveSend({ status: 200, text: 'OK' });
        await waitFor(() => expect(button).not.toBeDisabled());
    });
});
