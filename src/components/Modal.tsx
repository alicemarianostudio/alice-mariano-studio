'use client';

import { useEffect, useState } from 'react';

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('modalSeen');
    if (!hasSeenModal) {
      setShowModal(true);
      localStorage.setItem('modalSeen', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-[2px] flex justify-center z-50"
      onClick={handleClose}
    >
      <section
        className="secondary-pink-bg md:w-96 w-full p-8 shadow-sm h-fit mx-8 my-20"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" onClick={handleClose}></span>
        <h1 className="accent-font text-6xl">Decorate with us</h1>
        <p>
          Subscribe to our monthly mood-boards for new and upcoming design picks
          and product curation straight to your inbox.
        </p>
        <article>
          <input
            type="text"
            placeholder="First name"
            className="placeholder:text-black"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="placeholder:text-black"
          ></input>
          <button>Suscribe</button>
        </article>
      </section>
    </div>
  );
};

export default Modal;
