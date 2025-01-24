export const privacyPolicyQuery = `
  *[_type == "privacyPolicy"]{
    content,
  }[0]
`;
