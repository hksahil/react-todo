// https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b

import React, { Component } from 'react'

export default class App extends Component {
constructor(props)
{
super(props)
this.state={
typed:'',
tasks:[]
}
}


//jaise hi vo kuch type karta ja rha hai,mai vo pura typed me save krta ja rha hun

onchangefn=(event)=>{
event.preventDefault();
this.setState({typed:event.target.value});
}


//button ko dbane pe maivo typed cheez ko array me push kr rha hun
//ab react me direct mutation or.push allowed nahi hota ,splicing use hoti hai

onsubmitfn=(event)=>{
event.preventDefault();
this.setState({tasks:[...this.state.tasks,this.state.typed]})
}

  render() {
    return (
      <div>
      <p>Simple Todo Application</p>
      <form onSubmit={this.onsubmitfn}>
      <input type="text" onChange={this.onchangefn}></input>
      <button>+</button>
      </form>
      <div>
    {
      this.state.tasks.map((item) => <p>{item}</p>)
    }
  </div>
      </div>
    )
  }
}
