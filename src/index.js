import './style.css';

const toDos = [
  {
    description: 'go to town',
    completed: true,
    index: 0,
  },
  {
    description: 'visit my grandpa',
    completed: true,
    index: 1,
  },

  {
    description: 'call my mum',
    completed: false,
    index: 2,
  },

  {
    description: 'clean my house',
    completed: true,
    index: 3,
  },
];

const ul = document.getElementById('todo_list');

toDos.forEach((todo) => {
  const li = document.createElement('li');
  const txtInput = document.createElement('INPUT');
  txtInput.setAttribute('type', 'checkbox');
  txtInput.checked = todo.completed;
  const wrtTodo = document.createElement('span');
  wrtTodo.innerText = todo.description;
  li.append(txtInput, wrtTodo);

  ul.appendChild(li);
});
