// // Source: https://reactjs.org/docs/add-react-to-a-website.html
// // Source: https://medium.freecodecamp.org/how-to-create-file-upload-with-react-and-node-2aa3f9aab3f0
// // Source: https://www.zeolearn.com/magazine/connecting-reactjs-frontend-with-nodejs-backend
// // Date pulled: 11/29/2018 

//import axios, { post } from 'axios';
//
'use strict';
//
//const e = React.createElement;

class WebsitesFileUpload extends React.Component {
  constructor(props) {
    super(props);
    state = {selectedFile: null};
//    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.uploadHandler= this.uploadHandler.bind(this);
  }
    
//  fileChangedHandler = event => {
//    this.setState({selectedFile: event.target.files[0]})
//  }

uploadHandler = event => {
//  const formData = new FormData()
//  formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
//  axios.post('http://localhost:8080/upload/websites', formData)
    event.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    
    $.ajax({
        type: 'POST',
        url: '/upload/websites',
        data: data,
        success: response => {
            console.log(response);
        },
        error: response => {
            console.log(response);
        }
    });
}

  render() {
    return (
        <form enctype="multipart/form-data" onSubmit={this.uploadHandler}>
      <input type="file" name="file">
      <input type="submit">Upload</input>
        </form>
    );
  }
}


const domContainer = document.querySelector('#upload_websites_container');
ReactDOM.render(e(WebsitesFileUpload), domContainer);


