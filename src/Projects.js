import React, { Component } from 'react'
import Martastic from './images/martastic.png'
import HotelFlatiron from './images/hotel-flatiron.png'
import BTDT from './images/BTDT.png'

export default class Projects extends Component {
    state={
        projects:[
            {
                pic: Martastic,
                url: "https://www.martastic.net/",
                name: "Martastic"
            },
            {
                pic: HotelFlatiron,
                url: "https://hotel-flatiron.netlify.com/",
                name: "Hotel Flatiron"
            },
            {
                pic: BTDT,
                url: "https://bthere-dthat.herokuapp.com/",
                name: "Been There Done That"
            }
        ]
    }
    render() {
        return (
            <div>
                <section className="projects">
                    <h1>Selected Projects</h1>
                <div className="projects-center">
                    {this.state.projects.map((project, index) => {
                        return <article key={index} className="project">
                            <a href={project.url} target="_blank"
                            rel="noopener noreferrer"><img src={project.pic} alt={project.name}/></a>
                            <h6>{project.name}</h6>
                        </article>
                    })}
                </div>
            </section>
            </div>
        )
    }
}
