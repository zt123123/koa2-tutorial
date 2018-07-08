const axios = require("axios")
const { expect } = require("chai")

const app = require("./server")
const request = require("supertest")


describe('接口测试', function () {

    let server = app.listen(3100);

    describe('#test server', () => {

        it('#test GET /list', async () => {
            let res = await request(server)
                .get('/list')
                .expect('Content-Type', /json/)
                .expect(200, { name: "aaa", age: 23 });
        });
    });
});