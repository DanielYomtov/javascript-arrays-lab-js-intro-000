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

var prependKitten = () => {
  var preAddKit = [name, ...kittens];
  return newKit;
}



