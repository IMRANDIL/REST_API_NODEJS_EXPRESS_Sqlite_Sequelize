const router = require('express').Router();
const RequestData = require('../controller/data');
const FindAllData = require('../controller/data');
// Read....all......

router.get('/api/v1/post', async (req, res, next) => {
    try {
        const data = await FindAllData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ err: error })
    }
})


router.get('/', (req, res, next) => {
    res.send('Welcome To Rest Api...')
})







//create......

router.post('/api/v1/post', async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const data = await RequestData(title, content);
        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ error });
        next(error)
    }

})



module.exports = router;