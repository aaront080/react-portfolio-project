import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
			name: 'Day Schdeduler',
			/*description:
				'This is a property management system that is used by landlords viewing and managing their properties and for tenants to allow for maintenance requests and pay rent.',*/
			image: 'Day-scheduler.png',
			/*technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],*/
			github: 'https://github.com/aaront080/HW5-Workday-Scheduler',
			deployed: 'https://aaront080.github.io/HW5-Workday-Scheduler/',
		},
		{
			name: 'PWA Text Editor',
			/*description:
				'This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.',*/
			image: 'Text-editor.png',
			/*technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],*/
			github: 'https://github.com/aaront080/PWA-text-editor',
			deployed: 'https://just-another-text-editor-app-b654790a3d7e.herokuapp.com/',
		},
		{
			name: 'MVC Tech Blog',
			/*description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',*/
			image: 'MVC-tech-blog.png',
			/*technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],*/
			github: 'https://github.com/aaront080/MVC-Tech-Blog',
			deployed: 'https://mvc-tech-blog-webapp-d95bd20d73c6.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			/*description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',*/
			image: 'Weather-dashboard.jpg',
			/*technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],*/
			github: 'https://github.com/aaront080/weather-dashboard-hw',
			deployed: 'https://aaront080.github.io/weather-dashboard-hw/',
		},
	];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );

}

export default Portfolio;