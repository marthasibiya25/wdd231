const courses = [

    { code: "WDD130", subject: "WDD", credits: 2, completed: true },
    { code: "WDD131", subject: "WDD", credits: 2, completed: true },
    { code: "WDD231", subject: "WDD", credits: 2, completed: false },
    { code: "CSE110", subject: "CSE", credits: 2, completed: false },
    { code: "CSE111", subject: "CSE", credits: 2, completed: false }

];

const container = document.querySelector("#courses");
const creditDisplay = document.querySelector("#credits");

function displayCourses(list) {

    container.innerHTML = "";

    list.forEach(course => {

        const card = document.createElement("div");

        card.textContent = course.code;

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);

    });

    const totalCredits = list.reduce((sum, course) => sum + course.credits, 0);

    creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "WDD"));
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "CSE"));
});