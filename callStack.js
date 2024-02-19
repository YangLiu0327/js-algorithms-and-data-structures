function takeShower() {
  return 'takeShower'
}

function eat() {
  let meal = cookFood();
  return `Eating ${meal}`
}

function cookFood() {
  let items = ['apple', 'milk', 'bread']
  return items[Math.floor(Math.random() * items.length)]
}

function wakeUp() {
  takeShower();
  eat()
  console.log("ok ready to go to work!")
}

wakeUp()
