export const DictToArray = (dict: { [ket: string]: boolean }) =>
  Object.entries(dict)
    ?.map(([key, value]) => value ? key : "")
    ?.filter(id => id);
