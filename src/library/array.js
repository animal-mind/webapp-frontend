export const addOrRemoveItem = (array, item, init = false) => {
  const exists = window._.indexOf(array, item);
  if (exists > -1) {
    array.splice(exists, 1);
    return array;
  }
  if (init) {
    array.splice(0, array.length);
  }
  array.push(item);
  return array;
};

export const checkIfItemExists = (array, item) => {
  const exists = window._.indexOf(array, item);
  if (exists > -1) {
    return true;
  }
  return false;
};
