const Koa = require("koa")
const router = new require('koa-router')()

let app = new Koa();
app.use(router.routes());

router.get("/list", async (ctx, next) => {
    ctx.body={
        name: "aaa",
        age: 23
    };
    await next()
})

module.exports = app