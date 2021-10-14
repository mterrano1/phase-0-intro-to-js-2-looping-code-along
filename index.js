// Code your solutions in this file
function writeCards(people, event, message) {
    message = [];
      for (let i = 0; i < people.length; i++) {
        message.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
      }
  
      return message;
  }
  
  writeCards(["Justin", "Max", "Corey"], "birthday")


  function countDown(posInt) {
    let i = 0;
    while (i <= posInt) {
      console.log(posInt - i);
      i++;
    }
  }
  
  countDown(13);