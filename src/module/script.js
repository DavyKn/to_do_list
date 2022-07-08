const ul = document.getElementById('todo_list');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
export const getToDos = () => todos;

export const addToDo = (todo) => {
  const txtInput = {
    description: todo.description,
    completed: todo.completed,
    index: todo.index,
  };

  todos.push(txtInput);
  localStorage.setItem('todos', JSON.stringify(todos));
  return txtInput;
};

export const createToDo = ({ description, completed, index }) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  const item = document.createElement('span');
  item.classList.add('content');
  item.appendChild(document.createTextNode(description));
  item.contentEditable = true;
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn_remove');
  removeBtn.innerHTML = '&#x3A7';
  li.append(checkBox, item, removeBtn);

  ul.appendChild(li);
  item.addEventListener('input', (e) => {
    const todo = todos.find((todo) => todo.index === index);
    todo.description = e.target.outerText;
    localStorage.setItem('todos', JSON.stringify(todos));
  });
  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodos = todos.filter((todo) => todo.index !== index).map((todo, index) => {
      todo.index = index + 1;
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newTodos));
    todos = newTodos;
    // eslint-disable-next-line no-use-before-define
    refreshToDos();
  });
  return { description, completed, index };
};

export const refreshToDos = () => {
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
  getToDos().forEach(createToDo);
};