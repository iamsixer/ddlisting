/**
* 项目所有路由配置 app/router.js
* @Author: ubuntuvim
* @Date:   2016-06-25T00:24:36+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-15T00:52:19+08:00
*/
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // pc端路由
  this.route('pc', function() {
    this.route('projects', function() {
        // pc.category.todos
      this.route('todos', { path: '/:project_id' }, function() {
          this.route('todoitem', { path: '/:todo_id' });
      });
    });
    // this.route('todoitem', { path: '/:todo_id' });
    // this.route('newCategory');
    // this.route('login-register');
    this.route('publicTodoDetail');
  });

  // this.route('m', function() {
  //   this.route('category');
  //   this.route('todos.category', { path: '/todos/:category_id' });
  //   this.route('todoitem', { path: '/todos/:category_id/:todo_id' });
  // });
  // 手机端路由
  this.route('m', function() {
    this.route('projects');
    this.route('todos', { path: '/projects/:project_id/todos' });
    this.route('todoitem', { path: '/projects/:project_id/todos/:todo_id' });
    this.route('search', { path: '/projects/:project_id' });
    this.route('profile');
    this.route('accountDetail');
    this.route('passwordSetting');
    this.route('profileBgSetting');
    this.route('profileFeedback');
  });

  this.route('updateFirebaseData');
  // 项目介绍页面
  this.route('help');

  // app的管理后台
  this.route('admin', function() {
    this.route('bgImgLibs');
    this.route('login');
  });
  this.route('test');
});
export default Router;
