const model = require('../model')

module.exports = {
    index: async (ctx, next) => {
        await ctx.render('index',{
            btn:'提交'
        })
        // let data = await model.getData()
        // console.log("------------");
        // console.log(data.data);
        // console.log("------------");
    },
    user: async (ctx, next) => {
        await ctx.render('user')
    },
    list: async (ctx, next) => {
        // let data = await model.getData();
        // ctx.body = data.data;
        // await ctx.render('user')
        console.log(ctx.request.body);
        
        ctx.body={
            name:"zhangtian",
            age:23
        }
    }
}