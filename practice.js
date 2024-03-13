                                        //arr forEach mein array return nhi hota

let arr=[1,2,3,4,5,6];
arr.map(function(el){
    console.log(el);
});

                                            //map me return hota hai

const users=[
    {id:1,name:"ajay",isActive:true,age:20},
    {id:2,name:"ay",isActive:true,age:18},
    {id:3,name:"ajayan",isActive:true,age:22},
];

const names=users.map((user)=>{
 return user.name
});
console.log(names)

                                    //filter mein sabko filter kara jata hai=filter


//Write code to get an array of names from given array of users. 1-using filter and map 2-using only maps

const  news=[
    {id:1,name:"ajay",isActive:true,age:20},
    {id:2,name:"ay",isActive:true,age:18},
    {id:3,name:"ajayan",age:22},
];
const subhan=news.filter((el)=>{
   return el.isActive;
})
console.log(subhan);



//Create a new array using the map function whose each element is equal to the orignal element plus 5;
let numbers=[1,2,3,4,5,6,7];
const num=numbers.map((el)=>{
    return el+5;    //el+5 means 1+5=6, 2+5=7, 3+5=8  ....etc simular things
})
console.log(num)//output-6,7,8,9,10,11,12



//marks to percentage in maps

let students=[
    {
        name:"ayan",
        marks:98
    },
    {
        name:"ayan",
        marks:94
    },
    {
        name:"ayan",
        marks:99
    },
    {
        name:"ayan",
        marks:98
    },
];
const study=students.map((el)=>{
    return el.marks/3;
})
console.log(study)



                                        //Lets start filter-2 se divide array nikalo
let filterArr=[1,2,3,4,6,13,5,7,8,9];
let king=filterArr.filter((el)=>{
  return el%2==0;
});
console.log(king); //output 2,4,6,8


//Q1->Remove all the names starting with vowels from the list.Use array.filter
const States=["Andhra pradesh","U.P","Delhi","Mumbai","karnataka","Tamil nadu","Kerala","Goa","Telengana","Gujarat"];
const hey=States.filter((el)=>{
    let heyer=el[0]
    return!['A','E','I','O','U'].includes(heyer)
})
console.log(hey);


//inputArr=[1,2,3,9,10,7,5,4,3] answer=[9,10,7]
//user.array filter and return number greater than 5
const inputArr=[1,2,3,9,10,7,5,4,3];
const inpArr=inputArr.filter((el)=>{
    return el>5;
});
console.log(inpArr);




                                            //Started with every and some//->true or false
 //every->jisme(2,4,6)=woh true, 1,2,3 false
  //some->jisme(2,4,6)=woh false, 1,2,3 true



                                             //->Reduce<-//(res,el)->two arguments in reduce
let nums=[1,2,3,4];
let finalVal=nums.reduce((res,el)=>{
    return res+el;//Sabko ek sath jod diya jata hai like 1+2+3+4=10
});
console.log(finalVal)//output->10


//Q1->Finding maximaum in array
let kats=[2,4,6,8,10,11,1,2,3,44];
let ew=kats.reduce((res,el)=>{
    if(res<el){
        return el;
    }else{
        return res;
    }
});
console.log(ew);  //output 44

//Q2->Check if all number in our array minimum.
let natos=[10,20,30,40,50,60,70,80,90];
let pp=natos.reduce((res,el)=>{
  if(res>el){
    return el;
  }else{
    return res;
  }
});
console.log(pp);


                                   //Spread
 let arr2=[1,2,3,4,5,6,7,8,9];
 console.log(...arr2);

 let varser=[2,3,4,6,];
 let pare=[5,8,0,8,8,0];
let newsj=[...varser,...pare]
 console.log(newsj);

 const data={
    email:"ayanhyoljhghhj@hmail.com",
    password:665467
 }
 const dataCopy={...data, id:123, country:"india",state:'u.p'};
 console.log(dataCopy);


                                //Default parameters
 function sum(a,b=3){
    return a+b;
 }
 let her=sum(2);
 console.log(her);


                            //Rest
function min(){
    console.log(arguments);
    console.log(arguments.length);

}
min(); //output-0;

                        //Destructing
let namesd=['tony','bruce','steve','peter'];
let[winner,runnerup]=namesd
console.log(winner,runnerup); //output-tony,bruce

const student={
  name:"happy",
  class:8,
  age:14,
  username:"happy@123",
  password:1234,
}
const{username:user,password:pass}=student;
console.log(user,pass)//output-> happy@123, 1234

                    //setTimeout
setTimeout(()=>{
    console.log('system happy');

},4000)

                //setInterval
//setInterval(()=>{
    //console.log("what????")
//},10000);

                //clearInter
let id=setInterval(()=>{
console.log("what????")
},1000);
clearInterval(id)//stop setinterval


       //promises
function savetodb(data){
    return new Promise((resolve,reject)=>{
        let internatspeed=Math.floor(Math.random()*10)+1;
        if(internatspeed>4){
            resolve('save to db');
        }else{
            reject('failure the data');
        }
    })
}
let bo=savetodb(data);
console.log(bo);

              //async-await--->return promises
const callApi=async()=>{
    const res=await fetch("http://example.com/movies.json");
    const data=await res.json();
    console.log(data)
}
callApi();









                                     


        