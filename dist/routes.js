"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllers = require('./controllers/UserControllers'); var _UserControllers2 = _interopRequireDefault(_UserControllers);

const routes = _express.Router.call(void 0, )

routes.get('/users', _UserControllers2.default.index)
routes.post('/users', _UserControllers2.default.store)

exports. default = routes
