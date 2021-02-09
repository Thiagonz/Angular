const {Observable} = require("rxjs");
 
const observable = new Observable(subscriber => {
  subscriber.next("Thiago");
  subscriber.next("Aninha");
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(5);
    subscriber.complete();
  }, 1000);
});
 
console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');