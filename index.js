var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) => {
  return kittens.push(name);
}

var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);
}

var destructivelyRemoveLastKitten = (name) => {
  return kittens.pop();
}

var destructivelyRemoveFirstKitten = (name) => {
  return kittens.shift();
}
var appendKitten = (name) => {
  var newKit = [...kittens, name];
  return newKit;
}

var prependKitten = (name) => {
  var preAddKit = [name, ...kittens];
  return preAddKit;
}

var removeLastKitten = () => {
  var removeLast = kittens.slice(0, kittens.length-1);
  return removeLast;
}

var removeFirstKitten => () {
  var removeFirst = kittens.slice(0, 1);
  return removeFirst;
}
