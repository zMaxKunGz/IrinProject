'use strict';

module.exports = function(app) {

    const UserController = require('../controller/UserController');
    const AuthenticationController = require('../controller/AuthenticationController');

    app.use(AuthenticationController.checkToken);

    app.route('/user')
        .get(UserController.getUser)
        .post(UserController.addUsers);

    app.route('/authen')
        .get(AuthenticationController.authentication);



  // var userController = require('../controller/userController');
  // var itemController = require('../controller/itemController');
  //
  // //user route
  // app.route('/user/information')
  //     .get(userController.getUser)
  //     .post(userController.addUser)
  //     .put(userController.updateUser);
  //
  // app.route('/user/updatePassword')
  //     .put(userController.updatePassword);
  //
  // app.route('/login')
  //     .get(userController.loginUser);
  //
  // app.route('/item/information') //do something just only 1 item
  //     .get(itemController.getItem)
  //     .post(itemController.addItem)
  //     .put(itemController.updateItem);
  //
  // app.route('/item/delete')
  //     .put(itemController.deleteItem);
  //
  // app.route('/item/list')
  //     .get(itemController.getItemList) ;
  //
  // app.route('/item/scanItem')
  //     .put(itemController.scanItemAndUpdate);
  //
  // app.route('/item/getScanItem')
  //     .get(itemController.getScanItemDetail);
  //
  // app.route('/item/setLost')
  //     .put(itemController.updateLost);
  //
  // app.route('/item/setRead')
  //     .put(itemController.setRead);
};

