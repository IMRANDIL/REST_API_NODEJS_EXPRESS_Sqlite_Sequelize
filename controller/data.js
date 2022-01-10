const res = require('express/lib/response');
const Post = require('../model/Post');





const RequestData = async (title, content) => {
    const data = await Post.create({
        title: title,
        content: content
    });

    return data;


}




module.exports = RequestData;