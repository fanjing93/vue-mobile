import Vue from 'vue';
import Toast from './toast.vue';
import merge from './merge.js';

let instance;

let globalConfig = {};

let AlertConstructor = Vue.extend(Toast);

let initInstance = () => {
  instance = new AlertConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

let Alert = (content, options = {}) => {
  initInstance();

  options.content = content;
  // 将全局的 Alert 配置 合并到默认值中
  merge(instance.$data, globalConfig);
  // 将单个 Alert instance 的配置合并到默认值中
  merge(instance.$data, options);

  return new Promise((resolve, reject) => {
    instance.show = true;
    // let success = instance.success;
    // let cancel = instance.cancel;

    // instance.success = () => {
    //   success();
    //   resolve('ok');
    // };

    // instance.cancel = () => {
    //   cancel();
    //   reject('cancel');
    // };
  });
};
export default Alert;
