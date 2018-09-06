const salaryOperations = {
    basicSalary : 0,
    takeSalary(basicSalary){
        this.basicSalary = parseFloat(basicSalary);
    },
     hra(){
    return this.basicSalary * 0.3;
    },
 da(){
    return this.basicSalary * 0.2;
    },
 ta(){
    return this.basicSalary * 0.1;
    },
 pf(){
    return this.basicSalary * 0.05;
    }, 
gs(){
    return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
    },
 tax(){
    return this.gs() * 0.10;
    },
 ns(){
    return this.gs() - this.tax();
    }

}