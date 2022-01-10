const res = require('express/lib/response');
const Post = require('../model/Post');





const RequestData = async (title, content) => {
    const data = await Post.create({
        title: title,
        content: content
    });

    return data;


};


const FindAllData = async () => {
    const data = await Post.findAll();
    return data;
}




module.exports = RequestData;
module.exports = FindAllData;