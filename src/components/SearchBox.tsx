import React from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "react-router";

const SearchBox = () => {
  const [search, setSearch] = useSearchParams();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch((prev) => {
      prev.set("q", e.target.value);
      return prev;
    });
  }

  return (
    <Input
      placeholder="Search products...."
      onChange={handleChange}
      className="flex-1 shadow-none"
    />
  );
};

export default SearchBox;
