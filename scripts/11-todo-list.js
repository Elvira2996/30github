/*steps
1.Create array to store todo
2. when we click "Add"
3.Get text from textbox
4.Add it to array
5.Console.log() the array
*/

const todoList = [];
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
 
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

let num = '';
for (let i = 0; i < todoList.length; i++){
num += `
<p>
${todoList[i]}
</p>
`
}

document.querySelector('.list').innerHTML = num;

}

