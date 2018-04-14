/**
 * promise
 *
 */

/*!
 * 封装fetch 方法，获取接口数据
 * @params {String} url 例如：‘http://127.0.0.1:3039/bidList’
 * @params {String} method 例如：‘POST’,'GET','PUT','DELETE'
 * @params {Object} body 例如：‘{token:'sdfsdfsdasfdsafsd'}’
 * @params {Object} headers 例如：‘{'Content-Type': 'application/json;charset=UTF-8',}’
 */
const request = (url, method, body={}) => {
  return new Promise((resolve, reject) => {

    //设置请求参数
    let opt = {
      method:method,
      headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
      },
      body:JSON.stringify(body)
    };

    //判断网络请求是否成功
    let isOk;

    //发起请求
    fetch(url,opt)
      .then((response) => {
        console.log('-----------获取接口数据成功返回-----------');
        console.log(response);
        //判断返回格式是否正确，防止报错
        // let check_res = !!response&&typeof response === 'object'?response:{'retCode':'ERROR'};
        // return JSON.parse(check_res);
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          //服务器成功返回
          resolve(responseData);
        } else {
          //网络出问题
          reject(responseData);
        }
      })
      .catch((error) => {
        console.log('-----------网络出问题-----------');
        //网络出问题
        reject(error);
      });
  });
};

export default {
  request
};
