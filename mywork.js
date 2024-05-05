
var projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },

];

var socials = [
    { id: 1, image: "fab fa-linkedin", url: 'https://linkedin.com/in/pau-castellà-083591304' },
    { id: 2, image: "fab fa-github", url: 'https://github.com/notkatsuu' },
    { id: 3, image: "fab fa-twitter", url: 'https://twitter.com/exekatsu' },
    { id: 4, image: "fab fa-itch-io", url: 'https://notkatsuu.itch.io/"' }
];

function loadProjects() {
    var projectsSection = document.getElementById('projects');
    projects.forEach(function(project) {
        var projectDiv = document.createElement('div');
        projectDiv.id = 'project-' + project.id;
        projectDiv.innerHTML = '<h2>' + project.title + '</h2><p>' + project.description + '</p>';
        projectsSection.appendChild(projectDiv);
    });
}

function loadSocials() {
    var socialsSection = document.getElementById('socials');
    socials.forEach(function(social) {
        var socialDiv = document.createElement('div');
        socialDiv.id = 'social-' + social.id;
        var link = document.createElement('a');
        link.href = social.url;
        var icon = document.createElement('i');
        icon.className = social.image;
        link.appendChild(icon);
        socialDiv.appendChild(link);
        socialsSection.appendChild(socialDiv);
    });
}

function loadPage() {
    loadProjects();
    loadSocials();
}

window.onload = loadPage;
