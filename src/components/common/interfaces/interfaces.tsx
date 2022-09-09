export interface IData {
  title: string;
  extra?: JSX.Element;
  items: { key: string; label: string; children: JSX.Element }[];
  breadcrumb?: string[];
}
