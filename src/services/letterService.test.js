const LetterService = require("./letterServices")
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
import mockedInvalidUsersData from '../test/mocks/invalid-user';

const mocks = {
  users: require("../test/mocks/users"),
  posts: require("../test/mocks/posts"),
  letter: require("../test/mocks/letter")
}

describe(('LetterService suite test'), () => {
  let letterService = {}

  beforeEach(() => {
    letterService = new LetterService()
    letterService.formatLetterByUsersAndPosts()
  })
  
  it('should get users and posts and return letter array of objects',  async () => {
    const [items] = letterService.formatLetterByUsersAndPosts(mocks.users, mocks.posts)
    expect(items).toEqual(mocks.letter)
  });
  
  it('should return empty array if users or posts are not provided',  async () => {
    const items = letterService.formatLetterByUsersAndPosts()
    expect(items).toEqual([])
  });

  it('should verify if post user id is equal user id',  async () => {
    const [items] = letterService.formatLetterByUsersAndPosts(mockedInvalidUsersData, mocks.posts)
    expect(items.posts).toEqual([])
  });
 
  it('should call "get" method and return formatted letter array of object ',  async () => {
    const letterObject = await letterService.get(mocks.users, mocks.posts)
    const [letter] = letterObject
    expect(letter).toEqual(mocks.letter)
  });
})