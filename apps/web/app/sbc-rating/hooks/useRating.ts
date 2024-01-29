import sum from 'lodash/sum'
import mean from 'lodash/mean'
import includes from 'lodash/includes'
import countBy from 'lodash/countBy'
import concat from 'lodash/concat'
import _ from 'lodash'
import { BaseN } from 'js-combinatorics';

type Rating = Record<string | number, number>

export const rating = (players: number[]) => {
  const sum2 = sum(players);
  const avg = mean(players);
  const excess = _(players).reduce((res, val) =>
      res += Math.max((val - avg), 0)
    , 0);

  return _(_(excess + sum2).round() / 11).floor();
}

function getPrice(prices: Rating, squad: Rating) {
  return _(squad).reduce(function (prev, next, index) {
    return prev + next * (prices[index] as number);
  }, 0);
}

export function run({
  prices,
  setPrices,
  possible,
  openPositions,
  squad,
  target
}: any) {
  // const prices = {
  //   '82': 0,
  //   '83': 0,
  //   '84': 1,
  // }
  // const setPrices = true;
  // const possible = [82, 83, 84]
  // const openPositions = 10
  // const squad = [84]
  // const target = 83

  const combinations = []
  const results = [];

  const cmb = new BaseN(possible, openPositions);
  for (const a of cmb) {
    if (Math.floor(rating(concat(a, squad))) === target) {
      if (!includes(combinations, a.sort().join(''))) {
        // console.log({
        //   code: 'SQUAD',
        //   squad: a.sort()
        // });
        const squad = countBy(a.sort());
        if (setPrices) {
          squad.price = getPrice(prices, squad);
        }
        results.push(squad)
        combinations.push(a.sort().join(''));
      }
    }
  }
  console.log({results})
}

