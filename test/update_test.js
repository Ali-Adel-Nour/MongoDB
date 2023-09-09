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

  asswert(users.length===1)
  assert(user[0].name === 'Alex')
})
  });
});
