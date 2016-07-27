import {todoApp} from '../../src/reducers/app';
import * as actions from '../../src/actions';
//import immutable from 'immutable';
import expect from 'expect.js';

var assert = require('chai').assert;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
  describe('reducer test', function() {
    let state = null;
    beforeEach(() => {
      //Setup testing enviroment
      state = {todos: []}
    });
    it('should add todo', () => {
      state = todoApp(state, actions.addTodo('new todo'));
      expect(state.todos.length).to.equal(1);
    });
  });
});