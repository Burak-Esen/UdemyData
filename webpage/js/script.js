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

        var c_name=document.createElement("td");
        var name=document.createTextNode(res[i].user_name+" "+res[i].user_surname);
        c_name.className="user-name";
        c_name.scope=""+(i+1);
        c_name.appendChild(name);
        row.appendChild(c_name);
        ///
        var c_email=document.createElement("td");
        var email=document.createTextNode(res[i].user_email);
        c_email.className="user-email";
        c_email.scope=""+(i+1);
        c_email.appendChild(email);
        row.appendChild(c_email);
        ///
        var c_courseCategory=document.createElement("td");
        var courseCategory=document.createTextNode(res[i].course_category);
        c_courseCategory.className="category";
        c_courseCategory.scope=""+(i+1);
        c_courseCategory.appendChild(courseCategory);
        row.appendChild(c_courseCategory);
        ///
        var c_courseTitle=document.createElement("td");
        var courseTitle=document.createTextNode(res[i].course_title);
        c_courseTitle.className="courseTitle";
        c_courseTitle.scope=""+(i+1);
        c_courseTitle.appendChild(courseTitle);
        row.appendChild(c_courseTitle);
        ///
        var c_courseDuration=document.createElement("td");
        var courseDuration=document.createTextNode((res[i].course_duration/60).toFixed(2)+" h");
        c_courseDuration.className="cDuration";
        c_courseDuration.scope=""+(i+1);
        c_courseDuration.appendChild(courseDuration);
        row.appendChild(c_courseDuration);
        ///
        var c_completionRatio=document.createElement("td");
        var completionRatio=document.createTextNode("% "+res[i].completion_ratio);
        c_completionRatio.className="cRatio";
        c_completionRatio.scope=""+(i+1);
        c_completionRatio.appendChild(completionRatio);
        row.appendChild(c_completionRatio);
        ///
        var c_startDate=document.createElement("td");
        var startDate=document.createTextNode(((res[i].course_start_date)||" ").substring(0,10));
        c_startDate.className="cStartD";
        c_startDate.scope=""+(i+1);
        c_startDate.appendChild(startDate);
        row.appendChild(c_startDate);
        ///
        var c_completionDate=document.createElement("td");
        var completionDate=document.createTextNode((res[i].course_completion_date|| " ").substring(0,10));
        c_completionDate.className="compD";
        c_completionDate.scope=""+(i+1);
        c_completionDate.appendChild(completionDate);
        row.appendChild(c_completionDate);
        ///
        var c_course_last_accessed_date=document.createElement("td");
        var course_last_accessed_date=document.createTextNode((res[i].course_last_accessed_date).substring(0,10));
        c_course_last_accessed_date.className="lastAcc";
        c_course_last_accessed_date.scope=""+(i+1);
        c_course_last_accessed_date.appendChild(course_last_accessed_date);
        row.appendChild(c_course_last_accessed_date);
        ///
        document.querySelector("table tbody").appendChild(row);
        
    }

    //dark Theme button listener
    $("#dark-theme").click(function(){
        if($("#dark-theme").text()==="Dark Toggle")
            $("#dark-theme").text("White Toggle");
        else $("#dark-theme").text("Dark Toggle");
        $("#table").toggleClass("table-dark");
        $("body").toggleClass("grey");
        $("h2").toggleClass("white");
    });

    //Seach Anything input filter
    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#table tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //name input filter
    var nameInWidth=$("#table tr td").eq(0).innerWidth()-6;
    $("#myInputName").innerWidth(nameInWidth+"px");
    $(document).ready(function(){
        $("#myInputName").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".user-name").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //email input filter
    var emailWidth=$("#table tr td").eq(1).innerWidth()-6;
    $("#myInputEmail").innerWidth(emailWidth+"px");
    $(document).ready(function(){
        $("#myInputEmail").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".user-email").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Catagory input filter
    var categoryWidth=$("#table tr td").eq(2).innerWidth()-6;
    $("#myInputCategory").innerWidth(categoryWidth+"px");
    $(document).ready(function(){
        $("#myInputCategory").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".category").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Coourse title input filter
    var titleWidth=$("#table tr td").eq(3).innerWidth()-6;
    $("#myInputCourseTitle").innerWidth(titleWidth+"px");
    $(document).ready(function(){
        $("#myInputCourseTitle").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".courseTitle").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Course duration input filter
    var duratWidth=$("#table tr td").eq(4).innerWidth()-6;
    $("#myInputCourseDur").innerWidth(duratWidth+"px");
    $(document).ready(function(){
        $("#myInputCourseDur").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".cDuration").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Complate ratio input filter
    var ratioWidth=$("#table tr td").eq(5).innerWidth()-6;
    $("#myInputCompletionRatio").innerWidth(ratioWidth+"px");
    $(document).ready(function(){
        $("#myInputCompletionRatio").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".cRatio").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Course start date input filter
    var startDWidth=$("#table tr td").eq(6).innerWidth()-6;
    $("#myInputStartD").innerWidth(startDWidth+"px");
    $(document).ready(function(){
        $("#myInputStartD").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".cStartD").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Complate date input filter
    var compDWidth=$("#table tr td").eq(7).innerWidth()-6;
    $("#myInputCompD").innerWidth(compDWidth+"px");
    $(document).ready(function(){
        $("#myInputCompD").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".compD").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    //Course last acces Date input filter
    var lastAccWidth=$("#table tr td").eq(8).innerWidth()-6;
    $("#myInputLastAccess").innerWidth(lastAccWidth+"px");
    $(document).ready(function(){
        $("#myInputLastAccess").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".lastAcc").filter(function() {
                $("#table tbody tr td").filter("[scope="+$(this).attr("scope")+"]").toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

});
