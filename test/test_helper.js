const mongoose = require('mongoose');

mongoose.Promise = global.Promise

//execution one time
before(()=>{

  mongoose.connect('mongodb://127.0.0.1:27017/users_test',{
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true,
    })
    mongoose.connection
    .once('open',()=> console.log('Good to go!'))

    .on('error',(error)=>{
      console.warn('Warning:',error);
    })

})


//Hook
beforeEach((done)=>{

  mongoose.connection.collections.users.drop(()=>{

    //Ready to run the next test

    done()

  })
})