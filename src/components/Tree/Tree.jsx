import { TreeNode } from '../TreeNode/TreeNode';

export const Tree = ({ data }) => {
  return (
    <ul>
      {data?.map(item => (
        <TreeNode key={item.name} data={item} />
      ))}
    </ul>
  );
};
