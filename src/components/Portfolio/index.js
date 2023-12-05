import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
			name: 'Day Schdeduler',
			image: 'Day-scheduler.png',
			github: 'https://github.com/aaront080/HW5-Workday-Scheduler',
			deployed: 'https://aaront080.github.io/HW5-Workday-Scheduler/',
		},
		{
			name: 'PWA Text Editor',
			image: 'Text-editor.png',
			github: 'https://github.com/aaront080/PWA-text-editor',
			deployed: 'https://just-another-text-editor-app-b654790a3d7e.herokuapp.com/',
		},
		{
			name: 'MVC Tech Blog',
			image: 'MVC-tech-blog.png',
			github: 'https://github.com/aaront080/MVC-Tech-Blog',
			deployed: 'https://mvc-tech-blog-webapp-d95bd20d73c6.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			image: 'Weather-dashboard.jpg',
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