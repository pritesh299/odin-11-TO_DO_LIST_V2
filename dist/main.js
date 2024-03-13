(()=>{"use strict";class e{constructor(e,t){this.Pname=t,this.id=e,this.list=[],this.Index=0}addTask(e,s,n,d,i){let a=new t(e,s,n,d,i);this.list.push(a),this.Index=this.Index+1}removeTask(e){const t=this.list.findIndex((t=>t.id===e));-1!==t?(this.list.splice(t,1),console.log(`Task with ID ${e} removed successfully.`)):console.log(`Task with ID ${e} not found.`)}}class t{constructor(e,t,s,n,d){this.id=e,this.name=t,this.description=s,this.date=n,this.priority=d}}const s=document.getElementById("nav_btn"),n=document.getElementById("sidebar"),d=document.getElementById("workspace"),i=document.getElementById("expand"),a=document.getElementById("Projects_expand_btn"),c=(document.getElementById("project_list"),document.getElementById("add_project_btn")),l=document.getElementById("add_prjt_pop_up"),o=document.getElementById("add_prjt_form"),r=document.getElementById("add_task_btn"),m=document.getElementById("add_task_pop_up"),p=document.getElementById("dark_background"),u=document.getElementById("add_task_form"),_=document.getElementById("List_items"),v=document.getElementById("Project_list"),y=document.getElementById("project_name"),j=document.getElementById("today");let I=new class{constructor(){this.projectList=[],this.projectIndex=0}addProject(t,s){let n=new e(t,s);this.projectList.push(n),this.projectIndex=this.projectIndex+1}removeProject(e){const t=this.projectList.findIndex((t=>t.id===e));-1!==t?(this.projectList.splice(t,1),console.log(`Project with ID ${e} removed successfully.`)):console.log(`Project with ID ${e} not found.`)}};I.addProject(0,"Today");let g=!1,k=!1,L=0;function E(e){y.textContent=I.projectList[I.projectList.findIndex((t=>t.id===e))].Pname,_.innerHTML="",I.projectList[I.projectList.findIndex((t=>t.id===e))].list.forEach((t=>{let s=document.createElement("div");_.appendChild(s),s.setAttribute("class","task"),s.setAttribute("id",`${t.id}`),s.insertAdjacentHTML("afterbegin",`\n          <input type="checkbox"/>\n          <div class="task_items task_name">${t.name}</div>\n          <div class="task_items task_description">${t.description}</div>\n          <div class="task_items task_priority">${t.priority}</div>\n          <button id="task_delete${t.id}"class=" task_items  material-symbols-outlined">delete</button>\n        `),document.getElementById(`task_delete${t.id}`).addEventListener("click",(()=>{I.projectList[I.projectList.findIndex((t=>t.id===e))].removeTask(t.id),E(e)}))}))}function h(){v.innerHTML="",I.projectList.forEach((e=>{if(0!==e.id){let t=document.createElement("div");v.appendChild(t),t.setAttribute("class","project"),t.setAttribute("class","nav_item"),t.setAttribute("id",`${e.id}`),t.insertAdjacentHTML("afterbegin",`\n                <button class="nav_btn" id="project${e.id}">\n                    <span class="material-symbols-outlined">article</span> \n                    ${e.Pname}\n                </button>\n            `),document.getElementById(`project${e.id}`).addEventListener("click",(()=>{E(e.id),L=e.id}))}}))}s.addEventListener("click",(()=>{g=!g,g?(n.classList.add("active"),d.classList.remove("active")):(n.classList.remove("active"),d.classList.add("active"))})),j.addEventListener("click",(()=>{E(0),L=0})),a.addEventListener("click",(()=>{k=!k,k?(document.getElementById("Project_list").classList.add("active"),i.textContent="expand_less"):(document.getElementById("Project_list").classList.remove("active"),i.textContent="expand_more")})),r.addEventListener("click",(()=>{p.style.display="flex",m.style.transform="translate(-50%, -50%) scale(1)"})),c.addEventListener("click",(()=>{p.style.display="flex",l.style.transform="translate(-50%, -50%) scale(1)"})),p.addEventListener("click",(()=>{p.style.display="none",m.style.transform="translate(-50%, -50%) scale(0)",l.style.transform="translate(-50%, -50%) scale(0)"})),u.addEventListener("submit",(e=>{e.preventDefault();let t=e.target.elements.Task_name.value,s=e.target.elements.Priority_type.value,n=e.target.elements.date.value,d=e.target.elements.Task_descrption.value,i=I.projectList[I.projectList.findIndex((e=>e.id===L))].Index;I.projectList[I.projectList.findIndex((e=>e.id===L))].addTask(i,t,d,n,s),E(L),e.target.elements.Task_name.value="",e.target.elements.Priority_type.value="",e.target.elements.Task_descrption.value="",p.click()})),o.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.project_name_input.value;let s=I.projectIndex;I.addProject(s,t),h(),e.target.elements.project_name_input.value="",p.click()})),E(L),h()})();