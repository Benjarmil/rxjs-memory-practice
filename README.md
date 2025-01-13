# Memory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## RXJS Practice

This project is a practice of RXJS operators. The main goal is to understand the basic operators and how to use them in a real project.
This project can be completed using the following rxjs operators and functions:

- [Subject](https://rxjs.dev/api/index/class/Subject), A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.
- [BehaviorSubject](https://rxjs.dev/api/index/class/BehaviorSubject), A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to.
- [catchError](https://rxjs.dev/api/index/function/catchError), Catches errors on the observable to be handled by returning a new observable or throwing an error.
- [concat](https://rxjs.dev/api/index/function/concat), Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.
- [concatMap](https://rxjs.dev/api/index/function/concatMap), Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.
- [from](https://rxjs.dev/api/index/function/from), Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
- [interval](https://rxjs.dev/api/index/function/interval), Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
- [map](https://rxjs.dev/api/index/function/map), Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
- [of](https://rxjs.dev/api/index/function/of), Converts the arguments to an observable sequence.
- [tap](https://rxjs.dev/api/index/function/tap), Used to perform side-effects for notifications from the source observable
- [zipWith](https://rxjs.dev/api/index/function/zipWith), Subscribes to the source, and the observable inputs provided as arguments, and combines their values, by index, into arrays.
