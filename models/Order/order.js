import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  product_id: mongoose.Schema.Types.ObjectId,
  product: String,
  category: String,
  quantity: Number,
  price_per_unit: Number,
  subtotal: Number,
  warranty_years: Number,
  features: {
    brand: String,
    model: String,
    processor: String,
    ram: String,
    storage: String,
    screen_size: String,
    battery: String,
    camera: String,
    connectivity: String,
    battery_life: String,
    noise_cancellation: String,
    water_resistance: String
  }
});

const studentSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: String
});

const paymentSchema = new mongoose.Schema({
  payment_method: String,
  payment_status: String,
  transaction_id: String,
  payment_date: Date
});

const shippingSchema = new mongoose.Schema({
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  shipping_method: String,
  shipping_cost: Number,
  estimated_delivery_date: Date,
  tracking_number: String
});

const orderHistorySchema = new mongoose.Schema({
  status: String,
  date: Date,
  notes: String
});

const orderSchema = new mongoose.Schema({
  order_id: String,
  student: studentSchema,
  items: [itemSchema],
  payment: paymentSchema,
  shipping: shippingSchema,
  total_amount: Number,
  order_date: Date,
  status: String,
  order_history: [orderHistorySchema]
}, {collection:"order"});

const Order = mongoose.model("Order", orderSchema);

export default Order;
