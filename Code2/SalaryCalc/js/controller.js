window.addEventListener("load",bindEvents);
function bindEvents(){
    var button = document.querySelector("#compute");
    button.addEventListener("click",computeSalary);
}
function computeSalary(){
    // Taking Input
    var basicSalary = document.querySelector("#basicsalary").value;
    // Print Output and Calling Logic
    salaryOperations.takeSalary(basicSalary);
    print();
}

function print(){
     for(let key in salaryOperations){
	    if(key=='basicSalary' || key=='takeSalary'){
	    continue;    
    }
    document.querySelector("#"+key).innerText = salaryOperations[key]();
	
}
}

   

    //document.querySelector("#"+id).innerText =  salaryOperations.fn()
    /*document.querySelector("#hra").innerText = salaryOperations.hra();
     document.querySelector("#da").innerText = salaryOperations.da();
      document.querySelector("#ta").innerText = salaryOperations.ta();
       document.querySelector("#pf").innerText = salaryOperations.pf();
        document.querySelector("#gs").innerText = salaryOperations.gs();
        document.querySelector("#tax").innerText = salaryOperations.tax();
        document.querySelector("#ns").innerText = salaryOperations.ns();*/
        
                

        
        




