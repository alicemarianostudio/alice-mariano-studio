import { Navigation } from '@/sanity/types';
import { Close } from '@/assets/svg/Close';

export const Menu = ({
  navigation,
  handleClose,
  isOpen,
}: {
  navigation?: Navigation;
  handleClose: () => void;
  isOpen: boolean;
}) => {
  if (!navigation) {
    return null;
  }

  return (
    <section
      className={`transition-opacity ease-in-out fixed flex items-end p-8 bg-white bg-opacity-80 backdrop-blur-[2px] inset-0 z-20 ${isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}
    >
      <button
        onClick={() => handleClose?.()}
        className="absolute top-1 right-1 p-4"
      >
        <Close />
      </button>
      <ul>
        {navigation &&
          navigation.items.map((item) => (
            <li key={item._key} className="mb-1">
              {item.navigationItemUrl?.collectionLink?.map((link: any) => (
                <a key={link._id} href={`/collections/${link.slug.current}`}>
                  <p className="text-4xl lg:text-6xl">{link.title}</p>
                </a>
              ))}
              {item.navigationItemUrl?.internalUrl && (
                <a href={item.navigationItemUrl.internalUrl}>
                  <p className="text-4xl lg:text-6xl">{item.text}</p>
                </a>
              )}
              {item?.navigationItemUrl?.externalUrl && (
                <a
                  href={item.navigationItemUrl.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-4xl lg:text-6xl">{item.text}</p>
                </a>
              )}
            </li>
          ))}
      </ul>
    </section>
  );
};
