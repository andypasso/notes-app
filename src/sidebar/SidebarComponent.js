import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/SidebarItemComponent';

class SidebarComponent extends Component {

  constructor(){
    super();
    this.state = {
      addingNote: false,
      title: null
    }

  }

  render() {

    const {notes, classes, selectedNoteIndex} = this.props
    if(notes) {
      return (
        <div className= {classes.sidebarContainer}>
          <Button
            onClick= {this.newNoteBtnClick}
            className= {classes.newNoteBtn}> {this.state.addingNote ? 'Cancel' : 'New Note'} 
          </Button>
            {
              this.state.addingNote ? 
              <div>
                <input type = 'text'
                  className= {classes.newNoteInput}
                  placeholder= 'enteer note title'
                  onKeyUp= {(e) => this.updateTitle(e.target.value)}>
  
                </input>
                <Button 
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}> Submit </Button>
  
              </div> :
              null
            }
            <List>
              {
                notes.map((_note, _index)=> {
                  return(
                    <div key={_index}>
                      <SidebarItemComponent
                        _note={_note}
                        _index={_index}
                        selecteedNoteIndex={selectedNoteIndex}
                        selectNote={this.selecNote}
                        deleteNote={this.deleteNote}
                        >
  
                        </SidebarItemComponent>
                        <Divider></Divider>
  
  
                    </div>
                  )
                })
              }
            </List>
        </div>
      )
    } else {
      return <div> Add a note !</div>
    }
  }

  newNoteBtnClick = () => {
    console.log(' NEW BTN CLICKED')
    this.setState({ title: null, addingNote: !this.state.addingNote})
  }

  updateTitle = (txt) => {
    console.log('here it is', txt)
    this.setState({ title: txt })
  }

  newNote = () => {
    console.log(this.state)
  }
  selectNote = () => {
    console.log(' selec note ')
  }
  deleteNote = () => {
    console.log(' delete note ')
  }
}


export default withStyles(styles)(SidebarComponent);
