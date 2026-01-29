import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);

  // Fetch Products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  // Add to Cart
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <SearchBar setSearch={setSearch} />
        <SortDropdown setSort={setSort} />
        <div>🛒 Cart Items: {cart.length}</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20
        }}
      >
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
