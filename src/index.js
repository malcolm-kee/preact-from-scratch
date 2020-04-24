import { html } from 'htm/preact';
import { Component, render } from 'preact';

class App extends Component {
  render() {
    return html`<div>
      <ul>
        <li>Hi</li>
        <li>World</li>
        <li>${this.props.type}</li>
      </ul>
    </div>`;
  }
}

render(html`<${App} type="like" />`, document.body);
