import {LitElement, html, css} from 'lit';

export class ChallengeTable extends LitElement {
  static get styles() {
    return css`
      :host {
        color: #222;
        font-weight: 500;
        text-align: center;
        overflow-y: scroll;
      }
      table {
        overflow-y: auto;
      
        width: 250px;
        margin: auto;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        display: table;
        background-color: #fff;
        color: #212121;
        font-size: 12px;
        height: 550px;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.08), 0 4px 5px 0 rgba(0,0,0,.08), 0 1px 10px 0 rgba(0,0,0,.08);
      }

      td{
        
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        padding: 8px;
        height: 24px;
      }

      tr{
        border-bottom: 1px solid #ddd;
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