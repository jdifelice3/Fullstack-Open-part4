const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
    // console.log('in list_helper.totalLikes')
    // console.log(typeof blogs);         // Should be 'object'
    // console.log(Array.isArray(blogs)); // Should be true
    // console.log(blogs);                // Inspect the actual content
    // console.log('blogs.length',blogs.length)
    let totalLikes = 0  
    if(blogs.length === 1){
      return blogs[0].likes;
    } else {
      for(let i = 0; i < blogs.length; i++){ 
          // console.log('in loop. i =',i)
          // console.log('blogs[i].likes',blogs[i].likes)
          if(blogs[i].likes){
            totalLikes += Number(blogs[i].likes)
          } else {
            console.log('No likes for blog at index', i)
          }
      }

      return totalLikes
    }
}

const favoriteBlog = (blogs) => {
  //console.log('in list_helper.favoriteBlog')
  const stortedBlogs = blogs.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));
  //console.log('stortedBlogs', stortedBlogs)
  return stortedBlogs[0];
}

const getMostBlogsAuthor = (blogs) => {
  console.log('in list_helper.getMostBlogsAuthor')
  console.log('blogs', blogs)
  console.log(typeof blogs);         // Should be 'object'
  console.log(Array.isArray(blogs)); // Should be true
  console.log('blogs.length', blogs.length)
  const authorBlogCount = blogs.reduce((acc,blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1;
    return acc;
  }, {}); 
  const mostBlogsAuthor = Object.keys(authorBlogCount).reduce((a, b) => authorBlogCount[a] > authorBlogCount[b] ? a : b);
  console.log('author', mostBlogsAuthor)
  return mostBlogsAuthor;  
}

module.exports = {
  dummy, totalLikes, favoriteBlog, getMostBlogsAuthor
}
