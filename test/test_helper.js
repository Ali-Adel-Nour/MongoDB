const mongoose = require('mongoose');

mongoose.Promise = global.Promise

//execution one timeconst mongoose = require('mongoose');

before(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/users_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('open', () => {
      console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (error) => {
      console.warn('Warning:', error);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});



//Hook
beforeEach(async()=>{

 await  mongoose.connection.collections.users.drop(()=>{

    //Ready to run the next test



  })
})