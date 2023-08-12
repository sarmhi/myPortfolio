import { Contact, data } from "../../components";
import { NavBar } from "../../components";
import "./Projects.css";

export default function Projects({ setPage }) {
    var d = new Date();
    const previousDate = new Date(d.getTime());
    previousDate.setDate(d.getDate() - 1);
    return (

        <div id="projectspage" >
            <NavBar setPage={setPage} />
            <h1 className="header">Projects</h1>
            <p>Updated on   {previousDate.toDateString()}</p>
            <div className="projects">
                {
                    data.map((project, index) => (
                        <div className="project" key={`project${index}`} >
                            <img src={project.image} alt="project_image" />
                            <div>
                                <div className="subtitle-wrap">
                                    <p className="subtitle">{project.subtitle}</p>
                                    <p className="subtitle"><em>{project?.status === "pending" && "In Progress"}</em></p>
                                </div>
                                <a target="_blank" rel="noreferrer" href={project.link} className="title">{project.name}</a>
                                <p className="description">{project.description}</p>
                                <em
                                    style={{ fontStyle: "italic" }}
                                    className="subtitle">
                                    Stack: {project.stack}
                                </em>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Contact />
        </div>
    )
}