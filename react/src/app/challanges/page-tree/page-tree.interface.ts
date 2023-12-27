export interface IPageItem {
  id: string;
  name: string;
  children?: Array<IPageItem>;
}
