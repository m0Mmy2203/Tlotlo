// Initial Data Model - An array to store tasks
let tasks = [
    {
        id: 1,
        title: '45min Abs workout',
        description: 'GlowwithJo',
        dueDate: '2024-10-10',
        priority: 'high',
        completed: false
    },
    {
        id: 2,
        title: 'Drink Water',
        description: '500ml',
        dueDate: '2024-10-15',
        priority: 'medium',
        completed: false
    }
];

// Function to render tasks  - Simple code
function renderTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current task list
    
    tasks.forEach(function(task) {
        let li = document.createElement('li'); // Create a new <li> element
        
        // Create an empty string to hold the HTML for each task
        let taskHTML = '';
        
        // Add the checkbox for task completion
        taskHTML += '<input type="checkbox" class="complete" data-id="' + task.id + '"';
        
        // If the task is completed, add the 'checked' attribute
        if (task.completed) {
            taskHTML += ' checked';
        }
        
        // Close the checkbox input tag
        taskHTML += '>';
        
        // Add the task title and description
        taskHTML += '<strong>' + task.title + '</strong> - ' + task.description;
        
        // Add a line break for better formatting
        taskHTML += '<br>';
        
        // Add the due date and priority
        taskHTML += '<strong>Due: ' + task.dueDate + ' | Priority: ' + task.priority + '</strong>';
        
        // Add the Edit button
        taskHTML += '<button class="edit" data-id="' + task.id + '">Edit</button>';
        
        // Add the Delete button
        taskHTML += '<button class="delete" data-id="' + task.id + '">Delete</button>';
        
        // Set the generated HTML string as the content of the <li> element
        li.innerHTML = taskHTML;
        
        // Append the <li> to the task list (final step)
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    
    const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
        completed: false
    };
    
    tasks.push(newTask);
    renderTasks();
    document.getElementById('taskForm').reset(); // Reset form after submission
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Function to edit a task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    
    if (task) {
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.getElementById('dueDate').value = task.dueDate;
        document.getElementById('priority').value = task.priority;
        
        deleteTask(id); // Remove task from the list, then add the edited one
    }
}

// Function to mark task as complete
function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// Event Listeners
document.getElementById('taskForm').addEventListener('submit', addTask);

document.getElementById('taskList').addEventListener('click', (event) => {
    const id = parseInt(event.target.getAttribute('data-id'));
    
    if (event.target.classList.contains('delete')) {
        deleteTask(id);
    } else if (event.target.classList.contains('edit')) {
        editTask(id);
    } else if (event.target.classList.contains('complete')) {
        toggleComplete(id);
    }
});

// Render tasks on page load
document.addEventListener('DOMContentLoaded', renderTasks);


const FORM = $("form"); // set form or other element here
const TYPES = ["input[type=text], input[type=submit]"]; // set which elements get targeted by the focus
const FOCUS = $("#focus"); // focus element

// function for positioning the div
function position(e) {
  // get position
  var props = {
    top: e.offset().top,
    left: e.offset().left,
    width: e.outerWidth(),
    height: e.outerHeight(),
    radius: parseInt(e.css("border-radius"))
  };
  
  // set position
  FOCUS.css({
    top: props.top,
    left: props.left,
    width: props.width,
    height: props.height,
    "border-radius": props.radius
  });
  
  FOCUS.fadeIn(200);
}

FORM.find(TYPES.join()).each(function(i) {
  // when clicking an input defined in TYPES
  $(this).focus(function() {
    el = $(this);

    // adapt size/position when resizing browser
    $(window).resize(function() {
      position(el);
    });

    position(el);
  });
});

FORM.on("focusout", function(e) {
  setTimeout(function() {
    if (!e.delegateTarget.contains(document.activeElement)) {
      FOCUS.fadeOut(200);
    }
  }, 0);
});

//Page cursors

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
      e.style.top = n.clientY + "px", 
      i.style.left = n.clientX + "px", 
      i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
  function n(t) {
      e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
      e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
      o(r[a])
  }
  function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }
