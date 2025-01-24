export const termsQuery = `
  *[_type == "terms"]{
    content,
  }[0]
`;
