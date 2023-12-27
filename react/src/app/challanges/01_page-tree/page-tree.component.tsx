import React from "react";
import { IPageItem } from "./page-tree.interface";
import { fetchData } from "./page-tree.service";
import TreeRenderer from "./tree-renderer.component";

// challanges
// - CRUD
// - ability to create (add nodes), rename nodes, delete nodes
// - auto expand (saving the expanded state)
// - optimization 

const PageTree: React.FC = () => {
  const [data, setData] = React.useState<Array<IPageItem>>();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        console.error("An error occured while fetching the data", err);
      }
    };

    getData();
  }, []);

  console.log("data", data);

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">Page Tree</h1>
      <ul>
        {data.map((item) => (
          <TreeRenderer key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PageTree;
