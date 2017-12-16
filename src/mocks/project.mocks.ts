import { Project } from '../models/project.model';

const projectList: Project[] = [
    {name: 'Neues Projekt', desc: 'My new Project', color: 'white', active: true },
    {name: 'Projekt 1', desc: 'My cool project', color: 'green', active: true },
    {name: 'Projekt 2', desc: 'My cool project', color: 'red', active: true },
    {name: 'Projekt 3', desc: 'My cool project', color: 'yellow', active: true },
    {name: 'Projekt 4', desc: 'My cool project', color: 'pink', active: false },
    {name: 'Projekt 5', desc: 'My cool project', color: 'blue', active: false }
];

export const PROJECT_LIST = projectList;