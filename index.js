function distanceFromHqInBlocks(blocks) {
  const headquarters = 42;
  if (blocks < headquarters) {
    return headquarters - blocks;
  } else {
    return blocks - headquarters;
  }
}
function distanceFromHqInFeet(blocks) {
  const blockInFeet = 264; // There are 264 feet in a block
  const distanceInFeet = blocks * blockInFeet;
  const headquarters = 42 * blockInFeet;
    if (distanceInFeet <= headquarters) {
    return headquarters - distanceInFeet;
  } else {
    return distanceInFeet - headquarters;
  }
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const blockInFeet = 264; // There are 264 feet in a block
  const startDistance = startBlock * blockInFeet;
  const endDistance = endBlock * blockInFeet;
  const distanceTravelled = Math.abs(startDistance - endDistance);
  return distanceTravelled;
}
function calculatesFarePrice(start, destination) {
  const blockInFeet = 264; // There are 264 feet in a block
  const freeDistance = 400; // The first 400 feet are free
  const distance = Math.abs(destination - start) * blockInFeet;
  let farePrice = 0;
  if (distance <= freeDistance) {
    farePrice = 0;
  } else if (distance > freeDistance && distance <= 2000) {
    farePrice = (distance - freeDistance) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    farePrice = 25;
  } else {
    farePrice = 'cannot travel that far';
  }
  return farePrice;
}
