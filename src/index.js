import { WorkSpace,Task,Project } from "./Projects,List&task";



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


let MyWorkspace= new WorkSpace()

MyWorkspace.addProject(1,"Today")

// Set initial state
let isSidebarActive = false;
let isProjectListExpanded = false;

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

/**
 * Expand or collapse project list on projectsExpandBtn click
 */
projectsExpandBtn.addEventListener('click', () => {
  isProjectListExpanded = !isProjectListExpanded;

  if (isProjectListExpanded) {
    projectList.classList.add('active');
    expand.textContent = 'expand_less';
  } else {
    projectList.classList.remove('active');
    expand.textContent = 'expand_more';
  }
});
console.log("lolllll")