import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder extends Document {
  orderId: string;
  email: string;
  total: number;
  paymentStatus: string;
  shipping?: object | null;
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  total: { type: Number, required: true },
  paymentStatus: { type: String, required: true },
  shipping: { type: Object, default: null },
  createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default OrderModel;
