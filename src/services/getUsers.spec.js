import mockedAxios from 'axios'
import getUsers from './getUsers'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const mocks = {
  users: require("../test/mocks/users"),
  posts: require("../test/mocks/posts"),
  letter: require("../test/mocks/letter")
}

jest.mock("axios")

mockedAxios
    .get
    .mockResolvedValueOnce(mocks.users)

describe('Async requests', () => {
  it('should return users and when requested', async () => {
    const users = await getUsers()
    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(users).toEqual(mocks.users)
  })
  
  it('should return message of error when request fails', async () => {
    const message = 'cant get the users'
    mockedAxios.get.mockRejectedValueOnce(new Error(message));
    
    const [users] = await getUsers()

    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
    expect(users).toEqual("can't get the users");
  })
})