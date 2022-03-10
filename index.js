import './challenge-table.js';
import './challenge-chart/dist/challenge-chart.js';
import { ChallengeDataService } from './ChallengeDataService.js';

const dataService = new ChallengeDataService();
const dataSet = await dataService.getDataSet('small');

const challengeTable = document.querySelector('challenge-table')
challengeTable.data = [
  [1, 1],
  [2, 2],
  [3, 3],
];

challengeTable.tableName = 'Linear Data'

document.querySelector('#smallButton').addEventListener('click', async () => {
  // code for event handler
  console.log("Button Pushed")
});

document.querySelector('#mediumButton').addEventListener('click', async () => {
  // code for event handler
  console.log("Button Pushed2")
});

document.querySelector('#largeButton').addEventListener('click', async () => {
  // code for event handler
  var xValues = [50,60,70,80,90,100,110,120,130,140,150];
  var yValues = [7,8,8,9,9,9,10,11,14,14,15];
  // const data = dataSet.xColumn.values.map((value, index) => [value, dataSet.yColumn.values[index]]);
  const data = dataSet.xColumn.values.map((value, index) => ({x: value, y: dataSet.yColumn.values[index]}));
});

