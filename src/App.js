import React, { Component } from 'react';
import firebase from 'firebase'
import SidebarComponent from './sidebar/SidebarComponent';
import EditorComponent from './editor/EditorComponent';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedNOdeIndex: null,
      selectedNote: null,
      notes: null
    }
  }
  render() {
    return (
      <div className='app-container'>
        <SidebarComponent 
          selectedNOdeIndex = {this.state.selectedNOdeIndex}
          notes= {this.state.notes} />
        <EditorComponent />
      </div>
    )
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }
}

