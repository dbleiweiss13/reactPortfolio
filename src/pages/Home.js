import React from 'react'
import ProjectComponenet from '../components/ProjectComponent/ProjectComponent'
import projectData from '../data/projectData'
import "./home.css"


console.log(projectData)

function Home() {

    return (
        <div className="homeDiv">
            <h1 className="heading">My Portfolio</h1>
            <ProjectComponenet 
                data={projectData}
            />
        </div>
    )
}

export default Home
