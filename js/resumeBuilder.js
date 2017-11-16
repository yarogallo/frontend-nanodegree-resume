const data = (function() {
    const bio = {
        name: "Yanisleidi Rodriguez",
        role: "Front-End Web Developer",
        contacts: {
            mobile: "786-720-5357",
            email: "yaroga88@yahoo.com",
            twitter: "@yrgallo88",
            github: "yarogallo",
            location: "San Francisco"
        },
        welcomeMessage: "Lorem ipsum dolor si.",
        skills: ["sagittis aliquam", "egestas", "malesuada bibendum", "morbi tempus"],
        biopic: "images/fry.jpg"
    };

    const education = {
        schools: [{
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
            dates: "March-2016",
            url: "https://www.codeschool.com"
        }, {
            title: "Front-end Formations",
            school: "Code School",
            dates: "March-2016",
            url: "https://www.codeschool.com"
        }, {
            title: "CSS Cross-Country",
            school: "Code School",
            dates: "June-2016",
            url: "https://www.codeschool.com"
        }, {
            title: "Front-End Web Developer Nanodegree Program",
            school: "Udacity",
            dates: "in Progress",
            url: "www.udacity.com"
        }]
    };

    const work = {
        jobs: [{
            employer: "Lorem ipsum dolor",
            title: "Lorem ipsum dolo.",
            location: "Santa Clara, Cuba",
            dates: "Lorem-ipsu",
            description: "string description1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        }, {
            employer: "Lorem ipsum dolor",
            title: "Lorem ipsum dolo.",
            location: "SanTa Clara, Cuba",
            dates: "Lorem-ipsu",
            description: "string description2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        }, {
            employer: "Lorem ipsum dolor",
            title: "Lorem ipsum dolo.",
            location: "Miami, Florida",
            dates: "Lorem-ipsu",
            description: "string description3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        }]
    };

    const projects = {
        projects: [{
            title: "Lorem ipsum dolo.",
            dates: "Lorem-ipsu",
            description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
            images: ["images/project.jpg", "images/project1.jpg", "images/project2.jpg"]
        }, {
            title: "Lorem ipsum dolor sit amet.",
            dates: "Lorem-ipsu",
            description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
            images: ["images/project.jpg", "images/project1.jpg", "images/project2.jpg"]
        }, {
            title: "Lorem ipsum dolor sit.",
            dates: "Lorem-ipsu",
            description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
            images: ["images/project.jpg", "images/project1.jpg", "images/project2.jpg"]
        }]
    };
    return { bio: bio, education: education, work: work, projects: projects }

})();

const controller = {
    init: function() {
        this.brand = $(".navbar-brand");

        resumeView.init();

        this.brand.on("mouseenter", function() {
            $(".nav-item a").addClass("animated-item");
        });

        this.brand.on("mouseout", function() {
            $(".nav-item a").removeClass("animated-item");
        });
    },
    getAllData: function() {
        return data;
    }
};

const resumeView = {
    init: function() {
        this.data = controller.getAllData();
        this.render(this.data);
    },
    render: function(data) {
        this.displayBio(data.bio);
        this.displayEducation(data.education);
        this.displayWork(data.work);
        this.displayProjects(data.projects);
        this.displayMap();

    },
    replaceIn: function(str, newSubStr) {
        return str.replace("%data%", newSubStr);
    },
    appendTo: function($where, ...elements) {
        elements.forEach(elem => $where.append(elem));
    },
    displayBio: function(bio) {
        var name = this.replaceIn(HTMLheaderName, bio.name);
        var role = this.replaceIn(HTMLheaderRole, bio.role);
        var mobile = this.replaceIn(HTMLmobile, bio.contacts.mobile);
        var email = this.replaceIn(HTMLemail, bio.contacts.email);
        var twitter = this.replaceIn(HTMLtwitter, bio.contacts.twitter);
        var gitHub = this.replaceIn(HTMLgithub, bio.contacts.github);
        var location = this.replaceIn(HTMLlocation, bio.contacts.location);

        var bioPic = this.replaceIn(HTMLbioPic, bio.biopic);
        var welcomeMsg = this.replaceIn(HTMLwelcomeMsg, bio.welcomeMessage);

        $("#header").prepend(name);
        this.appendTo($("#name"), role);
        this.appendTo($("#topContacts"), mobile, twitter, email, gitHub, location);
        this.appendTo($("#header"), bioPic, welcomeMsg, HTMLskillsStart);

        this.appendTo($("#footerContacts"), mobile, twitter, email, gitHub, location);

        bio.skills.forEach((skill) => {
            var currentSkill = this.replaceIn(HTMLskills, skill);
            this.appendTo($("#skills"), currentSkill);
        });
    },
    displayEducation: function(education) {
        education.schools.forEach((school) => {
            var schoolDegreeName = this.replaceIn(HTMLschoolName, school.name).concat(this.replaceIn(HTMLschoolDegree, school.degree));
            var dates = this.replaceIn(HTMLschoolDates, school.dates);
            var location = this.replaceIn(HTMLschoolLocation, school.location);
            this.appendTo($("#education"), HTMLschoolStart);
            this.appendTo($(".education-entry:last"), schoolDegreeName, dates, location);

            school.majors.forEach((major) => {
                var majorTag = this.replaceIn(HTMLschoolMajor, major);
                this.appendTo($(".education-entry:last"), majorTag);
            });
        });

        this.appendTo($("#education"), HTMLonlineClasses);

        education.onlineCourses.forEach((course) => {
            var onlineTitleSchool = this.replaceIn(HTMLonlineTitle, course.title).concat(this.replaceIn(HTMLonlineSchool, course.school));
            var dates = this.replaceIn(HTMLonlineDates, course.dates);
            var courseUrl = this.replaceIn(HTMLonlineURL, course.url);

            this.appendTo($("#education"), HTMLschoolStart);
            this.appendTo($(".education-entry:last"), onlineTitleSchool, dates, courseUrl);
        });
    },
    displayWork: function(work) {
        work.jobs.forEach((job) => {
            var fullJobName = this.replaceIn(HTMLworkEmployer, job.employer).concat(this.replaceIn(HTMLworkTitle, job.title));
            var dates = this.replaceIn(HTMLworkDates, job.dates);
            var location = this.replaceIn(HTMLworkLocation, job.location);
            var description = this.replaceIn(HTMLworkDescription, job.description);

            this.appendTo($("#workExperience"), HTMLworkStart);
            this.appendTo($(".work-entry:last"), fullJobName, dates, location, description);
        });
    },
    displayProjects: function(projects) {
        projects.projects.forEach((project) => {
            var title = this.replaceIn(HTMLprojectTitle, project.title);
            var dates = this.replaceIn(HTMLprojectDates, project.dates);
            var description = this.replaceIn(HTMLprojectDescription, project.description);

            this.appendTo($("#projects"), HTMLprojectStart);
            this.appendTo($(".project-entry:last"), title, dates, description);

            project.images.forEach((image) => {
                var imgTag = this.replaceIn(HTMLprojectImage, image);
                this.appendTo($(".project-entry:last"), imgTag);
            });
        });
    },
    displayMap: function() {
        var mapDiv = $("#mapDiv");
        this.appendTo(mapDiv, googleMap);
    }
};

$(window).on("load", () => {
    controller.init();
});