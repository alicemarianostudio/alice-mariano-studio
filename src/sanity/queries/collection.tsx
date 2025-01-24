export const collectionsQuery = `
*[_type == "collection"]{
 title,
 _id,
 image,
 'image_url': image.asset->url,
 collections[]->{
 title,
 image,
 'image_url': image.asset->url,
 products[]->{
   title,
   image,
   url,
  'image_url': image.asset->url,
 }
 },
 slug,
}
`;

export const collectionBySlugQuery = `
*[_type == "collection" && slug.current == $slug]{
 title,
 _id,
 image,
 products[]->{
     title,
     image,
    url,
     'image_url': image.asset->url,
 },
 'image_url': image.asset->url,
 collections[]->{
 title,
 _id,
 image,
 'image_url': image.asset->url,
 products[]->{
     title,
     image,
     url,
     'image_url': image.asset->url,
 }
 },
 slug,
 }[0]
`;
