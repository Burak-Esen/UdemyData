//const axios = require('axios');
// Make a request for a user with a given ID

axios.get('http://socialnet.mooo.com/eu.php')
.then(function (response) {
    // handle success
    //alert(my_data.data.results);
    let res=response.data.results;
    let nameArray=[];
    for(var i=0 ; i<res.length ; i++ ){
        var row=document.createElement("tr");

        //push names to name array if it not pushed before. 
        if(!(nameArray.includes(res[i].user_name+" "+res[i].user_surname))){
            nameArray.push(res[i].user_name+" "+res[i].user_surname);
        }

        var c_name=document.createElement("td");
        var name=document.createTextNode(res[i].user_name+" "+res[i].user_surname);
        c_name.className="user-name";
        c_name.scope=""+(i+1);
        c_name.appendChild(name);
        row.appendChild(c_name);
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
        row.style.display="none";
        document.querySelector("table tbody").appendChild(row);
        
    }
    //adding names to selection option
    nameArray.sort();
    for(var i=0; i<nameArray.length;i++){
        $("#inputGroupSelect01").append("<option>"+nameArray[i]+"</option>");
    }

    //name change listener and change display
    let oldSelection;
    $("#inputGroupSelect01").change(function(){
        for(var i=0;i<$("#table tbody tr").length;i++){
            if($("#table tbody tr .user-name").eq(i).text()===oldSelection){
                $("#table tbody tr").eq(i).hide();
            }
        }

        var selectedName=$(this).children("option:selected").val();
        oldSelection=selectedName;

        for(var i=0;i<$("#table tbody tr").length;i++){
            if($("#table tbody tr .user-name").eq(i).text()===selectedName){
                $("#table tbody tr").eq(i).show();
            }
        }
    });
});