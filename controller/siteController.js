

const Accounts = require('../modle/accounts');

class siteController {
    index(req, res, next) {
        res.json('bui khac tao');
    }

    async getaccount(req, res, next) {
        try {
            await Accounts.find({})
                .then(accounts => {
                    res.json({
                        accounts: accounts
                    })
                })
                .catch(next);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new siteController;