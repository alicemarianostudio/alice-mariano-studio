export const paramsIntoText = (params: string | string[]) => {
  if (Array.isArray(params)) {
    return '';
  }
  return params?.replaceAll('-', ' ');
};
