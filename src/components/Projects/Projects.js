import { data } from ".."
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import "./Projects.css";

export default function Projects() {
    const navigate = useNavigate();
    var d = new Date();
    const previousDate = new Date(d.getTime());
    previousDate.setDate(d.getDate() - 1);


    return (
        <div id="projects" className="scroll-el">
            <h1 className="header">Recent Projects</h1>
            <div className="projects">
                {
                    data.slice(0, 4).map((project, index) => (
                        <div className="project" key={`project${index}`} >
                            <div className="scroll">
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
                            <img src={project.image} alt="project_image" />

                        </div>
                    ))
                }
            </div>
            <span className="more"><span>SEE ALL PROJECTS </span>
            <ArrowRight onClick={() => navigate("projects")} /> </span>


        </div>
    )
}