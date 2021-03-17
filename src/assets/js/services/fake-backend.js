const DEFAULT_PRODUCTS = [{
  id: 1,
  name: "Airpods",
  price: "199",
  img: "airpods.jpg",
  desc: "AirPods are Apple's completely wire-free headphones, which look a bit like the Apple EarPods from older devices, but without the cables. AirPods have Apple-designed tech inside like a special wireless chip called the W1 or H1 (depending on version), an accelerometer for gestures, dual optical sensors, dual beamforming microphones for Siri and phone calls, and a second accelerometer for speech detection."
},
{
  id: 2,
  name: "Air Jordans",
  price: "125",
  img: "air-jordans.jpg",
  desc: "Air Jordan (sometimes abbreviated AJ) is an American brand of basketball shoes, athletic, casual, and style clothing produced by Nike. Founded in Chicago, Air Jordan was created for Hall of Fame basketball player and six-time NBA Finals MVP Michael Jordan during his time with the Chicago Bulls."
},
{
  id: 3,
  name: "Smartphone",
  price: "699",
  img: "smartphone.jpg",
  desc: "A smartphone is a cell phone that allows you to do more than make phone calls and send text messages. Smartphones can browse the Internet and run software programs like a computer. ... There are thousands of smartphone apps including games, personal-use, and business-use programs that all run on the phone"
}];

export function getProducts(callBack) {
  // TODO: fake an API request
  setTimeout(() => {
    // remove DEFAULT_PRODUCTS and instead by real respinse from api
     callBack (DEFAULT_PRODUCTS);
  }, 500);
}
