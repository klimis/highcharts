#!/usr/bin/env node


const fs = require('fs');
const path = require('path');

// Update this path if "map11.json" is elsewhere
const filePath = path.join(__dirname, '../data/map11.json');

// Read the JSON data
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Assume data is an array of objects with a numeric "value" property
const values = data.map(item => item.value);
const minValue = Math.min(...values);
const maxValue = Math.max(...values);

// Normalize each value to the range 0 - 100
data = data.map(item => {
  const normalized = (item.value - minValue) / (maxValue - minValue) * 100;
  return { ...item, value: normalized };
});
console.log(data);