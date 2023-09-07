const assert = require('assert');

const User = require('../src/user');

describe('Deleting a user', () => {
  let ali;

  beforeEach(async () => {
      ali = new User({ name: 'Ali' });
      await ali.save();
  });

  it('model instance remove', async () => {
      await ali.deleteOne();
      const user = await User.findOne({ name: 'Ali' });
      assert(user === null);
  });
});


    it('class method remove', () => {

      //Remove of bunch of records with some given criteraia





    });

    it('class method findAndRemove', () => {
        //User
    });

    it('class method findByIdAndRemove', () => {});

