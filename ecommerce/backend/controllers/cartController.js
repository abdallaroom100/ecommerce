import Cart from "../model/CartModel.js";
import User from "../model/usreModel.js";

export const addToCart = async (req, res) => {
  const { name, price, shownImage, type, productId, userId } = req.body.product;
  try {
    // const exist = await Cart.aggregate([
    //   // Unwind the products array to deconstruct it
    //   { $unwind: "$products" },
    //   // Match documents where the productId matches the one you're checking
    //   { $match: { "products.productId": productId } },
    //   // Project only the productId field
    //   { $project: { _id: 0, productId: "$products.productId" } },
    // ]);

    const product = await Cart.findOne(
      { userId, "products.productId": productId }
  );
   
    if (product) {
      // const product = await Cart.findOneAndUpdate({userId:userId},{$inc:{"$products.quantity":1}},{new:true})
      const product = await Cart.findOneAndUpdate(
        { userId, "products.productId": productId },
        { $inc: { "products.$.quantity": 1 } },
        { new: true }
      );

      return res.status(200).json(product);
    } else {
      const product = await Cart.findOneAndUpdate(
        { userId },
        {
          $push: {
            products: { name, shownImage, productId, price, type, quantity: 1 },
          },
        },
        { new: true }
      );
      console.log("no");
      return res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
