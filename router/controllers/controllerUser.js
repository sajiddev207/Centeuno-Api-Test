const express = require("express")
const router = express.Router();
const productList = require('../../item_list.json')

const list = (req, res) => {
    let { size, page } = req.query
    size ||= 10
    page ||= 1
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const products = productList.slice(startIndex, endIndex).map((product) => ({
        id: product.id,
        item_name: product.item_name,
        item_image: product.item_image,
        item_price: product.item_price,
    })) ?? []
    res.json({ data: products })
}

const productById = (req, res) => {
    const productId = req.params.id
    const product = productList.find(product => product.id == productId)
    if (!product) {
        return res.status(404).json({ "message": "Product not found" })
    }
    res.json({ message: "Success", data: product })

}

router.get('/list', list)
router.get('/:id', productById)

module.exports = router;
