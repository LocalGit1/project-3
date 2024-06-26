const router = require("express").Router();
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//Create Product
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(501).json("Unable to update user");
    };
});

//Delete Product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get Products
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get All Products
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } });
        } else {
            products = await Product.find()
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get Product By Category
router.get("/product-category", async (req, res) => {
    const category = req.query.category;
    try {
        let products;
        products = await Product.find({ categories: { $in: [category] } });
        res.render("categories", { title: "Aroma | Shop | Products", products, userDetails: req.cookies._ust })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;