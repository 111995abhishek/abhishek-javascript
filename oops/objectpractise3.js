var user = {
    name:"abhishek"
}

var permission1 = {canView : true};
var permission2 = {canEdit:true};

Object.assign(user,permission1,permission2);

console.log(user);


