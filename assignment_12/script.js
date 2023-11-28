// function for mode change
function handleModes() {
    let body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}
// function for form validations 
function handleTextInput() {
    let errorMessage = "";
    let name = document.getElementById("username");
    let college = document.getElementById("collegename");
    let branch = document.getElementById("branch");
    let yesCheckbox = document.getElementById("yes");
    let noCheckbox = document.getElementById("no");
    
    if (name.value === "") {
        errorMessage += "Please enter username, ";
    }

    if (college.value === "") {
        errorMessage += "Please enter college name, ";
    }

    if (branch.value === "Select") {
        errorMessage += "Please select branch, ";
    }

    if (yesCheckbox.checked === false && noCheckbox.checked === false) {
        errorMessage += "Please select a graduation option. ";
    }
    // printing error message if contain
    if (errorMessage !== "") {
        document.getElementById("result_div").innerHTML = "<h4>" + errorMessage + "</h4>";
        document.getElementById("result_div").style.color = "red";
    } 
    // printing the result if there is no error
    else {
        let resultMessage = "Hi " + name.value + ", Hope you are doing well. Glad to know that you ";
        resultMessage += (yesCheckbox.checked) ? "have completed your graduation in " : "are doing your graduation in ";
        resultMessage += branch.value + " from " + college.value + ".";
        document.getElementById("result_div").innerHTML = "<h4>" + resultMessage + "</h4>";
        document.getElementById("result_div").style.color = "black";
    }
}
