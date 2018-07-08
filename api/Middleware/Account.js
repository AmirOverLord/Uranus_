import Joi from 'joi';

const schema = {
    create: {
        body: {
            account: Joi.string().min(3).required().trim(),
            password: Joi.string().min(3).regex(/[a-zA-Z0-9]{3,30}/).required().trim(),
            password_confirm: Joi.string().required().valid(Joi.ref('password')).options({
                language: {
                    any: {
                        allowOnly: '!!Passwords do not match',
                    }
                }
            }),
            email: Joi.string().email().required().trim()
        }
    },
    update: {
        params: {
            account_id: Joi.string().required().trim()
        },
        body: {
            account: Joi.string().min(3).trim(),
            password: Joi.string().min(3).regex(/[a-zA-Z0-9]{3,30}/).trim(),
            email: Joi.string().email().trim()
        }
    },
    delete: {
        params: {
            account_id: Joi.string().required().trim()
        },
        body: {
        }
    },
    login: {
        body: {
            account: Joi.string().min(3).required().trim(),
            password: Joi.string().min(3).regex(/[a-zA-Z0-9]{3,30}/).required().trim()}
    }
};

export default schema;