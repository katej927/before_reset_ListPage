import React, { Component } from "react";
import SubCategory from "../SubCategory/SubCategory";
import Product from "../Product/Product";
import "./ProductCategory.scss";

export default class ProductCategory extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     activeSorting: "",
  //   };
  // }

  render() {
    return (
      <main className="productcategory">
        <section>
          <a>사진으로 보기</a>
          <a>영양정보로 보기</a>
        </section>
        <select>
          <option value="">상세분류</option>
          <option value="new">신규 출시된 메뉴</option>
          <option value="season">한정기간 출시되는 시즌성 메뉴</option>
        </select>
        {this.props.categories.map((category) => {
          return (
            <SubCategory
              key={category.subcategory_id}
              name={category.name}
              desc={category.description}
              products={category.products}
            />
          );
        })}
      </main>
    );
  }
}
