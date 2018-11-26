 delTodo();
function addTodo() {
    var newTodo = document.getElementById('new-todo');
    var newTodoDate = document.getElementById('new-todo-date');
    if(newTodo.value == '') {
        alert("Введите дело!");
    } else {
        if(newTodoDate.value == '') {
            alert("Выберите дату!");    
        } else {
            var tableElement = document.getElementById('todo-list').tBodies[0];
            var trElement = document.createElement('tr');
            trElement.innerHTML = '<td><div class="form-group"><label class="form-checkbox"><input type="checkbox">'+
                                  '<i class="form-icon"></i></label></div></td><td>' + newTodo.value + 
                                  '</td><td align="center">' + newTodoDate.value + '</td><td align="right">'+
                                  '<button class="btn btn-error del-todo"><b>&times;</b></button></td>';
            tableElement.appendChild(trElement);
            delTodo();
        }
    }
}

function delTodo() {
    var del = document.getElementsByClassName('del-todo');
    for(var i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            var trElement = this.parentElement.parentElement;
            var tbodyElement = trElement.parentElement;
            tbodyElement.removeChild(trElement);
        }
    }
}

function clearTodo() {
    var del = document.getElementsByClassName('del-todo');
    for(var i = 0; i < del.length; i++) {      
        var trElement = del[i].parentElement.parentElement;
        var tbodyElement = trElement.parentElement;
        tbodyElement.removeChild(trElement);
        i--;
    }
}