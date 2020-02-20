//const axios = require('axios');
// Make a request for a user with a given ID

axios.get('http://socialnet.mooo.com/eu.php')
.then(function (response) {
    // handle success
    //alert(my_data.data.results);
    let res=response.data.results;
    var tableTitleArray=["User Name","User Surname","User Email","User Role","User is Deactivated","Course Id","Course_Category","Course_Title",
        "Course Duration","Num Video Consumed Minutes","Completion Ratio","Course_Enroll_Date","Course_Start_Date","Course_Completion_Date",
        "Course_First_Completion_Date","Course_Last_Accessed_Date"];
    document.getElementsByTagName("div")[0].innerHTML="<h2>WELCOME</h2>";
    document.getElementsByTagName("h2")[0].style.color="red";
    let rowT=document.createElement("tr");
    for(var ind=0 ; ind<tableTitleArray.length ; ind++ ){
        var c_title=document.createElement("th");
        var title=document.createTextNode(tableTitleArray[ind]);
        c_title.className="cell";
        if(ind==7||ind>10)
            c_title.className="cTitle";
        c_title.appendChild(title);
        rowT.appendChild(c_title);
    }
    document.querySelector("table").prepend(rowT);
    
    for(var i=0 ; i<res.length ; i++ ){
        var row=document.createElement("tr");
        if(i%2==0){
            row.style.backgroundColor="rgb(200,200,200)";
        }
        var c_name=document.createElement("td");
        var name=document.createTextNode(res[i].user_name);
        c_name.className="cell";
        c_name.appendChild(name);
        row.appendChild(c_name);
        ///
        var c_sName=document.createElement("td");
        var sName=document.createTextNode(res[i].user_surname);
        c_sName.className="cell";
        c_sName.appendChild(sName);
        row.appendChild(c_sName);
        ///
        var c_email=document.createElement("td");
        var email=document.createTextNode(res[i].user_email);
        c_email.className="cell";
        c_email.appendChild(email);
        row.appendChild(c_email);
        ///
        var c_role=document.createElement("td");
        var role=document.createTextNode(res[i].user_role);
        c_role.className="cell";
        c_role.appendChild(role);
        row.appendChild(c_role);
        ///
        var c_isDeactive=document.createElement("td");
        var isDeactive=document.createTextNode(res[i].user_is_deactivated);
        c_isDeactive.className="cell";
        c_isDeactive.appendChild(isDeactive);
        row.appendChild(c_isDeactive);
        ///
        var c_courseId=document.createElement("td");
        var courseId=document.createTextNode(res[i].course_id);
        c_courseId.className="cell";
        c_courseId.appendChild(courseId);
        row.appendChild(c_courseId);
        ///
        var c_courseCategory=document.createElement("td");
        var courseCategory=document.createTextNode(res[i].course_category);
        c_courseCategory.className="cell";
        c_courseCategory.appendChild(courseCategory);
        row.appendChild(c_courseCategory);
        ///
        var c_courseTitle=document.createElement("td");
        var courseTitle=document.createTextNode(res[i].course_title);
        c_courseTitle.className="cell";
        c_courseTitle.appendChild(courseTitle);
        row.appendChild(c_courseTitle);
        ///
        var c_courseDuration=document.createElement("td");
        var courseDuration=document.createTextNode(res[i].course_duration);
        c_courseDuration.className="cell";
        c_courseDuration.appendChild(courseDuration);
        row.appendChild(c_courseDuration);
        ///
        var c_consumed=document.createElement("td");
        var consumed=document.createTextNode(res[i].num_video_consumed_minutes);
        c_consumed.className="cell";
        c_consumed.appendChild(consumed);
        row.appendChild(c_consumed);
        ///
        var c_completionRatio=document.createElement("td");
        var completionRatio=document.createTextNode(res[i].completion_ratio);
        c_completionRatio.className="cell";
        c_completionRatio.appendChild(completionRatio);
        row.appendChild(c_completionRatio);
        ///
        var c_enrollDate=document.createElement("td");
        var enrollDate=document.createTextNode(res[i].course_enroll_date);
        c_enrollDate.className="cell";
        c_enrollDate.appendChild(enrollDate);
        row.appendChild(c_enrollDate);
        ///
        var c_startDate=document.createElement("td");
        var startDate=document.createTextNode(res[i].course_start_date);
        c_startDate.className="cell";
        c_startDate.appendChild(startDate);
        row.appendChild(c_startDate);
        ///
        var c_completionDate=document.createElement("td");
        var completionDate=document.createTextNode(res[i].course_completion_date);
        c_completionDate.className="cell";
        c_completionDate.appendChild(completionDate);
        row.appendChild(c_completionDate);
        ///
        var c_first_completion_date=document.createElement("td");
        var first_completion_date=document.createTextNode(res[i].course_first_completion_date);
        c_first_completion_date.className="cell";
        c_first_completion_date.appendChild(first_completion_date);
        row.appendChild(c_first_completion_date);
        ///
        var c_course_last_accessed_date=document.createElement("td");
        var course_last_accessed_date=document.createTextNode(res[i].course_last_accessed_date);
        c_course_last_accessed_date.className="cell";
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

    var nameInWidth=$("#table tr th").eq(0).innerWidth()+$("#table tr th").eq(1).innerWidth();
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