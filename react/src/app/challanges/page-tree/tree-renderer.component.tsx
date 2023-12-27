import { IPageItem } from "./page-tree.interface";
import TreeFile from "./tree-file.component";
import TreeFolder from "./tree-folder.component";

interface ITreeRendererProps {
  item: IPageItem;
}
const TreeRenderer: React.FC<ITreeRendererProps> = ({ item }) => {
  const hasChildren = item.children?.length;

  return (
    <li>
      {hasChildren ? <TreeFolder item={item} /> : <TreeFile item={item} />}
    </li>
  );
};

export default TreeRenderer;
