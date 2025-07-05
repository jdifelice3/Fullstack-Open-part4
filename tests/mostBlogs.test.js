const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const blogs = require('../blogs.js')

describe('favorite blog', () => {

    test('Test author with the most blogs', () => {
        
        console.log('in mostBlogs.test.js')
        console.log('blogs', blogs)
        console.log(typeof blogs);         // Should be 'object'
        console.log(Array.isArray(blogs)); // Should be true
        //console.log(blogs)
        const mostBlogsAuthor = listHelper.getMostBlogsAuthor(blogs)
        assert.strictEqual(mostBlogsAuthor, 'Fatima El-Masri')
    })
       
})