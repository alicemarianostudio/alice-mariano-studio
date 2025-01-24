export const aboutQuery = `
  *[_type == "about"]{
    content,
    image,
    'image_url': image.asset->url,
  }[0]
`;
