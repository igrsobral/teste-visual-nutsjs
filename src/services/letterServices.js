class LetterService {
  formatLetterByUsersAndPosts (users, posts) {
      if(!posts || !users) return []
      let letter = []
        for(const user of users){
          const userObj = {
            ...user,
            posts: []
          }

          for(const post of posts){
            if(post.userId === user.id){
              userObj.posts.push(post);
            }
          }
          letter.push(userObj)
        }
        return letter
  }

  async get(users, posts) {
    return this.formatLetterByUsersAndPosts(users, posts)
  }
}

module.exports = LetterService;