//---------------------------------------------------------------------- crud oparetion with sepreted option ?

const input=require('readline-sync')
const f = require('fs')
const l=[]
const create=function(){
    if(f.existsSync("crudFile.json")){
        let newdata=(f.readFileSync("crudFile.json","utf-8"));
        let convert=JSON.parse(newdata)
        var ask=input.question("enter the email Id for check that it present or not : ")
        if(ask.includes("@")&&(ask.includes("."))){
            let check=true;
            for(let i in convert){
                if(convert[i]["Email"]===ask){
                    check=false;
                    console.log("Already present!!!!!")
                }
            }
            if(check){
                jsnData_fil_se_yaha=JSON.parse(newdata)
                console.log("!!!!!!!! No name is found please register yourself first!!!!!!!!!1")
                const biodata={
                    Email:ask,
                    password:input.question("enter your password : "),
                    Name:input.question("enter your name  : "),
                    city:input.question("enter your city : ")

                }
                jsnData_fil_se_yaha.push(biodata)
                let m=JSON.stringify(jsnData_fil_se_yaha,null,3) 
                f.writeFileSync("crudFile.json", m)
                console.log("Successfully registered.")
            }
        }
        else{
            console.log("please enter valid email id.")
        }
    }     
    else{
        f.writeFileSync("crudFile.json", JSON.stringify(l))
        signup()
    }      

}

const login = function(){
    let READ=JSON.parse(f.readFileSync("crudFile.json","utf-8"));
    let EmailID=input.question("enter registered the Email Id : ")
    let pass=input.question("enter registered password : ")
    let check=true;
    for(let i in READ){
        if((READ[i]["Email"]===EmailID) && (READ[i]["password"]===pass)){
            check=false;
            console.log('login')
        }
    }
    if(check){
        console.log("Didn't match...?")
    }
}

const Delet =function(){
    let READ=JSON.parse(f.readFileSync("crudFile.json","utf-8"));
    let dataCheck=input.question("enter registered the Email : ")
    for(let i in READ){
        if(READ[i]["Email"]===dataCheck){
            READ.splice(i,1)
            // let read1=JSON.stringify(READ,null,3)
            // f.writeFileSync("crudFile.json",read1)
        }
    }

}

while(true){
    console.log('1] Creat user\n2] login\n3] Update user\n4] Delet sere\n5] Exit')
    let a=parseInt(input.question("Enter your option :"))
    if (a===1){
        create();
    }
    else if(a===2){
        login();
    }
    else if (a===3){
        Update();
    }
    else if (a===4){
        Delet()
    }
    else if (a===5){
        console.log('you are going out of your crud operation.')
        break
    }
}

// ----------------------------------------------------------------------------------- crud oparetion without (json / text) file .

const create=function(){
    let name=input.question('enter user name :')
        let mail=input.question('enter mail ID :')
        let pass=input.question('enter password :')
        data={
            Name:name,
            Mail:mail,
            Pass:pass
        }
        all_data.push(data)

}


const Update=function(){
    let check=input.question('Enter user Name :')
        for(let s=0; s<all_data.length; s++){
            if(check==all_data[s]['Name']){
                let newM=input.question('Enter New Mail ID :')
                let newP=input.question('Enter new password :')
                all_data[s]['Mail']=newM
                all_data[s]['Pass']=newP
                break  
            }
            if (!all_data.includes(all_data[s]['Name'])&& s==all_data.length-1){
                console.log('This user does not exist ')
                break
            }
        }
    
}

const Delet=function(){
    let check=input.question('Enter user Name :')
        for(let s=0; s<all_data.length; s++){
            if(check==all_data[s]['Name']){
                all_data.splice(s,1)
                break  
            }
            if (!all_data.includes(all_data[s]['Name'])&& s==all_data.length-1){
                console.log('This user does not exist ')
                break
            }
        }

}


const input=require('readline-sync')

const all_data=[]
while(true){
    console.log('1] Creat user\n2] Read usrer\n3] Update user\n4] Delet sere\n5] Exit')
    let a=parseInt(input.question("Enter your option :"))
    if (a===1){
        create()
    }
    else if(a==2){
        console.log(all_data)
    }
    else if (a==3){
        Update()
    }
    else if (a==4){
        Delet()
    }
    else if (a==5){
        console.log('you are going out of your crud operation.')
        break
    }
}

// ------------------------------------------------------------------- crud oparetion with one single function .

const fs=require("fs");
var inp=require('readline-sync');
const l=[]
function choose(){
    let select=inp.questionInt("press 1 for signup\npress 2 for login\npress 3 for delete the data\npress 4 for update\npress 5 for exit\nenter : ")
    if(select===1){
        return signup();
    }else if(select===2){
        return login();
    }else if(select===5){
         return ex();
    }else if(select===3){
        return DELETE();
    }else if(select===4){
        return Update();
    }
    function signup(){
        if(fs.existsSync("file.json")){
            let newdata=(fs.readFileSync("file.json","utf-8"));
            let convert=JSON.parse(newdata)
            var ask=inp.question("enter the email Id for check that it present or not : ")
            if(ask.includes("@")&&(ask.includes("."))){
                let check=true;
                for(let i in convert){
                    if(convert[i]["userId"]===ask){
                        check=false;
                        console.log("Already present!!!!!")
                    }
                }
                if(check){
                    jsnData_fil_se_yaha=JSON.parse(newdata)
                    console.log("!!!!!!!! No name is found please register yourself first!!!!!!!!!1")
                    const biodata={
                        userId:ask,
                        name:inp.question("enter the name : "),
                        city:inp.question("enter the city : "),
                        language:inp.question("enter the language : ")

                    }
                    jsnData_fil_se_yaha.push(biodata)
                    let m=JSON.stringify(jsnData_fil_se_yaha,null,3) 
                    fs.writeFileSync("file.json", m)
                    console.log("!!!!!!!!!! Successfully registered !!!!!!!!!!!")
                    choose()
                }
            }
            else{
                console.log("!!!!!!! please enter valid email id !!!!!!!!!!!!")
                choose()
            }
        }     
        else{
            fs.writeFileSync("file.json", JSON.stringify(l))
            signup()
        }
    }
    function ex(){
        console.log("existed!!!!!!!!!")
    }
    function login(){
        let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
        let dataCheck=inp.question("enter registered the Id : ")
        let check=true;
        for(let i in READ){
            if(READ[i]["userId"]===dataCheck){
                check=false;
                console.log(READ[i])
                choose()
            }
        }
        if(check){
            console.log("Didn't match!!!!!!!!!!")
            choose()
        }
    }
    function DELETE(){
        let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
        let dataCheck=inp.question("enter registered the name : ")
        for(let i in READ){
            if(READ[i]["userId"]===dataCheck){
                READ.splice(i,1)
                let read1=JSON.stringify(READ,null,3)
                fs.writeFileSync("file.json",read1)
            }
        }

    }

    function Update(){
        let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
        let dataCheck=inp.question("enter registered the id : ")
        for(let i in READ){
            if(READ[i]["userId"]===dataCheck){
                READ.splice(i,1)
                console.log("deleted!!!!!!!")
                const biodata={
                    userID:dataCheck,
                    name:inp.question("enter the name : "),
                    city:inp.question("enter the city : "),
                    language:inp.question("enter the language : ")

                }
                READ.push(biodata)
                let biodataTojson=JSON.stringify(READ,null,3);
                fs.writeFileSync("file.json",biodataTojson)

            }else{
                console.log("didn't match !!!!!1 ")
            }
        }
    }
}
choose();