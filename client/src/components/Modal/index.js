import React from 'react';



export default class Modal extends Component {
  onClose = e => {
    this.prop.onclose && this.prop.onclose(e)
  };
  render() {
    if(!this.props.show){
      return null;
    }
    return (
    <div> 
      <div>{this.prop.children}</div>
      <div>
        <button onClick={e => {this.onClose(e);}} >Close</button> 
      </div>
    </div>
    );
  } 
}