import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  if (!Array.isArray(products)) {
    // จัดการกรณีที่ `products` ไม่ใช่อาร์เรย์ (null, undefined, หรือประเภทข้อมูลที่ไม่ได้คาดหวัง)
    return <div>กำลังโหลดข้อมูล...</div>; // หรือแสดงสถานะการโหลดอย่างเหมาะสม
  }

  const filteredProducts = products.filter(
    (item) =>
      (item.category && item.category.name === "Furniture") ||
      item.category === "laptops"
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lo:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
