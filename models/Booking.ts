import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  service: { type: String, required: true },
  weight: { type: String },
  pickupDate: { type: Date, required: true },
  pickupTime: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Processing', 'Picked Up', 'Cleaning', 'Ready', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: { type: Date, default: Date.now }
});

export const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
