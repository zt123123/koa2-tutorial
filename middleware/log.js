const path = require('path')
const log4js = require('log4js');
log4js.configure({
    appenders: {
        http: {
            type: 'dateFile',
            filename: path.join(__dirname, '../logs/http'),
            pattern: '-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        }
    },
    categories: { default: { appenders: ['http'], level: 'info' } }
});
const logger = log4js.getLogger('http');


module.exports = () => {
    return async (ctx, next) => {
        // console.log(ctx.request);
        const startTime = +new Date();
        const { method, url, header } = ctx.request

        const { host } = header

        logger.info('Cheese is Gouda.');

        await next();

        const endTime = +new Date();
        const responseTime = endTime - startTime

        logger.info(`响应时间为：${responseTime / 1000}s`);
    }

}