import React, { Component } from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../src/components/todo-item';

describe('TodoItem', () => {
  const todo = { Nickname: 'Buy milk', isComplete: true };
  function complete (){};
  
  it('renders', () => {
    const todoItem = shallow(<TodoItem todo={todo} complete={complete} />);
    expect(todoItem.contains(<strike>{todo.Nickname}</strike>)).toEqual(true);
  });
});

