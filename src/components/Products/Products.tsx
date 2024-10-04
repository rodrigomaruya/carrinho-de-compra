import fetchProducts from "../../api/fetchProducts";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Products() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { products, setProducts, loading, setLoading } = context;

  useEffect(() => {
    fetchProducts({ query: "computador" }).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [setLoading, setProducts]);

  return (
    (loading && <Loading />) || (
      <div className="products container">
        {products.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    )
  );
}
