export const pressQuery = `
*[_type == "press"]{
  title,
  _id,
  content,
  url,
  image,
  'image_url': image.asset->url
}
`;