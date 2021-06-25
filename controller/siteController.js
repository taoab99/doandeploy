// const db = require('../config/connectdb');

const Accounts = require('../modle/accounts');

class siteController {
    index(req, res, next) {
        res.json('bui khac tao');
    }


    async createacount(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        try {
            let usename = new Accounts({
                email: email,
                password: password
            });

            await usename.save()
                .then(tk => {
                    res.json({
                        tk: tk
                    })
                })
                .catch(next)
        } catch (error) {
            console.log(error);
        }
    }

    async getacounts(req, res, next) {
        try {
            await Accounts.find({})
                .then(tk => {
                    res.json({
                        tk: tk
                    });
                })
                .catch(next);
        } catch (error) {
            console.log('coloi roi error');
        }

    }
}

module.exports = new siteController;