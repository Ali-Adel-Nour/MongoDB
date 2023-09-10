const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let ahmed;

  beforeEach(async () => {
    ahmed = new User({ name: 'Ahmed' });
    await ahmed.save();
  });

  it('should update a user record by finding and saving', async () => {

ahmed.set('name', 'Alex');

await ahmed.save()

await User.find({})
await ((users)=>{

  assert(users.length===1)
  assert(user[0].name === 'Alex')
})
  });



  it ('A model class can update', async () => {
    await User.updateMany({name:'Ahmed'}, {name:'Mohamed'})
  })

  it ('A model class can find a record and update', async () => {
    await User.findOneAndUpdate({name:'Ahmed'}, {name:'My'})
  })
  it ('A model class can find a record with an Id and update', async () => {
    await User.findByIdAndUpdate(ahmed._id , {name:'Yassin'})
  })
});
