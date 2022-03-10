import './challenge-table.js';
import './challenge-chart/dist/challenge-chart.js';
import { ChallengeDataService } from './ChallengeDataService.js';

const dataService = new ChallengeDataService();
const dataSet = await dataService.getDataSet('small');

const challengeTable = document.querySelector('challenge-table')


challengeTable.tableName = 'Linear Data'

document.querySelector('#smallButton').addEventListener('click', async () => {
  const dataSet = await dataService.getDataSet('small');
  document.querySelector("challenge-chart").data = dataSet.xColumn.values.map((value, index) => ({
  x: value,
  y: dataSet.yColumn.values[index],
  }));
  challengeTable.data = dataSet.xColumn.values.map((value, index) => [value, dataSet.yColumn.values[index]]);
  });;

document.querySelector('#mediumButton').addEventListener('click', async () => {
  const dataSet = await dataService.getDataSet('medium');
  document.querySelector("challenge-chart").data = dataSet.xColumn.values.map((value, index) => ({
  x: value,
  y: dataSet.yColumn.values[index],
  }));
  challengeTable.data = dataSet.xColumn.values.map((value, index) => [value, dataSet.yColumn.values[index]]);
  });;

document.querySelector('#largeButton').addEventListener('click', async () => {
  const dataSet = await dataService.getDataSet('large');
  document.querySelector("challenge-chart").data = dataSet.xColumn.values.map((value, index) => ({
  x: value,
  y: dataSet.yColumn.values[index],
  }));
  challengeTable.data = dataSet.xColumn.values.map((value, index) => [value, dataSet.yColumn.values[index]]);
  });;