const { prompt } = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require('./src/template');
const teamMembers = [];
const idArray = [];

const appMenu = () => {
    createManager();

    function createManager() {
        console.log('Welcome, build your team here.');
        prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'managerName',
                validate: answer => {
                    if (answer !== '') {
                        return true
                    }
                    return "please enter at least one character"
                }
            },
            {
                type: 'input',
                message: "What is the manager's ID number?",
                name: 'managerId',
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true
                    }
                    return "please enter a number greater than 0"
                }
            },
            {
                type: 'input',
                message: "What is the manager's email?",
                name: 'managerEmail',
                validate: answer => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                        return true
                    }
                    return "please enter an email address"
                }
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'managerOfficeNum',
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true
                    }
                    return "please enter a number greater than 0"
                }
            },
        ]) .then(answers => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNum,
            )
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    }
};

const createTeam = () => {
    prompt([
        {
            type: 'list',
            message: 'What type of team member do you want to create?',
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore team members",
            ],
            name: 'teamType',

        }
    ]) .then(choice => {
        switch(choice.teamType) {
            case "Engineer":
                addEngineer();
                break
            case "Intern":
                addIntern();
                break
            default :
            // console.log(teamMembers);
            // console.log(idArray);
            buildTeam();
        }
    })
};

const addEngineer = () => {
    prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return "please enter at least one character"
            }
        },
        {
            type: 'input',
                message: "What is the engineer's ID number?",
                name: 'engineerId',
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true
                    }
                    return "please enter a number greater than 0"
                }
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'engineerEmail',
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true
                }
                return "please enter an email address"
            }
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub?",
            name: 'engineerGitHub',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return "please enter at least one character"
            }
        },
    ]) .then(answers => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGitHub,
        )
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
    })    
};

const addIntern = () => {
    prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return "please enter at least one character"
            }
        },
        {
            type: 'input',
            message: "What is the intern's ID number?",
            name: 'internId',
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true
                }
                return "please enter a number greater than 0"
            }
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'internEmail',
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true
                }
                return "please enter an email address"
            }
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'internSchool',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return "please enter at least one character"
            }
        },
    ]) .then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool,
        )
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam()
    })
};

const buildTeam = () => {
    console.log('Generating Team Profile. . .')
    fs.writeFileSync(outputPath, render([ ...teamMembers]))
}

appMenu();