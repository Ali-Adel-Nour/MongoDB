const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let ali;

    beforeEach(async () => {
        ali = new User({ name: 'Ali' });
        await ali.save();
    });

    it('model instance remove', async () => {
        await ali.deleteOne(); // Use remove() to delete the instance
        const user = await User.findOne({ name: 'Ali' });
        assert(user === null);
    });

    it('class method remove', async () => {
        // Remove a user by finding and removing using class method
        await User.deleteOne({ name: 'Ali' });
        const user = await User.findOne({ name: 'Ali' });
        assert(user === null);
    });

    it('class method findOneAndRemove', async () => {
        // Find and remove a user using class method findOneAndRemove()
        await User.findOneAndRemove({ name: 'Ali' });
        const user = await User.findOne({ name: 'Ali' });
        assert(user === null);
    });

    it('class method findByIdAndRemove', async () => {
        // Find and remove a user by ID using class method findByIdAndRemove()
        await User.findByIdAndRemove(ali._id);
        const user = await User.findOne({ name: 'Ali' });
        assert(user === null);
    });
});
