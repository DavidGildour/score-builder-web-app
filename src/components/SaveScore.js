import React from 'react';

export default class extends React.Component {
  state = {
    lastChange: this.props.changeIndicator
  }

  onClick = () => {
    this.props.onClick();
    this.setState({
      lastChange: this.props.changeIndicator
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.justLoaded !== this.props.justLoaded) {
      this.setState({
        lastChange: this.props.changeIndicator,
      })
    }
  }

  render = () => {
    let icon, text, callback, cls;
    if (this.state.lastChange === this.props.changeIndicator || this.props.justLoaded) {
      icon = <i className="material-icons">done</i>;
      text = "Everything's saved!";
      callback = null;
      cls = "btn-floating tooltipped";
    } else {
      icon = <i className="material-icons">save</i>;
      text = "Save changes";
      callback = this.onClick;
      cls = "btn-floating tooltipped deep-orange accent-2";
    }

    return (
      <button
        id="save-score"
        onClick={callback}
        className={cls}
        data-position="right"
        data-tooltip={text}
      >
        {icon}
      </button>
    )
  }
}