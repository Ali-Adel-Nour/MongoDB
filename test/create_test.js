const assert = require('assert');
const User = require('../src/user')

describe('Creating records',()=>{

  it('saves a user',(done)=>{

// but now after every test he will save a new ali to db
const ali = new User ({name:'Ali'})


ali.save()
.then(()=>{
  //Has saved successfully

  assert(!ali.isNew)
  done()
})
  })

})