import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout";
import { Col, Row } from "antd";
import Item from "../components/Item";
import "../resourses/items.css";
import { useDispatch } from "react-redux";

function Homepage() {
  const [itemsData, setItemsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");

  const categories = [
    {
      name: "Vegetables",
      imageUrl:
        "https://th.bing.com/th/id/OIP.fCTQp7tkOlEa3YRx6tPGxgHaDz?pid=ImgDet&w=650&h=334&rs=1",
    },
    {
      name: "Grocery",
      imageUrl:
        "https://th.bing.com/th/id/OIP.KXu6ujsHEcXAAOG342v8VQHaHa?pid=ImgDet&rs=1",
    },
    {
      name: "Meat",
      imageUrl:
        "https://th.bing.com/th/id/OIP.UfLrAwdYUVHB-OQ7px3fBwHaGC?pid=ImgDet&w=1800&h=1468&rs=1",
    },
    {
      name: "Fish",
      imageUrl:
        "https://mygroceryph.com/pub/media/catalog/category/Fresh_fish_Seafood.jpg",
    },
    {
      name: "Spice",
      imageUrl:
        "https://th.bing.com/th/id/OIP.NZyK-yGBO_CjsQOW3DoD0QHaHa?pid=ImgDet&rs=1",
    },
  ];
  const dispatch = useDispatch();

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
        {categories.map((category) => {
          return (
            <div
              key={category.name}
              className={`d-flex category ${
                selectedCategory === category.name && `selected-category`
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <h4>{category.name}</h4>
              <img src={category.imageUrl} height="50" width="80" alt="" />
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
