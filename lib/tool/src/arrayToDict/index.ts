export const arrayToDict = (arr: Array<Record<string, any>>, key: string) => {
  const dict: Record<string, any> = {};
  arr.forEach((record) => {
    dict[record[key]] = record;
  });
  return dict;
};
