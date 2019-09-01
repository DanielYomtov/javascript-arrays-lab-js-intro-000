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
  var newKit = kittens.splice(kitens.lenght-1, name);
  return newKit;
}

var prependKitten = (name) => {
  var beginKit = kittens.splice(0, name);
  return beginKit;
}
