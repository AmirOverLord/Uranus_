import Joi from 'joi';

const schema = {
    create: {
        body: {
            title: Joi.string().min(3).required().trim(),
            body: Joi.string().min(3).required().trim(),
            type: Joi.string().required().trim()
        }
    },
    update: {
        params: {
            id: Joi.string().required().trim()
        },
        body: {
            title: Joi.string().min(3).trim(),
            body: Joi.string().min(3).trim(),
            type: Joi.string().trim()
        }
    },
    delete: {
        params: {
            id: Joi.string().required().trim()
        },
        body: {
        }
    },
    find: {
        params: {
            id: Joi.string().required().trim()
        },
        body: {
        }
    }
};

export default schema;