import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import '../styles/List.css'

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <h2 className="page-title">All Products List</h2>
      <div className="product-list">
        <div className="list-header">
          <div className="header-item">Image</div>
          <div className="header-item">Name</div>
          <div className="header-item">Category</div>
          <div className="header-item">Price</div>
          <div className="header-item">Action</div>
        </div>
        {list.map((item, index) => (
          <div key={index} className="product-item">
            <div className="product-image">
              <img src={item.image[0]} alt={item.name} />
            </div>
            <div className="product-name">{item.name}</div>
            <div className="product-category">{item.category}</div>
            <div className="product-price">{item.price}{currency}</div>
            <div className="product-action">
              <button className="remove-btn" onClick={() => removeProduct(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
