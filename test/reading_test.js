const assert = require('assert');

const User = require('../src/user')


describe('Reading users of the database',()=>{

  let ali;

  beforeEach((done)=>{
    ali = new User({name: 'Ali'})
    ali.save()
    .then(()=> done())
  })


  it('finds all  users with a name of ali',()=>{

  })

});