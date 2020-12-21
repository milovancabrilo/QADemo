let Technology = function () {
  this.technology_title = "";
};
module.exports = Technology;

let Team = function () {
    this.role_name = "";
};
module.exports = Team;

let Seniority = function () {
    this.seniority_title = "";
};
module.exports = Seniority;

let Person = function () {
    this.people_name = '';
    this.technologies = [];
    this.seniority_id = "";
    this.role_id = "";
};
module.exports = Person;

let Project = function () {
    this.project_title = '';
    this.people = [];
};
module.exports = Project;
