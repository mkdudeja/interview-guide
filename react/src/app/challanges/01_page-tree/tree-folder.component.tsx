import React from "react";
import { IPageItem } from "./page-tree.interface";
import TreeRenderer from "./tree-renderer.component";

interface ITreeFolderProps {
  item: IPageItem;
}

const TreeFolder: React.FC<ITreeFolderProps> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-3">
        <span>{expanded ? "▼" : " ▶"}</span>
        <a
          href="javascript:void(0);"
          onClick={() => setExpanded((prevState) => !prevState)}
        >
          {item.name}
        </a>
      </div>
      {expanded && (
        <ul className="ml-5">
          {item.children.map((child) => (
            <TreeRenderer key={child.id} item={child} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TreeFolder;
