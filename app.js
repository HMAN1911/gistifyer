const $ = require('jquery');
const Remarkable = require('remarkable');
const React = require('react');
const ReactDOM = require('react-dom');


var something = {st: {__html: ''}};


const InputPanel = React.createClass({

  render: function() {
    return (
      <div id="left-pane">
          <textarea autoComplete="off"
                    id="ta"
                    wrap="logical"
                    spellCheck="false"
                    onChange={this.props.changeHandler}>
          </textarea>
      </div>
    );
  }
});

const DisplayPanel = React.createClass({

  render: function() {
    return (
      <div id="right-pane" dangerouslySetInnerHTML={something.st} />
    );
  }
});


const MarkDowner = React.createClass({

  handleTextChange: function(e) {
    const md = new Remarkable();
    // console.log(this.state);
    something = {st: {__html: md.render(e.target.value)}};
    this.forceUpdate();
  },


  render: function() {
    return (
      <div>
        <InputPanel changeHandler={this.handleTextChange}/>
        <DisplayPanel />
      </div>
    );
  }
});


ReactDOM.render(
  <MarkDowner />,
  document.getElementById('top-section')
);

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
