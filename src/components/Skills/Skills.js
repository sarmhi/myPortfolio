import "./Skills.css";

export default function Skills() {
    const skills = ["HTML5", "CSS3", "Javascript", "React.js",
    "Typescript", "Redux", "styled-components", "AWS",
    "REST APIs", "Responsive Web Design", "nodejs", "typescript", "python", 
    "tailwind", "nestjs", "docker", "git",
]

    return (
        <div id="skills" className="scroll-el">
            <h1 className="header">Technical Skills</h1>
            <div className="skills">
                {
                    skills.map((skill, index) => (
                        <div className="skill" key={`project${index}`} >
                            <p>{skill}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}