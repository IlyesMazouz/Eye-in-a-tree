import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import '../styles/Orders.css'

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        if (!token) return;

        try {
            const response = await axios.post(
                backendUrl + '/api/order/list',
                {},
                { headers: { token } }
            );
            if (response.data.success) {
                setOrders(response.data.orders);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
			toast.error(response.data.message)
        }
    };

	const statusHandler = async (event,orderId) => {
		try {
			const response = await axios.post(
                backendUrl + '/api/order/status',
                {orderId, status:event.target.value},
                { headers: { token } }
            );
			if (response.data.success) {
				await fetchAllOrders()
			}
		} catch (error) {
			console.log(error)
			toast.error(response.data.message)
		}
	}

    useEffect(() => {
        fetchAllOrders();
    }, [token]);

    return (
        <div className="orders-container">
            <h2 className="orders-title">Admin Orders</h2>
            <div className="orders-list">
                {orders.map((order, index) => (
                    <div key={index} className="order-card">
                        <img src={assets.parcel_icone} alt="Order Icon" className="order-icon" />
                        <div className="order-info">
                            <h4>Order Details</h4>
                            <div className="order-items">
                                {order.items.map((item, index) => (
                                    <p key={index}>
                                        {item.name} x {item.quantity}
                                    </p>
                                ))}
                            </div>
                            <h4>Customer</h4>
                            <p>{order.address.firstName} {order.address.lastName}</p>
                            <p>{order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}</p>
                            <p>{order.address.phone}</p>
                        </div>
                        <div className="order-summary">
                            <p><strong>Items:</strong> {order.items.length}</p>
                            <p><strong>Method:</strong> {order.paymentMethod}</p>
                            <p><strong>Payment:</strong> {order.payment ? 'Done ✅' : 'Pending ⏳'}</p>
                            <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                            <p><strong>Total:</strong> {order.amount} {currency}</p>
                            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="order-status">
                                <option value="Order Placed">Order Placed</option>
                                <option value="Packing">Packing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
