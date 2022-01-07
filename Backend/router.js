const url = require("url")


module.exports = async (req, res, routes) => {
    // Find a matching route
    const route = routes.find((r) => {

        let parsedURL = url.parse(req.url, true);
        let path = parsedURL.pathname;
        path = path.replace(/^\/+|\/+$/g, "");

        if(path == r.path){
            r.handler(req,res)
        }
    });

    // Extract the "id" parameter from route and pass it to controller
    let param = null;

    if (route && typeof route.path === 'object') {
        param = req.url.match(route.path)[1];
    }

    // Extract request body
    if (route) {
        let body = null;
        if (req.method === 'POST' || req.method === 'PUT') {
            body = await getPostData(req);
        }

        return route.handler(req, res, param, body);
    }
    
};

/**
 * Extract posted data from request body
 * @param req
 * @returns {Promise<any>}
 */
function getPostData(req) {
    return new Promise((resolve, reject) => {
       try {
           let body = '';
           req.on('data', chunk => {
               body += chunk.toString(); // convert Buffer to string
           });

           req.on('end', () => {
               //resolve(parse(body));
               resolve(body);
           });
       }
       catch (e) {
           reject(e);
       }
    });
}