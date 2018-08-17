var isExists = val => {
  if (typeof val !== 'undefined') {
    return true;
  }
  return false;
};

export default (src, target) => {
  for (let key in target) {
    src[key] = isExists(target[key]) ? target[key] : src[key];
  }
};
