import { Table } from "flowbite-react";
import { Dependency } from "../models/PackageJson";
import Item from "./Item";

interface IProps {
  data: Dependency;
}
const PackageTable = ({ data }: IProps) => {
  const handleItemChange = (name: string, version: string) => {
    data;
  };
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Yours</Table.HeadCell>
        <Table.HeadCell>Latest</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data &&
          Object.keys(data).map((name, index) => (
            <Item
              key={`dependencies-${index}-${name}`}
              name={name}
              version={data[name] || ""}
              onItemUpdate={handleItemChange}
            />
          ))}
      </Table.Body>
    </Table>
  );
};

export default PackageTable;
