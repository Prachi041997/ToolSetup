const mongoose = require('mongoose');

const connectionString = 'mongodb://0.0.0.0:27017/Axiamatic'; 

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(error => console.error('Error connecting to MongoDB:', error));