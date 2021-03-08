var emp = {
    name: "jack",
    salary: 606060,
    city: "bangalore",
    get empcity(){
        return this.city;
    },
    get empname() {
        return this.name;
    }
};
emp.empcity = "mangalore";
console.log(emp.city);
