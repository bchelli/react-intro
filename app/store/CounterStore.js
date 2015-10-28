import Reflux from 'reflux';
import CounterAction from '../action/CounterAction';

var CounterStore = Reflux.createStore({

  init: function () {
    this.value = 0;
    this.listenTo(CounterAction.init, this.initValue.bind(this));
    this.listenTo(CounterAction.inc,  this.incValue.bind(this));
    this.listenTo(CounterAction.dec,  this.decValue.bind(this));
  },

  set: function (value) {
    this.value = value;
    this.trigger(value);
  },

  initValue: function () {
    this.set(0);
  },

  incValue: function () {
    this.set(this.value + 1);
  },

  decValue: function () {
    this.set(this.value - 1);
  }

});

export default CounterStore;
