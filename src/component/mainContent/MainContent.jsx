import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLogo } from "../assets/arrow-bottom.svg";
import "./maincontent.css";
import { ReactComponent as LeftLogo } from "../assets/arrow-left-left.svg";
import { ReactComponent as RightLogo } from "../assets/arrow-left.svg";

const MainContent = () => {
  const [displayData, setDisplayData] = useState();
  const [productContainerVisible, setProductContainerVisible] = useState(true);
  const [filterText, setFilterText] = useState("HIDE FILTER");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      console.log(data);
      setDisplayData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleProductContainer = () => {
    setProductContainerVisible(!productContainerVisible);
    setFilterText(productContainerVisible ? "SHOW FILTER" : "HIDE FILTER");
  };
  const handleDoubleClick = () => {
    setProductContainerVisible(true);
  };
  return (
    <div className="main-container">
      <div className="main-content">
        <h2>Discover our products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          commodi tempore, facere fuga explicabo deleniti consectetur?
        </p>
      </div>
      <div className="middle-content">
        <section>
          <h3>20 ITEMS</h3>
          <div className="hide-container" onClick={toggleProductContainer}>
            {productContainerVisible ? <LeftLogo /> : <RightLogo />}
            <span>{filterText}</span>
          </div>
          <div className="Recommended-container">
            <span>RECOMMENDED</span>
            <ArrowLogo />
          </div>
        </section>
      </div>
      <div className="product-container" onDoubleClick={handleDoubleClick}>
        {productContainerVisible && (
          <div className="customizable-container">
            <section>
              <input id="customizble" type="checkbox" required />
              <span>customizable</span>
            </section>
            <section>
              <div>
                <h6>IDEAL FOR</h6>
                <ArrowLogo />
              </div>
              <span>All</span>
            </section>
            <section>
              <div>
                <h6>OCCASION</h6>
                <ArrowLogo />
              </div>

              <span>All</span>
            </section>
            <section>
              <div>
                <h6>WORK</h6>
                <ArrowLogo />
              </div>

              <span>All</span>
            </section>
            <section>
              <div>
                <h6>FABRIC</h6>
                <ArrowLogo />
              </div>
              <span>All</span>
            </section>
            <section>
              <div>
                <h6>SEGEMENT</h6>
                <ArrowLogo />
              </div>
              <span>All</span>
            </section>
            <section>
              <div>
                <h6>SUITABLE FOR</h6>
                <ArrowLogo />
              </div>

              <span>All</span>
            </section>
            <section>
              <div>
                <h6>RAW MATERIAL</h6>
                <ArrowLogo />
              </div>

              <span>All</span>
            </section>
            <section>
              <div>
                <h6>PATTERN</h6>
                <ArrowLogo />
              </div>

              <span>All</span>
            </section>
          </div>
        )}
        <div className="display-container">
          {/* fetching data */}
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            displayData &&
            displayData.map((product, index) => (
              <div className="mini-product" key={index}>
                <img src={product.image} />
                <h6>{product.title}</h6>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
