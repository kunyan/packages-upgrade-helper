import { Label, Textarea } from "flowbite-react";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}
const Input = ({ value, onChange }: IProps) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="packageJson" value="Paste your package.json" />
      </div>
      <Textarea
        id="packageJson"
        placeholder="Your package.json"
        value={value}
        required={true}
        onChange={(e) => onChange(e.currentTarget.value)}
        rows={20}
      />
    </>
  );
};

export default Input;
