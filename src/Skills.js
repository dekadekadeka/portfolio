import React, { Component } from 'react';
import { DiRuby, DiRor } from 'react-icons/di';
import { FaJsSquare, FaReact } from 'react-icons/fa';

export default class Skills extends Component {
    state={
        skills:[
            {
                icon: <DiRuby/>,
                name: "Ruby"
            },
            {
                icon: <DiRor/>,
                name: "Ruby on Rails"
            },
            {
                icon: <FaJsSquare/>,
                name: "JavaScript"
            },
            {
                icon: <FaReact/>,
                name: "React"
            }
        ]
    }
    render() {
        return (
            <section className="skills">
                <h1>Skills</h1>
                <div className="skills-center">
                    {this.state.skills.map((skill, index) => {
                        return <article key={index} className="skill">
                            <span>{skill.icon}</span>
                            <h6>{skill.name}</h6>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
