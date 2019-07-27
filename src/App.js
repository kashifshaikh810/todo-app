import React from 'react';
import firebase from 'firebase';
import './App.css';

var firebaseConfig = {
  apiKey: "AIzaSyDgSZi6WIgPnXuMOL2eoLEqNklASvZxQHw",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "todoapp-88453",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};

firebase.initializeApp(firebaseConfig);

class todoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todoItem: []

    }
  }

  Add = () => {
    var inputType = this.state.item;
    var todoInstense = this.state.todoItem;
    todoInstense.push(inputType)
    this.setState({
      todoItem: todoInstense,
      item: ''
    })
  }


  render() {
    return (
      <div>
        <div>
          {this.state.todoItem.map((val, id) => <p key={id}>{val}</p>)}
        </div>

        <input value={this.props.item} onChange={(e) => this.setState({ item: e.target.value })} type="text" />
        <button onClick={this.Add}>Submit</button>
      </div>
    )
  }
}

export default todoApp;

