function replace(str, newSubStr) {
    return str.replace("%data%", newSubStr);
};

function renderName($where, name, role) {
    $where.prepend(replace(HTMLheaderName, name));
    $("#name").append(replace(HTMLheaderRole, role));

};

function renderContact($where, contacts) {
    $where.append(replace(HTMLmobile, contacts.mobile))
        .append(replace(HTMLemail, contacts.email))
        .append(replace(HTMLtwitter, contacts.twitter))
        .append(replace(HTMLgithub, contacts.github))
        .append(replace(HTMLlocation, contacts.location));
};

function renderBioPicture($where, bioPict) {
    $where.append(replace(HTMLbioPic, bioPict));
};

function renderMsg($where, msg) {
    $where.append(replace(HTMLwelcomeMsg, msg));
};

function renderSkills($where, skills) {
    $where.append(HTMLskillsStart);

    skills.forEach((skill) => {
        $("#skills").append(replace(HTMLskills, skill));
    });
};

function renderWork($where, jobs) {
    jobs.forEach((job) => {
        const fullJobName = replace(HTMLworkEmployer, job.employer).concat(replace(HTMLworkTitle, job.title));
        $($where).append(HTMLworkStart);
        $(".work-entry:last").append(fullJobName)
            .append(replace(HTMLworkDates, job.dates))
            .append(replace(HTMLworkLocation, job.location))
            .append(replace(HTMLworkDescription, job.description));
    });

};

function renderProjects($where, projects) {
    projects.forEach((project) => {
        $where.append(HTMLprojectStart);
        $(".project-entry:last").append(replace(HTMLprojectTitle, project.title))
            .append(replace(HTMLprojectDates, project.dates))
            .append(replace(HTMLprojectDescription, project.description));
        project.images.forEach((image) => {
            $(".project-entry:last").append(replace(HTMLprojectImage, image));
        });
    });
};

function renderOnlineCourses($where, onlineCourses) {
    $where.append(HTMLonlineClasses);

    onlineCourses.forEach((course) => {
        const onlineTitleSchool = replace(HTMLonlineTitle, course.title).concat(replace(HTMLonlineSchool, course.school));
        $where.append(HTMLschoolStart);
        $(".education-entry:last").append(onlineTitleSchool)
            .append(replace(HTMLonlineDates, course.dates))
            .append(replace(HTMLonlineURL, course.url));
    });
}

function renderSchools($where, schools) {
    schools.forEach((school) => {
        const schoolDegreeName = replace(HTMLschoolName, school.name).concat(replace(HTMLschoolDegree, school.degree));
        $where.append(HTMLschoolStart);
        $(".education-entry:last").append(schoolDegreeName)
            .append(replace(HTMLschoolDates, school.dates))
            .append(replace(HTMLschoolLocation, school.location));
        school.majors.forEach((major) => {
            $(".education-entry:last").append(replace(HTMLschoolMajor, major));
        });
    });
};

function renderMap($where) {
    $where.append(googleMap);
};

function renderNav($where) {
    $where.prepend(HTMLNav);
    $("#header-nav-ul").append(HTMLWorkAnchor)
        .append(HTMLProjectAnchor)
        .append(HTMLMapAnchor)
        .append(HTMLEducationAnchor)
        .append(HTMLDownloadAnchor);
}

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
    welcomeMessage: "Hi there",
    skills: ["sagittis aliquam", "egestas", "malesuada bibendum", "morbi tempus"],
    biopic: "images/fry.jpg",
    display: function() {

        var header = $("#header");
        var topContacts = $("#topContacts");
        var footerContacts = $("#footerContacts");

        renderName(header, this.name, this.role);
        renderContact(topContacts, this.contacts);
        renderBioPicture(header, this.biopic);
        renderMsg(header, this.welcomeMessage);
        renderSkills(header, this.skills);
        renderContact(footerContacts, this.contacts);
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
        location: "Habana, Cuba",
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

        var education = $("#education");

        renderSchools(education, this.schools);
        renderOnlineCourses(education, this.onlineCourses);
    }
};

const work = {
    jobs: [{
        employer: "employerName1",
        title: "job-title1",
        location: "Santa Clara, Cuba",
        dates: "string-date1",
        description: "string description1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    }, {
        employer: "employerName2",
        title: "job-title2",
        location: "Miami, Florida",
        dates: "string-date2",
        description: "string description2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    }, {
        employer: "employerName3",
        title: "job-title3",
        location: "Miami, Florida",
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
        images: ["images/projectImg.gif", "images/projectImg.gif", "images/projectImg.gif"]
    }, {
        title: "string-project2-title",
        dates: "string-project2-date",
        description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
        images: ["images/projectImg.gif", "projectImg.gif", "projectImg.gif"]
    }, {
        title: "string-project3-title",
        dates: "string-project3-date",
        description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
        images: ["images/projectImg.gif", "images/projectImg.gif", "images/projectImg.gif"]
    }],
    display: function() {

        var projects = $("#projects");
        renderProjects(projects, this.projects);
    }
};

$(window).on("load", () => {
    var mapDiv = $("#mapDiv");
    var header = $("#header");

    bio.display();
    education.display();
    work.display();
    projects.display();
    renderMap(mapDiv);
    renderNav(header);

});