import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Footer from "./component/footer";
import Header from "./component/Header";
import arr from "./utils/dummy";

function App() {
  const [data, setData] = useState(arr);
  const [activeSort, setActiveSort] = useState("all");

  function sortProducts(type) {
    setActiveSort(type);

    // ALWAYS sort from original arr — fixes the "works once only" bug
    let sorted = [...arr];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    }

    if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    if (type === "mid") {
      sorted = sorted.filter((item) => item.price >= 700 && item.price <= 1500);
    }

    // "all" resets to original
    setData(sorted);
  }

  return (
    <>
      <Header sortProducts={sortProducts} activeSort={activeSort} />

      <div className="page-title">
        <h2>Trending Now <span>{data.length} items</span></h2>
      </div>

      <div className="middle">
        {data.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            offer={value.Offer}
            price={value.price}
            image={value.image}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);