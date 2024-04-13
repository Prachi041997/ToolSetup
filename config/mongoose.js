const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://prajapatiankur8349:8gWXnlNhA9LtZ7JH@cluster0.r9fef6l.mongodb.net/Axiamatic'; 

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(error => console.error('Error connecting to MongoDB:', error));