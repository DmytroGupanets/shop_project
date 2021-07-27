import React, { Component } from "react";
import AdvFormStyled from "./AdvFormStyled";
import { v4 as uuidv4 } from "uuid";

const categories = ["phones", "laptops"];
const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

class AdvForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ ...initialState });
    this.props.addNewAdv({ ...this.state, id: uuidv4() });
  };

  render() {
    const { name, image, description, price, isSale, category } = this.state;
    return (
      <AdvFormStyled>
        <form className="form" onSubmit={this.onFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Is on sale?
            <input
              type="checkbox"
              name="isSale"
              checked={isSale}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Category:
            <select
              name="category"
              value={category}
              onChange={this.onHandleChange}
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </AdvFormStyled>
    );
  }
}

export default AdvForm;
