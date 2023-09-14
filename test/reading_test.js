const assert = require('assert');

const User = require('../src/user')

/*
describe('Reading users of the database',()=>{

  let ali;

  beforeEach((done)=>{
    ali = new User({name: 'Ali'})
    ali.save()
    .then(()=> done())
  })


  it('finds all  users with a name of ali',()=>{

  //instance of a user

  User.find({name: 'Ali'})
  .then((users)=>{
    console.log(users)
    done()
  })

  })

});
*/

describe('Reading users of the database', () => {
  let ali;

  beforeEach(async () => {
    ali = new User({ name: 'Ali' });
    await ali.save();
  });

  it('finds all users with a name of Ali', async () => {
    const users = await User.find({ name: 'Ali' });
    console.log(users);
    assert(users[0]._id.toString() === ali._id.toString());
  });
  it('find a user with a particular id',async()=>{

    const user = await User.findOne({_id:ali._id})
    assert(user.name === 'Ali');
  })

  it('A user can have their postcount incremented by 1 ', async () => {
    await ali.set('postCount', 1);
});

});
