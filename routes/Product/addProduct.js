import express from "express"

const router = express.Router()

import Product from "../../models/Product/product.js"

router.post("/product/add", async (req, res) => {
    const { name, brand, price, stock, categories, release_date } = req.body

    const newProduct = new Product({ // set as per schema
        name,
        brand,
        price,
        stock,
        categories,
        release_date
    })
    
    try {
        const savedproduct = await newProduct.save()
        res.status(201).json({ status: true, message: "success", value: savedproduct })
    } catch (error) {
        console.log("Error adding school student:", error);
        res.status(500).json({ error, status: false });
    }

})

export default router;