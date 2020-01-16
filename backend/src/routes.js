const {Router } = require('express');

const routes = Router();

routes.post('/users', (request, response) => {

    if(request.body !== null && request.body !== undefined)
    {
        return response.json({...request.body});
    }

    return response.json({});
});

module.exports = routes;