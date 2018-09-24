const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../config/config').secret;

function jwtSignUser(payload) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(payload, secret, {
        expiresIn: ONE_WEEK
    });
}

module.exports = {
    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 12);
            const user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: password
            });
            res.send({
                user: user,
                token: jwtSignUser(user.toJSON())
            });
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
                const match = await bcrypt.compare(
                    req.body.password,
                    user.password
                );
                if (match) {
                    res.send({
                        user: user,
                        token: jwtSignUser(user.toJSON())
                    });
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
    },

    async index(req, res) {
        try {
            const users = await User.findAll({});
            res.send(users);
        } catch (error) {
            res.status(500).send({
                error: error
            })
        }
    }
};
