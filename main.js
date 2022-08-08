var studentArray = [];

function submit() {
    console.log('in submit');
    var name1 = document.getElementById("nameOfPerson1").value;
    studentArray.push(name1);


}

function sort() {
    studentArray.sort();
    document.getElementById("result").innerHTML = studentArray;
    var removeCommas = studentArray.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

}










