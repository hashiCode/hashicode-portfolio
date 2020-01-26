import { useStaticQuery, graphql } from "gatsby"

class DataService {

    getQuery = () => {
        return useStaticQuery(graphql`
        query dataQuery {
            allSkillsJson {
                nodes {
                    area
                    image
                    languages
                    technologys
                }
            }
            experiences : allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experiences.md/"}}) {
                nodes {
                  html
                }
            }
            education : allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/education.md/"}}) {
                nodes {
                  html
                }
            }
            info : allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about.md/"}}) {
                nodes {
                  html
                }
            }
        }`)
    }

    getInfo = () => this.getQuery().info.nodes[0].html

    getSkills = () => this.getQuery().allSkillsJson.nodes

    getExperiences = () => this.getQuery().experiences.nodes[0].html

    getEducation = () => this.getQuery().education.nodes[0].html

}

const dataService = new DataService()
export default dataService