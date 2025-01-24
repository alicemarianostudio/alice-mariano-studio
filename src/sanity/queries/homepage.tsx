export const homepageQuery = `
*[_type == "homepage"]{
  homepageEntries[] {
    title,
    'image_url': image.asset->url,
    url,
    headlineTitle,
    headlineSubtitle
  }
}[0]
`;
