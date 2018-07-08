const path = require('path');
const bodyParser = require('koa-bodyparser')
const views = require('koa-views');
const render = require('koa-ejs');
const static = require('koa-static');
const log = require('./log');

module.exports = (app) => {
    app.use(log())
    app.use(static(path.join(__dirname, '../public')));
    app.use(bodyParser());
    app.use(views(__dirname + '/views'));
    render(app, {
        root: path.join(__dirname, '../views'),
        layout: 'template',
        viewExt: 'html',
        cache: false,
        debug: false
    });
}