const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
    console.log('in list_helper.totalLikes')
    console.log(typeof blogs);         // Should be 'object'
    console.log(Array.isArray(blogs)); // Should be true
    console.log(blogs);                // Inspect the actual content
    console.log('blogs.length',blogs.length)
    let totalLikes = 0  
    if(blogs.length === 1){
      return blogs[0].likes;
    } else {
      for(let i = 0; i < blogs.length; i++){ 
          console.log('in loop. i =',i)
          console.log('blogs[i].likes',blogs[i].likes)
          if(blogs[i].likes){
            totalLikes += Number(blogs[i].likes)
          } else {
            console.log('No likes for blog at index', i)
          }
      }

      return totalLikes
    }
}

module.exports = {
  dummy, totalLikes
}
