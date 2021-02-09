const {Observable} = require("rxjs");

const observable = new Observable(function subscribe(subscriber) {
    try {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    } catch (err) {
      subscriber.error(err); // delivers an error if it caught one
    }
  });

  const subscription = observable.subscribe(x => console.log(x));

  //Later:
  subscription.unsubscribe(); // Cancela a subscrição