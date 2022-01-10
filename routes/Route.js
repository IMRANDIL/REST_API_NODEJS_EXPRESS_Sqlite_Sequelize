const router = require('express').Router();
const RequestData = require('../controller/data');

router.get('/', (req, res, next) => {
    res.send('Welcome To Rest Api...')
})

//create......

router.post('api/v1/post', (req, res, next) => {
    try {
        const { title, content } = req.body;
        const data = RequestData(title, content);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
        next(error)
    }

})



module.exports = router;