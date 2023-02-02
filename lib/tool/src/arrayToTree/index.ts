/**
 * 数组转树形结构
 * @param arr
 * @param id
 * @param parentId
 * @returns
 */

export const arrayToTree = (
  arr: Array<Record<string, any>>,
  id: string,
  parentId: string
) => {
  const newArr = arr.slice();
  newArr.forEach((record) => {
    if (record[parentId]) {
      const parent = newArr.find((r) => r[id] === record[parentId]);
      if (parent) {
        if (parent.children) {
          parent.children.push(record);
        } else {
          parent.children = [record];
        }
      }
    }
  });
  return newArr.filter((r) => !r[parentId]);
};

const a = arrayToTree(
  [
    {
      id: 1,
      parentId: 2,
    },
    {
      id: 2,
      parentId: "",
    },
  ],
  "id",
  "parentId"
);

console.log(JSON.stringify(a));
