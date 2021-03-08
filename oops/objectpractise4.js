//if  two objects have same property than the value of the property is overwritten
var user = {
    name:"abhishek"
}
var loggedInUser = {name:"singh"};
var permission1 = {canView : true};
var permission2 = {canEdit:true};

Object.assign(user,loggedInUser,permission1,permission2);

console.log(user);
