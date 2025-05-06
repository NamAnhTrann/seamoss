//this is to map the existed cart, sicne cart will be cleared.
const orderItemSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  productName: String,
  productPrice: Number,
  quantity: Number,
  imagePath: String,
});

const orderSchema = new mongoose.Schema({
  userPhone: String,
  orderStatus: {
    type: String,
    enum: ["Pending", "Paid", "Delivered", "Cancelled"],
    default: "Pending",
  },
  orderSubTotal: {
    type: Number,
    required: true,
  },
  orderItems: [orderItemSchema],
  orderCreatedAt: {
    type: Date,
    default: Date.now,
  },
  orderTotalAmount: {
    type: Number,
    required: true,
  },
  orderUpdatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
