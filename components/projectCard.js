import React from "react"
import styles from "../styles/project-card.module.css"
import OpenFolderIcon from "../public/folder_open_icon.svg"
import GithubIcon from "../public/github_icon.svg"

const ProjectCard = (props) => {
    var title = props.title;
    var description = props.description;
    var projectLink = props.projectLink;
    var githubLink = props.githubLink;

    var blankCard = false;
    if(title == null || title === ""){
        blankCard = true;
    }

    var showProject = true;
    if(projectLink == null || projectLink === ""){
        showProject = false;
    }

    var showGithub = true;
    if(githubLink == null || githubLink === ""){
        showGithub = false;
    }

    return (
        blankCard ?
            <div className={styles["index-blank-card"]}></div>
        :
            <div className={styles["index-project-inner"]}>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className={styles["index-project-imgs"]}>
                    {
                        showProject ?
                        <a href={projectLink}>
                            <img className={styles["index-folder-project-image"]} src={OpenFolderIcon} alt="folder icon" />
                        </a>
                        : null
                    }
                    {
                        showGithub ?
                        <a href={githubLink}>
                            <img className={styles["index-github-project-image"]} src={GithubIcon} alt="github icon" />
                        </a>
                        : null
                    }
                </div>
            </div>
    )
}

export default ProjectCard;