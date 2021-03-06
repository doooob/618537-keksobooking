const {
  getRandomString,
  getRandomNumberFromRange,
  getRandomItemFromArray,
  getRandomMixArray,
  getRandomDate
} = require(`./randomizer`);
const {
  OFFER_TITLES,
  OFFER_TYPES,
  OFFER_CHECKINS,
  OFFER_PHOTOS,
  OFFER_FEATURES,
  AUTHOR_NAME
} = require(`../data/offer`);

const generate = (number = 1) => {
  return new Array(number).fill(number).map(() => {
    const author = {
      name: getRandomItemFromArray(AUTHOR_NAME),
      avatar: `https://robohash.org/` + getRandomString()
    };

    const location = {
      x: getRandomNumberFromRange(300, 900),
      y: getRandomNumberFromRange(150, 500)
    };

    const offer = {
      title: getRandomItemFromArray(OFFER_TITLES),
      address: `${location.x}, ${location.y}`,
      price: getRandomNumberFromRange(1000, 1000000),
      type: getRandomItemFromArray(OFFER_TYPES),
      rooms: getRandomNumberFromRange(1, 5),
      guests: getRandomNumberFromRange(0),
      checkin: getRandomItemFromArray(OFFER_CHECKINS),
      checkout: getRandomItemFromArray(OFFER_CHECKINS),
      features: getRandomMixArray(OFFER_FEATURES).slice(getRandomNumberFromRange(0, OFFER_FEATURES.length - 1)),
      description: ``,
      photos: getRandomMixArray(OFFER_PHOTOS)
    };

    const date = getRandomDate();

    return {
      author,
      offer,
      location,
      date
    };
  });
};

module.exports = {
  generate
};
