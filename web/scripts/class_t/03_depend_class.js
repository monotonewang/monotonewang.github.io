// exposing it on window is necessary for testing
class Dep{
  constructor(){
    this.subscribers=new Set();
  }
  depend(){
    state.count++;
    console.log("depend->");
    if(activeUpdate){
      //register the current active update
      // as a subscriber
      this.subscribers.add(activeUpdate);
    }
  }
  notify(){
    //run all subscriber functions
    console.log("notify->",state.count);
    this.subscribers.forEach(sub=>sub())
  }
}

const dep=new Dep();

let activeUpdate
const state={ 
  count:0
}

function autorun(update){
  //第一种写法
  // update();
  //第二种写法
  function wrappedUpdate(){
    activeUpdate=wrappedUpdate;
    update();
    activeUpdate=null;
  }
  wrappedUpdate();
  
}

// autorun(()=>{
//   dep.depend();
//   console.log("updated");
// })

autorun(()=>{
  // activeUpdate// this is
  dep.depend();
})

dep.notify();