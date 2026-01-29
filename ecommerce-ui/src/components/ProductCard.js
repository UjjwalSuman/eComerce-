function ProductCard({ product, addToCart }) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          padding: 10,
          borderRadius: 5
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          height="100"
          style={{ objectFit: "contain", width: "100%" }}
        />
  
        <h4>{product.title}</h4>
        <p>₹ {product.price}</p>
  
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  