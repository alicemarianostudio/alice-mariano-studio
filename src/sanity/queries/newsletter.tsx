export const newsletterQuery = `
  *[_type == "newsletter"] {
      _id,
      title,
      archived,
      calendar[]->{
        _id,
        title,
        'image_url': image.asset->url,
        slug
        },
        slug
}[0]
`;
