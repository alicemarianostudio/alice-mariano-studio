export const productsQuery = `
*[_type == "product"]{
 title,
 _id,
 image,
 slug,
 'image_url': image.asset->url,
 url,
}
`;
