export const subCollectionsQuery = `
*[_type == "subCollection"]{
 title,
 _id,
 image,
 'image_url': image.asset->url,
 'cover_url': coverImg.asset->url,
 content,
products[]->{
      _id,
      title,
     'image_url': image.asset->url,
      url
      }
 slug
}
`;

export const subCollectionsBySlugQuery = `
*[_type == "subCollection" && slug.current == $slug] {
      title,
      _id,
      slug {
        current
      },
      'image_url': image.asset->url,
      'cover_url': coverImg.asset->url,
      content,
      products[]->{
      _id,
      title,
     'image_url': image.asset->url,
      url
      },
}[0]
`;
