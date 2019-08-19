
var promise=new Promise(function(resolve,reject){
  setTimeout(function(){
      var num=Math.floor(Math.random()*100);
      if(num%2==0){
        resolve(num);
      }else{
        reject(num);
      }
  },3000);
});

promise.then(function(num){
  console.log("resolve:"+num);
}).catch(function(num){
  console.log("reject:"+num);
})