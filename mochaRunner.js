const Mocha = require("mocha")

const mocha = new Mocha({
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "./docs/"
    }
})


mocha.addFile("./server/router.spec.js")

mocha.run(function () {
    console.log("done");
    process.exit()
})