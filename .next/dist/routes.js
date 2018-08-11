'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/newCampaign', '/campaigns/newCampaign').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/newRequest', '/campaigns/requests/newRequest');;

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDBCQUFvQyxBQUFwQywwQkFBOEQsQUFBOUQsSUFBa0UsQUFBbEUsdUJBQXdGLEFBQXhGLG1CQUEyRyxBQUEzRyxJQUErRyxBQUEvRyxnQ0FBOEksQUFBOUksNkJBQTJLLEFBQTNLLElBQStLLEFBQS9LLDJDQUF5TixBQUF6TixrQ0FBMlA7O0FBRzNQLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvQ2FtcGFpZ25Db250cmFjdCJ9