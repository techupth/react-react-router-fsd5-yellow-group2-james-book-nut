import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CreateProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPricec] = useState("");
  const [description, setDescription] = useState("");

  const nevigate = useNavigate();

  const getPost = async () => {
    await axios.post("http://localhost:4001/products", {
      name,
      image,
      price,
      description,
    });
    // nevigate("/");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getPost();
    nevigate("/");
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              {
                setImage(e.target.value);
              }
            }}
            value={image}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              {
                setPricec(e.target.value);
              }
            }}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              {
                setDescription(e.target.value);
              }
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
