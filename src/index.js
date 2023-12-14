
// Importing classes from the "Projects, List & task" module
import { WorkSpace, Task, Project } from "./Classes";

// DOM elements
const navBtn = document.getElementById('nav_btn');
const sideBar = document.getElementById('sidebar');
const workspace = document.getElementById('workspace');
const expand = document.getElementById('expand');
const projectsExpandBtn = document.getElementById('Projects_expand_btn');
const projectList = document.getElementById('project_list');
const addProjectBtn = document.getElementById('add_project_btn');
const addProjectWindow = document.getElementById('add_prjt_pop_up');
const addProjectForm = document.getElementById('add_prjt_form');
const addTaskBtn = document.getElementById('add_task_btn');
const addTaskWindow = document.getElementById('add_task_pop_up');
const darkBackground = document.getElementById('dark_background');
const addTaskForm = document.getElementById('add_task_form');
const TaskList = document.getElementById('List_items');
const ProjectList = document.getElementById('Project_list');
const ProjectName = document.getElementById("project_name");
const projectToday = document.getElementById("today");

// Creating an instance of WorkSpace class
let MyWorkspace = new WorkSpace();
MyWorkspace.addProject(0, "Today");

// Set initial state
let isSidebarActive = false;
let isProjectListExpanded = false;
let currentProjectID = 0;

/**
 * Toggle the sidebar and workspace on nav button click
 */
navBtn.addEventListener('click', () => {
    isSidebarActive = !isSidebarActive;

    if (isSidebarActive) {
        sideBar.classList.add('active');
        workspace.classList.remove('active');
    } else {
        sideBar.classList.remove('active');
        workspace.classList.add('active');
    }
});

projectToday.addEventListener('click', () => {
    RenderProject(0);
    currentProjectID = 0;
});

/**
 * Expand or collapse project list on projectsExpandBtn click
 */
projectsExpandBtn.addEventListener('click', () => {
    isProjectListExpanded = !isProjectListExpanded;

    if (isProjectListExpanded) {
        document.getElementById('Project_list').classList.add('active');
        expand.textContent = 'expand_less';
    } else {
        document.getElementById('Project_list').classList.remove('active');
        expand.textContent = 'expand_more';
    }
});

/**
 * Show add task window on addTaskBtn click
 */
addTaskBtn.addEventListener('click', () => {
    darkBackground.style.display = 'flex';
    addTaskWindow.style.transform = 'translate(-50%, -50%) scale(1)';
});

/**
 * Show add project window on addProjectBtn click
 */
addProjectBtn.addEventListener('click', () => {
    darkBackground.style.display = 'flex';
    addProjectWindow.style.transform = 'translate(-50%, -50%) scale(1)';
});

/* Hide windows on dark background click */
darkBackground.addEventListener('click', () => {
    darkBackground.style.display = 'none';
    addTaskWindow.style.transform = 'translate(-50%, -50%) scale(0)';
    addProjectWindow.style.transform = 'translate(-50%, -50%) scale(0)';
});

addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = event.target.elements['Task_name'].value;
    const priority = event.target.elements['Priority_type'].value;
    const date = event.target.elements['date'].value;
    const taskDescription = event.target.elements['Task_descrption'].value;
    const TaskIndex = MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].Index;
    MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].addTask(TaskIndex, taskName, taskDescription, date, priority);
    RenderProject(currentProjectID);
    darkBackground.click();
});

addProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectNameInput = event.target.elements['project_name_input'].value;
    let projectIndex = MyWorkspace.projectIndex;
    MyWorkspace.addProject(projectIndex, projectNameInput);
    RenderProjectList();
    darkBackground.click();
});

/**
 * Render the selected project and its tasks
 * @param {number} currentProjectID - The ID of the current project to render
 */
function RenderProject(currentProjectID) {
    ProjectName.textContent = MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].Pname;
    TaskList.innerHTML = "";
    MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].list.forEach(task => {
        let HTMLTask = document.createElement('div');
        TaskList.appendChild(HTMLTask);
        HTMLTask.setAttribute('class', 'task');
        HTMLTask.setAttribute('id', `${task.id}`);
        HTMLTask.insertAdjacentHTML('afterbegin', `
          <input type="checkbox"/>
          <div class="task_items task_name">${task.name}</div>
          <div class="task_items task_description">${task.description}</div>
          <div class="task_items task_priority">${task.priority}</div>
          <button id="task_delete${task.id}"class=" task_items  material-symbols-outlined">delete</button>
        `);
        let DeleteBtn = document.getElementById(`task_delete${task.id}`);
        DeleteBtn.addEventListener('click', () => {
            MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].removeTask(task.id);
            RenderProject(currentProjectID);
        });
    });
}

/**
 * Render the list of projects in the sidebar
 */
function RenderProjectList() {
    ProjectList.innerHTML = "";
    MyWorkspace.projectList.forEach(project => {
        if (project.id !== 0) {
            let HTMLProject = document.createElement('div');
            ProjectList.appendChild(HTMLProject);
            HTMLProject.setAttribute('class', 'project');
            HTMLProject.setAttribute('class', 'nav_item');
            HTMLProject.setAttribute('id', `${project.id}`);
            HTMLProject.insertAdjacentHTML('afterbegin', `
                <button class="nav_btn" id="project${project.id}">
                    <span class="material-symbols-outlined">article</span> 
                    ${project.Pname}
                </button>
            `);
            let projectBtn = document.getElementById(`project${project.id}`);
            projectBtn.addEventListener('click', () => {
                RenderProject(project.id);
                currentProjectID = project.id;
            });
        }
    });
}

// Initial render of the project and project list
RenderProject(currentProjectID);
RenderProjectList();

/*  orignal codeimport { WorkSpace,Task,Project } from "./Projects,List&task";



const navBtn = document.getElementById('nav_btn');
const sideBar = document.getElementById('sidebar');
const workspace = document.getElementById('workspace');
const expand = document.getElementById('expand');
const projectsExpandBtn = document.getElementById('Projects_expand_btn');
const projectList = document.getElementById('project_list');
const addProjectBtn = document.getElementById('add_project_btn');
const addProjectWindow = document.getElementById('add_prjt_pop_up');
const addProjectForm=document.getElementById('add_prjt_form');
const addTaskBtn = document.getElementById('add_task_btn');
const addTaskWindow = document.getElementById('add_task_pop_up');
const darkBackground = document.getElementById('dark_background');
const addTaskForm= document.getElementById('add_task_form');
const TaskList= document.getElementById('List_items');
const ProjectList= document.getElementById('Project_list');
const ProjectName=document.getElementById("project_name")
const projectToday= document.getElementById("today")
let MyWorkspace= new WorkSpace()
MyWorkspace.addProject(0,"Today")

// Set initial state
let isSidebarActive = false;
let isProjectListExpanded = false;
let currentProjectID=0;

navBtn.addEventListener('click', () => {
    isSidebarActive = !isSidebarActive;

  if (isSidebarActive) {
    sideBar.classList.add('active');
    workspace.classList.remove('active');
  } else {
    sideBar.classList.remove('active');
    workspace.classList.add('active');
  }
});

projectToday.addEventListener('click',()=>{a

  RenderProject(0)
  currentProjectID=0;

})


projectsExpandBtn.addEventListener('click', () => {
  console.log('lol')
  isProjectListExpanded = !isProjectListExpanded;

  if (isProjectListExpanded) {
    document.getElementById('Project_list').classList.add('active');
    expand.textContent = 'expand_less';
  } else {
    document.getElementById('Project_list').classList.remove('active');
    expand.textContent = 'expand_more';
  }
});


addTaskBtn.addEventListener('click', () => {
  darkBackground.style.display = 'flex';
  addTaskWindow.style.transform = 'translate(-50%, -50%) scale(1)';
});


addProjectBtn.addEventListener('click', () => {
  console.log('clcik')
  darkBackground.style.display = 'flex';
  addProjectWindow.style.transform = 'translate(-50%, -50%) scale(1)';

});

darkBackground.addEventListener('click', () => {

    darkBackground.style.display = 'none';
    addTaskWindow.style.transform = 'translate(-50%, -50%) scale(0)';
    addProjectWindow.style.transform = 'translate(-50%, -50%) scale(0)'; 

});

addTaskForm.addEventListener('submit',(event)=>{

  event.preventDefault();
  const taskName = event.target.elements['Task_name'].value;
  const priority = event.target.elements['Priority_type'].value;
  const date = event.target.elements['date'].value;
  const taskDescription = event.target.elements['Task_descrption'].value;
  const TaskIndex=MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].Index;
  MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].addTask(TaskIndex,taskName,taskDescription,date,priority);
  RenderProject(currentProjectID)
  darkBackground.click();

})

addProjectForm.addEventListener('submit',(event)=>{

  event.preventDefault();
   const projectNameInput = event.target.elements['project_name_input'].value;
   let projectIndex=MyWorkspace.projectIndex;
   MyWorkspace.addProject(projectIndex,projectNameInput);
   RenderProjectList(); 
   darkBackground.click();

})



function RenderProject(currentProjectID){
  
        ProjectName.textContent=MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project=>project.id === currentProjectID)].Pname;
        TaskList.innerHTML="";
        MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].list.forEach(task => {
          let HTMLTask=document.createElement('div')
          TaskList.appendChild(HTMLTask)
          HTMLTask.setAttribute('class','task')
          HTMLTask.setAttribute('id',`${task.id}`)
          HTMLTask.insertAdjacentHTML('afterbegin',`
          <input type="checkbox"/>
          <div class="task_items task_name">${task.name}</div>
          <div class="task_items task_description">${task.description}</div>
          <div class="task_items task_priority">${task.priority}</div>
          <button id="task_delete${task.id}"class=" task_items  material-symbols-outlined">delete</button>
        
          `) 
          let  DeleteBtn=document.getElementById(`task_delete${task.id}`)
               DeleteBtn.addEventListener('click',()=>{ 
                  MyWorkspace.projectList[MyWorkspace.projectList.findIndex(project => project.id === currentProjectID)].removeTask(task.id)
                   RenderProject(currentProjectID);
              
              })
      });  
}

function RenderProjectList() {

     ProjectList.innerHTML="";
     MyWorkspace.projectList.forEach(project=>{

      if(project.id!==0){
     let HTMLProject=document.createElement('div')
     ProjectList.appendChild(HTMLProject)
     HTMLProject.setAttribute('class','project')
     HTMLProject.setAttribute('class','nav_item')
     HTMLProject.setAttribute('id',`${project.id}`)
     HTMLProject.insertAdjacentHTML('afterbegin',`
            <button class="nav_btn" id="project${project.id}">
             <span class="material-symbols-outlined">article</span> 
             ${project.Pname}
             </button>
     `) 

     let projectBtn= document.getElementById(`project${project.id}`)
     projectBtn.addEventListener('click',()=>{
              
           RenderProject(project.id)
           currentProjectID=project.id;
     })}
})
}     
RenderProject(currentProjectID)
RenderProjectList()
 */