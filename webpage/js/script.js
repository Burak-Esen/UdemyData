//const axios = require('axios');
// Make a request for a user with a given ID

axios.get('http://socialnet.mooo.com/eu.php')
.then(function (response) {
    // handle success
    //alert(my_data.data.results);
    let res=response.data.results;
    document.getElementsByTagName("div")[0].innerHTML="<h2>WELCOME</h2>";
    document.getElementsByTagName("h2")[0].style.color="red";
   
    for(var i=0 ; i<res.length ; i++ ){
        var row=document.createElement("tr");
        row.className="row";
        if(i%2==0){
            row.style.backgroundColor="rgb(200,200,200)";
        }
        var c_name=document.createElement("td");
        var name=document.createTextNode(res[i].user_name+" "+res[i].user_surname);
        c_name.className="col-xl-1";
        c_name.appendChild(name);
        row.appendChild(c_name);
        ///
        var c_email=document.createElement("td");
        var email=document.createTextNode(res[i].user_email);
        c_email.className="col-xl-2";
        c_email.appendChild(email);
        row.appendChild(c_email);
        ///
        var c_courseCategory=document.createElement("td");
        var courseCategory=document.createTextNode(res[i].course_category);
        c_courseCategory.className="col-xl-1";
        c_courseCategory.appendChild(courseCategory);
        row.appendChild(c_courseCategory);
        ///
        var c_courseTitle=document.createElement("td");
        var courseTitle=document.createTextNode(res[i].course_title);
        c_courseTitle.className="col-xl-3";
        c_courseTitle.appendChild(courseTitle);
        row.appendChild(c_courseTitle);
        ///
        var c_courseDuration=document.createElement("td");
        var courseDuration=document.createTextNode((res[i].course_duration/60).toFixed(2)+" h");
        c_courseDuration.className="col-xl-1";
        c_courseDuration.appendChild(courseDuration);
        row.appendChild(c_courseDuration);
        ///
        var c_completionRatio=document.createElement("td");
        var completionRatio=document.createTextNode("% "+res[i].completion_ratio);
        c_completionRatio.className="col-xl-1";
        c_completionRatio.appendChild(completionRatio);
        row.appendChild(c_completionRatio);
        ///
        var c_startDate=document.createElement("td");
        var startDate=document.createTextNode(((res[i].course_start_date)||" ").substring(0,10));
        c_startDate.className="col-xl-1";
        c_startDate.appendChild(startDate);
        row.appendChild(c_startDate);
        ///
        var c_completionDate=document.createElement("td");
        var completionDate=document.createTextNode((res[i].course_completion_date|| " ").substring(0,10));
        c_completionDate.className="col-xl-1";
        c_completionDate.appendChild(completionDate);
        row.appendChild(c_completionDate);
        ///
        var c_course_last_accessed_date=document.createElement("td");
        var course_last_accessed_date=document.createTextNode((res[i].course_last_accessed_date).substring(0,10));
        c_course_last_accessed_date.className="col-xl-1";
        c_course_last_accessed_date.appendChild(course_last_accessed_date);
        row.appendChild(c_course_last_accessed_date);
        ///
        document.querySelector("table tbody").appendChild(row);
        
    }
    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    var nameInWidth=$("#table tr td").eq(0).innerWidth()-5;
    $("#myInputName").innerWidth(nameInWidth+"px");
    $(document).ready(function(){
        $("#myInputName").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

});
