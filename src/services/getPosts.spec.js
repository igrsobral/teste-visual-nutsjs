import mockedAxios from 'axios'
import getPosts from './getPosts'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const mocks = {
  users: require("../test/mocks/users"),
  posts: require("../test/mocks/posts"),
  letter: require("../test/mocks/letter")
}

jest.mock("axios")

mockedAxios
    .get
    .mockResolvedValueOnce(mocks.posts)

describe('Async requests', () => {
  afterEach(jest.clearAllMocks)

  it('should return posts and when requested', async () => {
    const posts = await getPosts()

    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`)
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(posts).toEqual(mocks.posts)
  })
    
  it('should return message of error when request fails', async () => {
    const message = 'cant get the posts'
    mockedAxios.get.mockRejectedValueOnce(new Error(message));
    
    const [posts] = await getPosts()

    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`);
    expect(posts).toEqual("can't get the posts");
  })

})