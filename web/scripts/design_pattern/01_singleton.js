//设计模式 单例
function Singleton(){
    if(!Singleton._instance){
      Singleton._instance={}
    }
    return Singleton._instance;
}


var s1=Singleton()
var s2=Singleton()

if(s1==s2){
  console.log("this is singleton");
}