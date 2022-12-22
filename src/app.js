const getPosts = require('./services/getPosts')
const getUsers = require('./services/getUsers')
const LetterService = require("./services/letterServices");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

;
(async () => {
  const letterService = new LetterService();
  const { data: users } = await getUsers()
  const { data: posts } = await getPosts()
  const result = await letterService.get(users, posts)
  console.log(result)
})()
  