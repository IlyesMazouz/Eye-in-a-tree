import React, { useState, useEffect } from "react"
import { assets } from "../assets/assets"
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import "../styles/Add.css"

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null); 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("");
  
  useEffect(() => {
    return () => {
      if (image1) {
        URL.revokeObjectURL(image1);
      }
    };
  }, [image1]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);

      if (image1) formData.append("image1", image1);

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });

      if (response.data.success) {
        setName('');
        setDescription('');
        setImage1(null);
        setPrice('');
        toast.success("Product added successfully!");
      } else {
        toast.error(response.data.message || "Failed to add product.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="form-card">
        <h2 className="form-title">Add New Product</h2>
        <form className="product-form" onSubmit={onSubmitHandler}>
          <div className="input-group">
            <p className="label">Upload Image</p>
            <label className="image-upload">
              {image1 ? (
                <img
                  src={URL.createObjectURL(image1)}
                  className="preview-img"
                  alt="Preview"
                />
              ) : (
                <img src={assets.upload_icone} className="upload-icon" alt="Upload Icon" />
              )}
              <input type="file" onChange={(e) => setImage1(e.target.files[0])} hidden />
            </label>
          </div>
          <div className="input-group">
            <p className="label">Product Name</p>
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <p className="label">Product Description</p>
            <textarea
              placeholder="Write a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field description-field"
              required
            />
          </div>
          <div className="category-container">
            <div>
              <p className="label">Category</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input-field"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>

            <div>
              <p className="label">Sub-category</p>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="input-field"
              >
                <option value="necklace">Necklace</option>
                <option value="earrings">Earrings</option>
                <option value="rings">Rings</option>
                <option value="combinations">Combinations</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <p className="label">Price</p>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
