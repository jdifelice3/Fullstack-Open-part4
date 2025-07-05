const totalLikes = (blogs) => {
    let totalLikes = 0  
    blogs.foreach( blog=> {
        totalLikes += Number(blog.likes)
    })

    return totalLikes
}

module.exports = {
  totalLikes
}