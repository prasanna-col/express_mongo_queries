import express from "express";
import Order from "../../models/Order/order.js"
const router = express.Router()

router.post("/order/product", async(req, res)=>{
   // Generate a unique order ID
   const order_id = `ORD${Date.now()}`;

   // Extract relevant data from the request
   const { student, items, total_amount, delivery_details } = req.body;

   // Create the shipping information based on delivery details
   const shipping = {
       address: delivery_details.address,
       shipping_method: delivery_details.method || "Standard",
       shipping_cost: delivery_details.cost || 10, // default cost
       estimated_delivery_date: delivery_details.estimated_date || new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // default 5 days later
       tracking_number: `TRACK${Math.floor(Math.random() * 1000000000)}`
   };

   // Automatically set the order date, initial status, and order history
   const orderData = {
       order_id,
       student,
       items,
       total_amount,
       order_date: new Date(),
       status: "Processing",
       order_history: [
           {
               status: "Order Placed",
               date: new Date(),
               notes: "Order received and is being processed."
           }
       ],
       shipping,
   };

   const newOrder = new Order(orderData);

   try {
       const savedOrder = await newOrder.save();
       res.status(201).json({ status: true, message: "Order created successfully", value: savedOrder });
   } catch (error) {
       console.error("Error adding order:", error);
       res.status(500).json({ status: false, message: "Failed to create order", error });
   }
})

export default router;