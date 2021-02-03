import React, { Component } from 'react';
import firebase from 'firebase'
import SidebarComponent from './sidebar/SidebarComponent';
import EditorComponent from './editor/EditorComponent';
import './App.css'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }
  render() {
    return (
      <div className='app-container' style= {{  }}>
        <SidebarComponent 
          selectedNoteIndex = {this.state.selectedNoteIndex}
          notes= {this.state.notes} 
          deleteNote= {this.deleteNote}
          selectNote= {this.selectNote}
          newNote= {this.newNote}
        />
        {this.state.selectedNote ? 
        <EditorComponent
        selectedNote = {this.state.selectedNote}
        selectedNoteIndex = {this.state.selectedNoteIndex}
        notes = {this.state.notes}
      /> : 
      null
      }

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

  selectNote = (note, index) => this.setState({selectedNoteIndex: index, selectedNote: note})

}

