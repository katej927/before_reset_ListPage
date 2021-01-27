import React, { Component } from "react";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import "./ProductList.scss";

export default class ProductList extends Component {
  state = {
    categories: [],
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("http://localhost:3000/data/productList.json")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res.results }));
  }

  render() {
    return (
      <div className="productlist">
        <nav>네브바 자리</nav>
        <header>
          <p>음료</p>
          <div>MENU 음료</div>
        </header>
        <section className="classification">분류보기</section>
        <ProductCategory categories={this.state.categories} />
      </div>
    );
  }
}
