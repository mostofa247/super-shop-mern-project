import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout";
import { Col, Row } from "antd";
import Item from "../components/Item";
import "../resourses/items.css";

function Homepage() {
  const [itemsData, setItemsData] = useState([]);
  const [selectedCategory, setSelectedCategoty] = useState("fruits");

  const getAllItems = () => {
    axios
      .get("/api/items/get-all-items")
      .then((response) => {
        //const item = response.data;
        setItemsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <DefaultLayout>
      <div className="d-flex categories">
        {itemsData.map((category) => {
          return (
            <div
              onClick={() => setSelectedCategoty(category.category)}
              className={`d-flex category ${
                selectedCategory === category.category && "selected-category"
              }`}
            >
              <h4>{category.category}</h4>
            </div>
          );
        })}
      </div>

      <Row gutter={20}>
        {itemsData
          .filter((i) => i.category === selectedCategory)
          .map((item) => {
            return (
              <Col xs={24} lg={6} md={12} sm={6}>
                <Item item={item} />
              </Col>
            );
          })}
      </Row>
    </DefaultLayout>
  );
}

export default Homepage;
