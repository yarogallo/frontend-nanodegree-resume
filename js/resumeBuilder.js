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
    biopic: "images/fry.jpg",
    display: function() {

        var name = replaceIn(HTMLheaderName, this.name);
        var role = replaceIn(HTMLheaderRole, this.role);
        var mobile = replaceIn(HTMLmobile, this.contacts.mobile);
        var email = replaceIn(HTMLemail, this.contacts.email);
        var twitter = replaceIn(HTMLtwitter, this.contacts.twitter);
        var gitHub = replaceIn(HTMLgithub, this.contacts.github);
        var location = replaceIn(HTMLlocation, this.contacts.location);

        var bioPic = replaceIn(HTMLbioPic, this.biopic);
        var welcomeMsg = replaceIn(HTMLwelcomeMsg, this.welcomeMessage)

        $("#header").prepend(name);
        appendTo($("#name"), role);
        appendTo($("#topContacts"), mobile, twitter, email, gitHub, location);
        appendTo($("#header"), bioPic, welcomeMsg, HTMLskillsStart);

        appendTo($("#footerContacts"), mobile, twitter, email, gitHub, location)

        this.skills.forEach((skill) => {
            var currentSkill = replaceIn(HTMLskills, skill);
            appendTo($("#skills"), currentSkill);
        });
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
    }],
    display: function() {

        this.schools.forEach((school) => {
            var schoolDegreeName = replaceIn(HTMLschoolName, school.name).concat(replaceIn(HTMLschoolDegree, school.degree));
            var dates = replaceIn(HTMLschoolDates, school.dates);
            var location = replaceIn(HTMLschoolLocation, school.location);
            appendTo($("#education"), HTMLschoolStart);
            appendTo($(".education-entry:last"), schoolDegreeName, dates, location)

            school.majors.forEach((major) => {
                var major = replaceIn(HTMLschoolMajor, major);
                appendTo($(".education-entry:last"), major);
            });
        });

        appendTo($("#education"), HTMLonlineClasses);

        this.onlineCourses.forEach((course) => {
            var onlineTitleSchool = replaceIn(HTMLonlineTitle, course.title).concat(replaceIn(HTMLonlineSchool, course.school));
            var dates = replaceIn(HTMLonlineDates, course.dates);
            var courseUrl = replaceIn(HTMLonlineURL, course.url);

            appendTo($("#education"), HTMLschoolStart);
            appendTo($(".education-entry:last"), onlineTitleSchool, dates, courseUrl);
        });
    }
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
    }],
    display: function() {
        this.jobs.forEach((job) => {
            var fullJobName = replaceIn(HTMLworkEmployer, job.employer).concat(replaceIn(HTMLworkTitle, job.title));
            var dates = replaceIn(HTMLworkDates, job.dates);
            var location = replaceIn(HTMLworkLocation, job.location);
            var description = replaceIn(HTMLworkDescription, job.description);

            appendTo($("#workExperience"), HTMLworkStart);
            appendTo($(".work-entry:last"), fullJobName, dates, location, description);
        });
    }
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
    }],
    display: function() {

        this.projects.forEach((project) => {
            var title = replaceIn(HTMLprojectTitle, project.title);
            var dates = replaceIn(HTMLprojectDates, project.dates);
            var description = replaceIn(HTMLprojectDescription, project.description);

            appendTo($("#projects"), HTMLprojectStart);
            appendTo($(".project-entry:last"), title, dates, description);

            project.images.forEach((image) => {
                var image = replaceIn(HTMLprojectImage, image);
                appendTo($(".project-entry:last"), image);
            });
        });
    }
};

function replaceIn(str, newSubStr) {
    return str.replace("%data%", newSubStr);
};

function appendTo($where, ...elements) {
    elements.forEach(elem => $where.append(elem));
}

function renderMap($where) {
    appendTo($where, googleMap);
};

$(window).on("load", () => {
    var mapDiv = $("#mapDiv");
    var header = $("#header");
    var brand = $(".navbar-brand");

    bio.display();
    education.display();
    work.display();
    projects.display();

    renderMap(mapDiv);

    brand.on("mouseenter", function(params) {
        $(".nav-item a").addClass("animated-item");
    });

    brand.on("mouseout", function(params) {
        $(".nav-item a").removeClass("animated-item");
    });

});