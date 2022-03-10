import {LitElement, html, css} from 'lit';

export class ChallengeTable extends LitElement {
  static get styles() {
    return css`
      :host {
        color: #333333;
        font-weight: 500;
        text-align: center;
      }
      table {
        
        width: 150px;
        margin: auto;
      }

      td{
        border-bottom: solid 1px #333;
      }
    `;
  }
  
  static get properties() {
    return {
      // Feel free to refactor, change type, name, etc
      tableName: { type: String },
      data: { type: Array },
    };
  }

  constructor(){
    super();
    this.tableName = '';
    this.data = [];
  }

  render() {
    return html`
      <h3>${this.tableName}</h3>
      <table>
        ${this.data.map(
          (dataRow) => html`
            <tr>
              <td>${dataRow[0]}</td>
              <td>${dataRow[1]}</td>
              <td></td>
            </tr>
          `
        )}
      </table>
    `;
  }
}
window.customElements.define("challenge-table", ChallengeTable);