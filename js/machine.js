// counters
let interviewTotal = 0;
let rejectedTotal = 0;

let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");


// get elements
let interviewButtons = document.querySelectorAll(".interview-button");
let rejectedButtons = document.querySelectorAll(".rejected-button");
let jobCards = document.querySelectorAll(".job-card");


// INTERVIEW BUTTON
for (let i = 0; i < interviewButtons.length; i++) {

    interviewButtons[i].onclick = function () {

        let card = this.closest(".job-card");
        let badge = card.querySelector(".badge");

        if (card.dataset.status === "rejected") {
            rejectedTotal--;
        }

        if (card.dataset.status !== "interview") {
            interviewTotal++;
        }

        card.dataset.status = "interview";
        badge.textContent = "INTERVIEW";

        interviewCount.textContent = interviewTotal;
        rejectedCount.textContent = rejectedTotal;

        filterJobs(currentTab);
    };
}


// REJECTED BUTTON
for (let i = 0; i < rejectedButtons.length; i++) {

    rejectedButtons[i].onclick = function () {

        let card = this.closest(".job-card");
        let badge = card.querySelector(".badge");

        if (card.dataset.status === "interview") {
            interviewTotal--;
        }

        if (card.dataset.status !== "rejected") {
            rejectedTotal++;
        }

        card.dataset.status = "rejected";
        badge.textContent = "REJECTED";

        interviewCount.textContent = interviewTotal;
        rejectedCount.textContent = rejectedTotal;

        filterJobs(currentTab);
    };
}



let currentTab = "all";


// TAB BUTTONS
document.getElementById("tab-all").onclick = function () {
    currentTab = "all";
    filterJobs("all");
};

document.getElementById("tab-interview").onclick = function () {
    currentTab = "interview";
    filterJobs("interview");
};

document.getElementById("tab-rejected").onclick = function () {
    currentTab = "rejected";
    filterJobs("rejected");
};



// FILTER FUNCTION
function filterJobs(type) {

    for (let i = 0; i < jobCards.length; i++) {

        let status = jobCards[i].dataset.status;

        if (type === "all") {
            jobCards[i].style.display = "block";
        }

        else if (type === "interview") {

            if (status === "interview") {
                jobCards[i].style.display = "block";
            } else {
                jobCards[i].style.display = "none";
            }

        }

        else if (type === "rejected") {

            if (status === "rejected") {
                jobCards[i].style.display = "block";
            } else {
                jobCards[i].style.display = "none";
            }

        }

    }

}


function filterJobs(type) {

    let visibleJobs = 0;

    for (let i = 0; i < jobCards.length; i++) {

        let status = jobCards[i].dataset.status;

        if (type === "all") {
            jobCards[i].style.display = "block";
            visibleJobs++;
        }

        else if (type === "interview") {

            if (status === "interview") {
                jobCards[i].style.display = "block";
                visibleJobs++;
            } else {
                jobCards[i].style.display = "none";
            }

        }

        else if (type === "rejected") {

            if (status === "rejected") {
                jobCards[i].style.display = "block";
                visibleJobs++;
            } else {
                jobCards[i].style.display = "none";
            }

        }

    }

    // show empty image if no jobs
    let emptyState = document.getElementById("emptyState");

    if (visibleJobs === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }

}
// total jobs
let totalJobs = document.getElementById("total-jobs-count");

// delete buttons
let deleteButtons = document.querySelectorAll(".delete-button");

let totalNumber = jobCards.length;


// DELETE JOB
for (let i = 0; i < deleteButtons.length; i++) {

    deleteButtons[i].onclick = function () {

        let card = this.closest(".job-card");

        let status = card.dataset.status;

        // reduce interview
        if (status === "interview") {
            interviewTotal--;
        }

        // reduce rejected
        if (status === "rejected") {
            rejectedTotal--;
        }

        // update counters
        interviewCount.textContent = interviewTotal;
        rejectedCount.textContent = rejectedTotal;

        // reduce total
        totalNumber--;
        totalJobs.textContent = totalNumber;

        // remove card
        card.remove();

    };

}