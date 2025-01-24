import Link from 'next/link';

import { Instagram } from '@/assets/svg/Instagram';
import { Pinterest } from '@/assets/svg/Pinterest';

export function Footer() {
  return (
    <footer className="footer flex flex-col gap-4 mx-auto pt-8 pb-4 bottom-0 text-sm mt-60">
      <p className="mx-auto text-center text-xs">
        If you purchase something I may earn a commission. All items are
        independently selected by yours truly
      </p>
      <section className="flex flex-col gap-2">
        <div id="omnisend-embedded-v2-66c39c02954472bd877c9b78" className="omnisend"></div>
      </section>
      <section className="footer-end px-4 flex flex-col text-center md:text-start md:flex-row justify-between">
        <p className="hidden sm:block">Copyright © 2024 Alice Mariano Studio All rights reserved.</p>
        <div>
          <ul className="flex flex-wrap gap-y-2 gap-x-4 items-center justify-center">
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/alicemarianostudio/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.pinterest.com/alicemarianostudio/"
                target="_blank"
              >
                <Pinterest />
              </Link>
            </li>
          </ul>
          <p className="sm:hidden mt-4">© 2024 Alice Mariano Studio</p>
        </div>
      </section>
    </footer>
  );
}
