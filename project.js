
        var names = [];
        var vname = [];
        var vno = [];
        var enter = [];
        var exit = [];

        var modal = document.getElementById("myModal");
    var anjali=document.getElementById("display");

    anjali.style.display="none"
        var btn = document.getElementById("myBtn");
        btn.onclick = function() {
            anjali.style.display = "block";
    }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            anjali.style.display = "none";
    }
    function rs(){
        document.getElementById("new").reset();
    }
        var rowCount = 1;
        function addTasks() {

           alert("Successfully registered! You can check entered details by clicking on REGISTERED VEHICLES");
            names.push(document.getElementById("name1").value);
            vname.push(document.getElementById("name2").value);
            vno.push(document.getElementById("name3").value);
            enter.push(document.getElementById("name4").value);
            exit.push(document.getElementById("name5").value);
            var table = document.getElementById("tasksTable");
            var row = table.insertRow(rowCount);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = names[rowCount - 1];
            cell2.innerHTML = vname[rowCount - 1];
            cell3.innerHTML = vno[rowCount - 1];
            cell4.innerHTML = enter[rowCount - 1];
            cell5.innerHTML = exit[rowCount - 1];
            rowCount++;
        }
