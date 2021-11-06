const names = ["Fred", "Bob", "Bill", "William"]

function writeCards(name, event) {
    const message = [];
  for (let i = 0; i < name.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return message; 
}

function countDown(int) {
  let counter = int;
  while (counter >= 0) {
    console.log(counter--);
  }
}

