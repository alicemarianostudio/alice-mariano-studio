'use client';

import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('mvgpvqjl');

  if (state.succeeded) {
    return (
      <p className="opacity-0 font-bold tertiary-pink-bg px-8 py-2 w-fit mx-auto animate-fadeIn transition-opacity">
        Your message has been sent. Talk to you soon!
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <label>
          <input type="text" placeholder="Name" autoComplete="name" />
        </label>
        <label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>
          <input
            className="h-36"
            id="message"
            name="message"
            autoComplete="messafe"
            type="textarea"
            placeholder="Message"
            required
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="w-fit">
          Send
        </button>
      </form>
    </>
  );
}
