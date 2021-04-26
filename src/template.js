// create the team by running some functions that outputs a string that is HTML
const generateTeam = (teamMembers) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
        <title>The Team</title>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 bg-primary">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${generateManager(teamMembers[0])}
                    ${teamMembers.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(" ")}
                    ${teamMembers.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(" ")}
                </div>
            </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
    crossorigin="anonymous"></script>
    </body>
</html>`
};

const generateManager = (manager) => {
    return `<div class="card mr-2">
                        <div class="card-header bg-warning">
                            <h2 class="card-title">${manager.getName()}</h2>
                            <h3 class="card-title"><i class="fab fa-earlybirds mr-2"></i>${manager.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${(manager.getEmail())}</a></li>
                                <li class="list-group-item">Office number: ${manager.getOfficeNum()}</li>
                            </ul>
                        </div>
                    </div>`
};

const generateEngineer = engineer => {
    return `<div class="card mr-2">
                        <div class="card-header bg-success">
                            <h2 class="card-title">${engineer.getName()}</h2>
                            <h3 class="card-title"><i class="fas fa-code mr-2"></i>${engineer.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>`
};

const generateIntern = intern => {
    return `<div class="card mr-2">
                        <div class="card-header bg-info">
                            <h2 class="card-title">${intern.getName()}</h2>
                            <h3 class="card-title"><i class="fas fa-graduation-cap mr-2"></i>${intern.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>`
};

module.exports = generateTeam;
