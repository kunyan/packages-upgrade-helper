import { Tabs } from "flowbite-react";
import { IPackageJson } from "../models/PackageJson";
import PackageTable from "./PackageTable";

interface IProps {
  data: IPackageJson;
}
const Result = ({ data }: IProps) => {
  const tabItems = [];

  if (data.dependencies) {
    tabItems.push(
      <Tabs.Item title="dependencies" key="dependencies">
        <PackageTable data={data.dependencies} />
      </Tabs.Item>
    );
  }

  if (data.devDependencies) {
    tabItems.push(
      <Tabs.Item title="devDependencies" key="devDependencies">
        <PackageTable data={data.devDependencies} />
      </Tabs.Item>
    );
  }
  return <Tabs.Group style="underline">{tabItems}</Tabs.Group>;
};

export default Result;
