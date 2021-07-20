function randomDate() {
    let date = new Date();
    date.setDate(Math.floor(Math.random() * (30 - 1 + 1)) + 1);
    date.setMonth(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    date.setFullYear(Math.floor(Math.random() * (2000 - 1985 + 1)) + 1985);

    return date;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function pl(count, one, few, many) {
    if(count > 10 && count < 20 ){ return `${count} ${many}`; }
    else if(count % 10 == 1){ return `${count} ${one}`; }
    else if( count % 10 >= 2 && count % 10 <= 4 ){ return `${count} ${few}`; }
    else if( count % 10 >= 5 && count % 10 < 10 || count % 10 == 0){ return `${count} ${many}`; }
    return;
}

let employees = [];
employees.push(  {name:'Peter', birthday: new Date(randomDate().setMonth(6))  });
employees.push( {name:'Gordon', birthday: new Date(randomDate().setMonth(6))  });
employees.push(  {name:'Empl3', birthday: new Date(randomDate().setMonth(6))  });
employees.push(  {name:'Empl4', birthday: new Date(randomDate().setMonth(7))  });
employees.push(  {name:'Empl5', birthday: new Date(randomDate().setMonth(7))  });
employees.push(  {name:'Empl6', birthday: new Date(randomDate().setMonth(8))  });
employees.push(  {name:'Empl7', birthday: new Date(randomDate().setMonth(8))  });

function plan(emps, mounthAdder) {
    let plan = new Map();
    for(let mounth=0; mounth<1+mounthAdder; mounth++){
        let planDate = new Date( new Date().getFullYear(), new Date().getMonth() + mounth, 1);
        plan.set( 
            planDate, 
            emps.filter( (emp)=>{ return emp.birthday.getMonth() == planDate.getMonth()} )
        );
    }
    return plan;
}
function printPlan(planMap) {
    for (let [planDate, emps] of planMap){
        let dateString = planDate.toLocaleDateString('ru-RU', {month: "long", year: "numeric"}).split(" ");
        dateString[0] = capitalizeFirstLetter(dateString[0]);
        console.log( dateString.join(" ") );
        emps.forEach(emp => {
            console.log(`(${emp.birthday.getDate()}) \t- ${emp.name} (${pl(new Date().getFullYear() - emp.birthday.getFullYear(), "год", "года", "лет")})`);
        });
    }
}

printPlan(plan(employees, 2));