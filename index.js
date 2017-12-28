const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens
}
