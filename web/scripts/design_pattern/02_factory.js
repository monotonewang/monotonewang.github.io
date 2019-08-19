function Factory(){

}

function BMW(){
  console.log("this is BMW");
}

function BENZ(){
  console.log("this is BENZ");
}

Factory.create=function(type){
  switch(type){
    case "BMW":
      return new BMW();
    case "BENZ":
      return new BENZ();
  }
}

//创建BMW的方法
new Factory.create("BMW");