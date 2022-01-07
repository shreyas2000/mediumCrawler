const searchController = require("./Controller/searchController")

const routes = [
    {
        method : 'GET',
        path : 'search',
        handler : searchController.search.bind(searchController)
    },
    {
        method : 'GET',
        path : 'search2',
        handler : searchController.search2.bind(searchController)
    }
]

module.exports = routes;