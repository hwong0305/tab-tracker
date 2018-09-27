const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = Joi.object().keys({
            firstName: Joi.string().regex(/^[a-zA-Z]+$/),
            lastName: Joi.string().regex(/^[a-zA-Z]+$/),
            email: Joi.string().email(),
            password: Joi.string()
                .alphanum()
                .min(6)
        });
        const result = Joi.validate(req.body, schema);
        if (result.error === null) {
            next();
        } else {
            res.status(500).send({
                error: result.error
            });
        }
    }
};
