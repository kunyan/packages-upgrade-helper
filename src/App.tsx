import {
  Button,
  DarkThemeToggle,
  Flowbite,
  Footer,
  Navbar,
} from "flowbite-react";
import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import { IPackageJson } from "./models/PackageJson";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState<IPackageJson>();

  const handleChange = (value: string) => {
    setText(value);

    try {
      const _data = JSON.parse(value) as IPackageJson;
      setData(_data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://yankun.org/packages-upgrade-helper">
          <img src={`${import.meta.env.BASE_URL}logo.png`} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Packages Upgrade Helper
          </span>
        </Navbar.Brand>
        {/* <Navbar.Collapse>
          <Navbar.Link href="https://github.com/kunyan/packages-upgrade-helper">
          <img src="/github.svg" />
          </Navbar.Link>
        </Navbar.Collapse> */}
        <div className="flex md:order-2">
        <Flowbite>
          <a
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            href="https://github.com/kunyan/packages-upgrade-helper"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </Flowbite>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        </div>
      </Navbar>
      <div className="container mx-auto">
        <Input value={text} onChange={handleChange} />
        {data && <Result data={data} />}
      </div>
      <Footer container={true}>
        <div className="mx-auto">
          <Footer.Copyright
            href="https://yankun.org/packages-upgrade-helper"
            by=" Kun Yan"
            year={new Date().getFullYear()}
          />
        </div>
      </Footer>
    </>
  );
}

export default App;
