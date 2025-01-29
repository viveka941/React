import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectSidebar from './component/ProjectSidebar';
import NewProject from './component/NewProject';
import NoProjectSelelcted from './component/NoProjectSelelcted';

function App() {
  
  const[projectState,setProjectState]=useState({
    selectProjectId: undefined,
    project:[]
  })
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectProjectId: null,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectState(preState =>{
      const projectId= Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...preState,
        selectProjectId: undefined,
        project:[...preState.project,newProject ]
      }
    })
  }
  console.log(projectState);

  let content;
  if(projectState.selectProjectId === null){
    content=<NewProject onAdd={handleAddProject}/>

  }else if(projectState.selectProjectId===undefined){
    content= <NoProjectSelelcted onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.project}/>
      {content}
    </main>
  );
}

export default App
