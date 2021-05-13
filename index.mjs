import _ from 'lodash';

const { map } = _;

const myArr = [1, 2, 3];

myArr.push(9);

console.log(map(myArr, (val) => ({ val })));
