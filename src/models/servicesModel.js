import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, 'Please add a service'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
});

export default mongoose.model('Services', servicesSchema);
