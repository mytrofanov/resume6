import samurai from './samurai.jpg'
import landing from '../../images/landing.jpg'
import vanila from '../../images/vanilaJS.jpg'
import resume from '../../images/resume.jpg'
import niceDevice from '../../images/niceDevice.jpg'
import currency from '../../images/currency.jpg'

export const MyWorks = [{
    id: 'Currency Exchange',
    image: currency,
    name: 'Currency Exchange',
    description: 'This site was made using React, TypeScript, Redux, Material UI, Git, axios, react-hooks, etc.',
    reference: 'https://mytrofanov.github.io/currency/'
},
    {
        id: 'Online Shop',
        image: niceDevice,
        name: 'Online Shop',
        description: 'Pet-project (Backend & FrontEnd) was made using:  React, NodeJs, MobX, React Bootstrap, ' +
            'PostgreSQL,Sequelize, axios, react-hooks, etc.',
        reference: 'http://nicedevice.top/',
        git: 'https://github.com/mytrofanov/online-store'
    },
    {
        id: 'Social Network',
        image: samurai,
        name: 'The social-network website',
        description: 'This Social Network was build using React, Redux, JavaScript, TypeScript, CSS, Ajax, API, ' +
            'cookie, react-hook-form, Git',
        reference: 'https://mytrofanov.github.io/second/#/profile'
    },
    {
        id: 'Landing Page',
        image: landing,
        name: 'Landing Page',
        description: 'This Landing Page was made using HTML5, CSS3, JavaScript, Git',
        reference: 'https://mytrofanov.github.io/wpd/index.html#'
    }, {
        id: 'Resume',
        image: resume,
        name: 'Resume',
        description: 'This site was made using HTML5, CSS3, React, JavaScript, Material UI, react-hook-form, Git',
        reference: 'http://mytrofanov.guru'
    },
    {
        id: 'VanillaJS',
        image: vanila,
        name: 'VanillaJS',
        description: 'This project was made using only Vanilla Javascript, HTML5, CSS3 and Git',
        reference: 'https://mytrofanov.github.io/Tasks/'
    }
]