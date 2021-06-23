
class siteController {
    index(req, res, next) {
        res.json('bui khac tao');
    }
}

module.exports = new siteController;