//判断是不是安卓
export const isAndroid = () => {
  return new Promise((resolve) => {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    resolve(isAndroid);
  });
};

// 判断是不是IOS
export const isiOS = () => {
  return new Promise((resolve) => {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    resolve(isiOS);
  });
};
