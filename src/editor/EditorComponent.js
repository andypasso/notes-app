import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ color: [] }],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
  ],
};

const formats = [
  'header',
  'bold',
  'color',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'align',
  'indent',
  'link',
  'image',
];

class EditorComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      text: '',
      title: '',
      id: ''
    };
    this.myRef = React.createRef();
  };

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    })
  };

  componentDidUpdate = () => {
    if(this.props.selectedNote.id !== this.state.id)
   { this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    })}
  }

  render() {

    const { classes } = this.props;
    return(
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
        <input 
          className={classes.titleInput}
          placeholdere={'Note title'}
          value={this.state.title ? this.state.title : ''}
          onChange={(e)=> this.updateTitle(e.target.value)}
        >
        </input>
        <ReactQuill
          theme="snow"
          value={this.state.text}
          onChange={this.updateBody}
          modules={modules}
          formats={formats} />
        
      </div>
    )
  }

  updateBody = async (value) => {
    await this.setState({ text:value });
    this.update();
  }

  updateTitle = async (txt) =>{
    await this.setState({ title: txt});
    this.update();
  }

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {title: this.state.title, body:this.state.text})
  }, 1500);
}

export default withStyles(styles)(EditorComponent)