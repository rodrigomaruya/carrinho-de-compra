import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import { productsProps } from "../type/types";
import AppContext from "../../context/AppContext";

export default function SearchBar() {
  const context = useContext(AppContext);
  const [search, setSearch] = useState<string>("");
  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { setProducts, setLoading } = context;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const products: Array<productsProps> = await fetchProducts({
      query: search,
    });
    setProducts(products);
    setLoading(false);
    setSearch("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar por produtos"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />

      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
}
