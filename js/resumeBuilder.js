(() => {

    function replace(str, newSubStr) {
        return str.replace("%data%", newSubStr);
    };

    function renderName(selector, name, role) {
        $(selector).prepend(replace(HTMLheaderRole, role))
            .prepend(replace(HTMLheaderName, name));
    };

    function renderContact(selector, contacts) {
        $(selector).append(replace(HTMLmobile, contacts.mobile))
            .append(replace(HTMLemail, contacts.email))
            .append(replace(HTMLtwitter, contacts.twitter))
            .append(replace(HTMLgithub, contacts.github))
            .append(replace(HTMLlocation, contacts.location));
    };

    function renderBioPicture(selector, bioPict) {
        $(selector).append(replace(HTMLbioPic, bioPict));
    };

    function renderMsg(selector, msg) {
        $(selector).append(replace(HTMLwelcomeMsg, msg));
    };

    function renderSkills(selector, skills) {
        $(selector).append(HTMLskillsStart);

        skills.forEach((skill) => {
            $("#skills").append(replace(HTMLskills, skill));
        });
    };

    function renderWork(selector, jobs) {
        jobs.forEach((job) => {
            const fullJobName = replace(HTMLworkEmployer, job.employer).concat(replace(HTMLworkTitle, job.title));
            $(selector).append(HTMLworkStart);
            $(".work-entry:last").append(fullJobName)
                .append(replace(HTMLworkDates, job.dates))
                .append(replace(HTMLworkLocation, job.location))
                .append(replace(HTMLworkDescription, job.description));
        });

    };

    function renderProjects(selector, projects) {
        projects.forEach((project) => {
            $(selector).append(HTMLprojectStart);
            $(".project-entry:last").append(replace(HTMLprojectTitle, project.title))
                .append(replace(HTMLprojectDates, project.dates))
                .append(replace(HTMLprojectDescription, project.description));
        });
    };

    function renderOnlineCourses(selector, onlineCourses) {
        $(selector).append(HTMLonlineClasses);

        onlineCourses.forEach((course) => {
            const onlineTitleSchool = replace(HTMLonlineTitle, course.title).concat(replace(HTMLonlineSchool, course.school));
            $(selector).append(HTMLschoolStart);
            $(".education-entry:last").append(onlineTitleSchool)
                .append(replace(HTMLonlineDates, course.dates))
                .append(replace(HTMLonlineURL, course.url));
        });
    }

    function renderSchools(selector, schools) {
        schools.forEach((school) => {
            const schoolDegreeName = replace(HTMLschoolName, school.name).concat(replace(HTMLschoolDegree, school.degree));
            $(selector).append(HTMLschoolStart);
            $(".education-entry:last").append(schoolDegreeName)
                .append(replace(HTMLschoolDates, school.dates))
                .append(replace(HTMLschoolLocation, school.location));
            school.majors.forEach((major) => {
                $(".education-entry:last").append(replace(HTMLschoolMajor, major));
            });
        });
    }

    const bio = {
        name: "Yanisleidi Rodriguez",
        role: "Front-End Web Developer",
        contacts: {
            mobile: "786-720-5357",
            email: "yaroga88@yahoo.com",
            twitter: "@yrgallo88",
            github: "yarogallo",
            location: "San Francisco, California"
        },
        welcomeMessage: "Hi there",
        skills: ["skill1", "skill2", "skill3", "skill4", "skill5"],
        biopic: "images/fry.jpg",
        display: function() {

            renderName("#header", this.name, this.role);
            renderContact("#topContacts", this.contacts);
            renderBioPicture("#header", this.biopic);
            renderMsg("#header", this.welcomeMessage);
            renderSkills("#header", this.skills);
            renderContact("#footerContacts", this.contacts);
        }
    };

    const education = {
        schools: [{
            name: "Central University Martha Abreu of Las Villas",
            location: "Santa Clara, Cuba",
            degree: "Computer Science",
            majors: ["Bachelor"],
            dates: "2006-2011",
            url: "http://www.uclv.edu.cu/",
        }, {
            name: "Central University Martha Abreu of Las Villas",
            location: "Santa Clara, Cuba",
            degree: "Computer Science",
            majors: ["Bachelor"],
            dates: "2006-2011",
            url: "http://www.uclv.edu.cu/",
        }],
        onlineCourses: [{
            title: "Front-end Foundations",
            school: "Code School",
            dates: "date1",
            url: "https://www.codeschool.com/"
        }, {
            title: "Front-end Formations",
            school: "Code School",
            dates: "date2",
            url: "https://www.codeschool.com/"
        }, {
            title: "CSS Cross-Country",
            school: "Code School",
            dates: "date3",
            url: "https://www.codeschool.com/"
        }, {
            title: "CSS Cross-Country",
            school: "Code School",
            dates: "date4",
            url: "https://www.codeschool.com/"
        }],
        display: function() {

            renderSchools("#education", this.schools);
            renderOnlineCourses("#education", this.onlineCourses);
        }
    };

    const work = {
        jobs: [{
            employer: "employerName1",
            title: "job-title1",
            location: "job-location1",
            dates: "string-date1",
            description: "string description1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        }, {
            employer: "employerName2",
            title: "job-title2",
            location: "job-location2",
            dates: "string-date2",
            description: "string description2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        }, {
            employer: "employerName3",
            title: "job-title3",
            location: "job-location3",
            dates: "string-date3",
            description: "string description3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        }],
        display: function() {
            renderWork("#workExperience", this.jobs);
        }
    };

    const projects = {
        projects: [{
            title: "string-project1-title",
            dates: "string-project1-date",
            description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
            images: ["images/197x148.gift", "images/197x148.gift", "images/197x148.gift"]
        }, {
            title: "string-project2-title",
            dates: "string-project2-date",
            description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
            images: ["images/197x148.gift", "images/197x148.gift", "images/197x148.gift"]
        }, {
            title: "string-project3-title",
            dates: "string-project3-date",
            description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
            images: ["images/197x148.gift", "images/197x148.gift", "images/197x148.gift"]
        }],
        display: function() {
            renderProjects("#projects", this.projects);
        }
    };

    $(window).on("load", () => {

        bio.display();
        education.display();
        work.display();
        projects.display();

        // renderName("#header", bio.name, bio.role);
        // renderContact("#topContacts", bio.contacts);
        // renderBioPicture("#header", bio.biopic);
        // renderMsg("#header", bio.welcomeMessage);
        // renderSkills("#header", bio.skills);
        // renderWork("#workExperience", work.jobs);
        // renderProjects("#projects", projects.projects);
        // renderSchools("#education", education.schools);
        // renderOnlineCourses("#education", education.onlineCourses);
        //renderContact("#footerContacts", bio.contacts);

    });
})();