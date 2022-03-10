import './challenge-table.js';
import './challenge-chart/dist/challenge-chart.js';
import { ChallengeDataService } from './ChallengeDataService.js';

const dataService = new ChallengeDataService();
const dataSet = await dataService.getDataSet('small');

const challengeTable = document.querySelector('challenge-table')
challengeTable.data = [
  [1, 1],
  [2, 2],
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
  dataSet={ 
    name: "small",
    xColumn: {
      name: 'x',
      values: [1,2,3,4,5,6,7]
    },
    yColumn: {
      name: 'y',
      values: [1,2,3,4,5,6,7]
    }
  }

  data = [
    [x1, y1],
    [x2, y2],
    [x3, y3],
  ]
  document.querySelector('challenge-table').small = data;
  const data = dataSet.xColumn.values.map((value, index) => [value, dataSet.yColumn.values[index]]);
  const data = dataSet.xColumn.values.map((value, index) => ({x: value, y: dataSet.yColumn.values[index]}));
});



  