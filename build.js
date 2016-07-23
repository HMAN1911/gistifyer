const $ = require('jquery');
const Remarkable = require('remarkable');
const React = require('react');
const ReactDOM = require('react-dom');

var something = { st: { __html: '' } };

const InputPanel = React.createClass({

  render: function () {
    return React.createElement(
      'div',
      { id: 'left-pane' },
      React.createElement('textarea', { autoComplete: 'off',
        id: 'ta',
        wrap: 'logical',
        spellCheck: 'false',
        onChange: this.props.changeHandler })
    );
  }
});

const DisplayPanel = React.createClass({

  render: function () {
    return React.createElement('div', { id: 'right-pane', dangerouslySetInnerHTML: something.st });
  }
});

const MarkDowner = React.createClass({

  handleTextChange: function (e) {
    const md = new Remarkable();
    // console.log(this.state);
    something = { st: { __html: md.render(e.target.value) } };
    this.forceUpdate();
  },

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(InputPanel, { changeHandler: this.handleTextChange }),
      React.createElement(DisplayPanel, null)
    );
  }
});

ReactDOM.render(React.createElement(MarkDowner, null), document.getElementById('top-section'));

// document.getElementById('render').addEventListener('click', () => {
//   document.getElementById('right-pane').innerHTML = md.render(document.getElementById('ta').value);
// });
//
// setInterval(() => {
//   document.getElementById('right-pane').innerHTML = md.render(document.getElementById('ta').value);
// }, 300);
//
// document.getElementById('make-gist').addEventListener('click', () => {
//
//   const d = {
//     "description": "the description for this gist",
//     "public": true,
//     "files": {
//       "file3213.md": {
//         "content": $('#ta').val()
//       }
//     }
//   }
//
//   $.ajax({
//     type: "POST",
//     url: 'http://api.github.com/gists',
//     data: JSON.stringify(d),
//     success: (e) => $('right-pane').append(e)
//   });
// });
//
// document.getElementById('toggle-preview').addEventListener('click', () => {
//   $('#right-pane').hide('display');
//   setTimeout(() => $('#left-pane').css('width', '80%'), 600);
//
// });
