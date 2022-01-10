const res = require('express/lib/response');
const Post = require('../model/Post');





const RequestData = (title, content) => {
    Post.create({
        title,
        content
    });


}




module.exports = RequestData;