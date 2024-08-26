import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categories: { type: [String], required: true },
    release_date: { type: Date, required: true },
    warranty_years: { type: Number, required: true },
    features: {
        model: { type: String, required: false },
        processor: { type: String, required: false },
        ram: { type: String, required: false },
        storage: { type: String, required: false },
        screen_size: { type: String, required: false },
        battery: { type: String, required: false },
        camera: { type: String, required: false },
        connectivity: { type: String, required: false },
        battery_life: { type: String, required: false },
        noise_cancellation: { type: Boolean, required: false },
        water_resistance: { type: Boolean, required: false },
        sensors: { type: [String], required: false }, // For wearables
        smart_features: { type: [String], required: false } // For home electronics
    }
}, {collection:"product"})

const productModel = mongoose.model("product",productSchema)

export default productModel;