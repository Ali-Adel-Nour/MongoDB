const assert = require('assert');

const User = require('../src/user')

describe('Validating records', () => {

  it('requires a user name', () => {
    // if i let it empty like new User ({}) same effect but for other developers that i want here undefined
    const user = new User ({name:'undefined'})

    const validationResult = user.validateSync()

    const {message} = validationResult.errors.name

    assert(message === 'Name is required')
  })

})