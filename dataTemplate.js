const { data } = require("./data.json");

function projectsTemplate(project) {
  const { project_name } = data[project];
  const { description } = data[project];
  const { technologies } = data[project];
  const { live_link } = data[project];
  const { github_link } = data[project];
  const { image_urls } = data[project];

  const projectsTemplate = {
    project_name,
    description,
    technologies,
    live_link,
    github_link,
    image_urls,
  };

  return projectsTemplate;
}

module.exports = projectsTemplate;
