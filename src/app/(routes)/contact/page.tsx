import { Metadata } from 'next';

import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Alice Mariano Studio | Contact',
};

export default function Contact() {
  return (
    <main className="container mx-auto lg:py-8 min-h-[70vh]">
      <section className="flex flex-col max-w-[30rem] mx-auto text-center gap-4 p-4">
        <div className="flex flex-col gap-4 lg:pb-8">
          <p className="text-lg">
            Please fill out the form below to inquire about a collaboration, a
            product, or simply say hello.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
