import { useState } from 'react';
import { Tree } from '../Tree/Tree';
import { Li, Folder, Div, Arrow } from './TreeNode.styles';
import folder from '../../images/folder.png';
import arrowDown from '../../images/arrowDown.png';

export const TreeNode = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isChildren = data?.children?.length > 0;

  const handleToggle = () => {
    isChildren && setIsOpen(!isOpen);
  };

  return (
    <Li hasChildren={isChildren} onClick={handleToggle}>
      <Div hasChildren={isChildren} onClick={handleToggle}>
        {isChildren && <Arrow isOpen={isOpen} src={arrowDown} alt="down arrow" />}
        {data.isFolder && <Folder src={folder} alt="folder" />}
        <p>{data.name}</p>
      </Div>
      {isOpen && <Tree data={data.children} />}
    </Li>
  );
};
