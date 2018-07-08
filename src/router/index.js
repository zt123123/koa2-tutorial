const router = new require('koa-router')()
const controller = require('../controller');

module.exports = (app) => {
    app.use(router.routes());
    router.get('/', controller.index)
    router.get('/user', controller.user)
    router.post('/list', controller.list)
}

