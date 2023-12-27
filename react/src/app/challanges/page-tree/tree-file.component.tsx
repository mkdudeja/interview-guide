import { IPageItem } from "./page-tree.interface";

interface ITreeFileProps {
  item: IPageItem;
}

const TreeFile: React.FC<ITreeFileProps> = ({ item }) => {
  return (
    <div className="flex flex-row space-x-3">
      <span>•</span>
      <span>{item.name}</span>
    </div>
  );
};

export default TreeFile;
