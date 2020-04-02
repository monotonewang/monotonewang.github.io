// timo
function Timo() {

}

Timo.prototype.skill_one = function () {
  console.log("skill_one Adapter");
}

Timo.prototype.skill_two = function () {
  console.log("skill_two Adapter");
}

Timo.prototype.skill_three = function () {
  console.log("skill_three Adapter");
}

Timo.prototype.skill_four = function () {
  console.log("skill_four Adapter");
}

//关羽调用了提莫技能
function Guanyu(){
  this.s=new Timo();
}

Guanyu.prototype.skill_1 = function (){
  this.s.skill_one();
}
let guanyu=new Guanyu()
guanyu.skill_1();