// js观察者模式
class Message {

  constructor(_list, msg) {
    this._list = [];
    this.msg = msg;
  }

  attach(hero) {
    this._list.puxsh(hero)
  }

  notify() {
    for (var i = 0; i < this._list.length; i++) {
      this._list[i].update(this.msg);
    }
  }
  setState(msg) {
    this.msg = msg;
    this.notify()
  }
}

class Hero {
  constructor(name) {
    this.name = name;
  }
  update(msg) {
    console.log(this.name + "received msg=" + msg);
  }
}

var ch = new Hero("迅捷斥候")
var xiaopao = new Hero("麦林炮手")

var msg = new Message();
msg.attach(ch);
msg.attach(xiaopao);

msg.setState("double kill")
msg.setState("猥琐发育")