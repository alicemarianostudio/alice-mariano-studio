export const projectsQuery = `
  *[_type == "project"]{
    title,
    image,
    'image_url': image.asset->url
  }
`;
