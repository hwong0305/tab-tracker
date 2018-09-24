const { User } = require('../models');

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });
            res.send(user);
        } catch (error) {
            res.status(500).send({
                error: error
            });
        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (user) {
                const match = req.body.password === user.password;
                if (match) {
                    res.send(user);
                } else {
                    res.status(401).send({
                        error: 'Incorrect password'
                    });
                }
            } else {
                res.status(404).send({
                    error: 'User not found'
                });
            }
        } catch (error) {
            res.status(500).send({
                error: error
            });
        }
    }
};
