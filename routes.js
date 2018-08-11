const routes = require('next-routes')();

routes.add('/campaigns/newCampaign','/campaigns/newCampaign').add('/campaigns/:address','/campaigns/show').add('/campaigns/:address/requests','/campaigns/requests/index').add('/campaigns/:address/requests/newRequest','/campaigns/requests/newRequest');;


module.exports = routes;
