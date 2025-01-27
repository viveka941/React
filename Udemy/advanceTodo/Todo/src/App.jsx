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

  let content;
  if(projectState.selectProjectId === null){
    content=<NewProject />

  }else if(projectState.selectProjectId===undefined){
    content= <NoProjectSelelcted onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App
