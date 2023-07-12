import { Dispatch, SetStateAction } from "react";
import findIcon from "../../../static/findIcon.svg";
import { Select, Option, Input } from "@ui5/webcomponents-react";

export interface SearchBarProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
  getMovie: () => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { title, setType, setTitle, getMovie } = props;
  return (
    <div className="search-bar">
      <Select
        className="select-ui"
        defaultValue={"movie"}
        onChange={(e) => setType(e.detail.selectedOption.value)}
      >
        <Option value={"movie"}>Filme</Option>
        <Option value={"series"}>Série</Option>
      </Select>

      <Input
        onKeyDown={(e) => {
          if (e.code === "Enter") getMovie();
        }}
        onInput={(e) => {
          setTitle(e.target.value!);
        }}
        className="input-ui"
        type="Text"
        value={title}
        placeholder="Procure por filmes ou séries"
      />

      <img
        className="search-icon"
        onClick={() => {
          if (title.length) getMovie();
        }}
        alt="Icone de procura"
        src={findIcon}
        width={17}
        height={17}
      />
    </div>
  );
};
