import { Badge, Button, Spinner } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import semver from "semver";
import { shouldUpdate } from "../utils/updateHelper";

interface IProps {
  name: string;
  version: string;
  onItemUpdate: (name: string, version: string) => void;
}

const Item = ({ name, version, onItemUpdate }: IProps) => {
  const [tags, setTags] = useState<{ [name: string]: string }>();
  const [isLoading, setLoading] = useState(false);
  const fetchData = useCallback(async () => {
    if (!version.startsWith("workspace")) {
      setLoading(true);
      const result = await fetch(`https://registry.npmjs.com/${name}`);
      const data = await result.json();
      const tags = data["dist-tags"];
      setTags(tags);
      setLoading(false);
    }
  }, [name]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onClickUpdate = () => {
    onItemUpdate && tags && onItemUpdate(name, tags["latest"]);
  };

  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        <a
          href={`https://www.npmjs.com/package/${name}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </th>
      <td className="px-6 py-4">{version}</td>
      <td className="px-6 py-4">
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <Badge color={tags ? shouldUpdate(version, tags.latest) : "default"}>
            {tags?.latest}
          </Badge>
        )}
      </td>
    </tr>
  );
};

export default Item;
