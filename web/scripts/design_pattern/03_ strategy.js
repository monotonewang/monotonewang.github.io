function Stratey() {

}


Stratey.prototype.tactics = function (type) {
  console.log("basic Stratey");
}

function StrateyA() {

}

StrateyA.prototype=Object.create(Stratey.prototype);
StrateyA.prototype.tactics=function(){
  console.log(" 线上补兵发育");
}

function StrateyB() {

}

StrateyB.prototype=Object.create(Stratey.prototype);
StrateyB.prototype.tactics=function(){
  console.log(" 疯狂gank拿人头");
}

//通过传入不同的策略
function Go2Success(stratey ){
  this.stratey=stratey;

}

Go2Success.prototype.success=function(){
  this.stratey.tactics();
}

new Go2Success(new StrateyA()).success();
new Go2Success(new StrateyB()).success();