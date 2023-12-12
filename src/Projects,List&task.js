/**
* Class representing a To-Do List.
*/
class Project {
    /**
     * Create a To-Do List.
     * @param {string} Pname - The name of the list.
     */
    constructor(Pname,id) {
      this.Pname = Pname; // Name of the list
      this.id=id;
      this.list = []; // Array to store tasks
    }
   
    /**
     * Add a new task to the list.
     * @param {number} id - The unique identifier for the task.
     * @param {string} name - The name or title of the task.
     * @param {string} description - The description or details of the task.
     * @param {string} date - The due date of the task.
     * @param {string} priority - The priority level of the task.
     */
    addTask(id, name, description, date, priority) {
      let newTask = new Task(id, name, description, date, priority);
      this.list.push(newTask);
    }
   
    /**
     * Remove a task from the list by its ID.
     * @param {number} id - The unique identifier of the task to be removed.
     */
    removeTask(id) {
      // Find the index of the task with the given ID
      const indexToRemove = this.list.findIndex(task => task.id === id);
   
      // Check if the task with the given ID exists
      if (indexToRemove !== -1) {
        // Remove the task from the array
        this.list.splice(indexToRemove, 1);
        console.log(`Task with ID ${id} removed successfully.`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    }
   }
   
   /**
   * Class representing a Task.
   */
   class Task {
    /**
     * Create a Task.
     * @param {number} id - The unique identifier for the task.
     * @param {string} name - The name or title of the task.
     * @param {string} description - The description or details of the task.
     * @param {string} date - The due date of the task.
     * @param {string} priority - The priority level of the task.
     */
    constructor(id, name, description, date, priority) {
      this.id = id; // Unique identifier for the task
      this.name = name; // Task name or title
      this.description = description; // Task description or details
      this.date = date; // Due date of the task
      this.priority = priority; // Priority level of the task
    }
   }
   
   class WorkSpace {
    constructor() {
      this.projectList = [];
    }
  
    /**
     * Add a new project to the workspace.
     * @param {number} id - The unique identifier for the project.
     * @param {string} name - The name of the project.
     */
    addProject(id, name) {
      let newProject = new Project(id, name);
      this.projectList.push(newProject);
    }
  
    /**
     * Remove a project from the workspace by its ID.
     * @param {number} id - The unique identifier of the project to be removed.
     */
    removeProject(id) {
      // Find the index of the project with the given ID
      const indexToRemove = this.projectList.findIndex(project => project.id === id);
  
      // Check if the project with the given ID exists
      if (indexToRemove !== -1) {
        // Remove the project from the array
        this.projectList.splice(indexToRemove, 1);
        console.log(`Project with ID ${id} removed successfully.`);
      } else {
        console.log(`Project with ID ${id} not found.`);
      }
    }
  }
  


  export{
    Project,
    Task,
    WorkSpace
  }    


