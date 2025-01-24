export const navigationQuery = `
    *[_type == "navigation"] {
      _id,
      title,
      navId,
      items[] {
        _key,
        text,
        navigationItemUrl {
          collectionLink[]->{
            _id,
            title,
            slug
          },
          internalUrl,
          externalUrl
        }
      }
    }[0]
  `;
