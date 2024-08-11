import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.product.count || 0
    };
  }

  IncrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderNames() {
    if (this.props.product.names.length === 0) {
      return <h2>No names</h2>;
    } else {
      return (
        <ul>
          {this.props.product.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      );
    }
  }

  clickHandler = () => {
    console.log("clicked");
  };

  render() {
    const classes = this.state.count === 0 ? "btn btn-warning" : "btn btn-primary";
    const { name } = this.props.product;

    return (
      <div className="row">
        <div className="col-2">
          <span>{name}</span>
        </div>
        <div className="col-3">
          <span className={classes}>{this.state.count}</span>
          <button className="btn btn-primary" onClick={this.IncrementHandler}>
            add
          </button>
          <span onClick={() => this.props.onDelete(this.props.product)}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
