const axios = require('axios')

module.exports = {
    getData: () => {
        const api = "http://api.douban.com/v2/movie/top250"
        return new Promise((resolve, reject) => {
            axios.get(api)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        })
    }
}