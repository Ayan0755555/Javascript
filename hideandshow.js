
                                        //<--DOCUMENTS OBJECT MODEL-->//                                       
 /*Q1- You have a documents and that has one paragraph that is important for some of your audience but useless for the rust.
 You want to ensure that your users get to choose if they want to hide or see the paragraph*///-->hide and show-->
 function toggleVisibility(){
    var paragraph=document.getElementById('useless');
    if(paragraph.style.display=='none'){
        paragraph.style.display="block";
    }else{
        paragraph.style.display='none';
    };
 };

/*Q2->if number generator is negative,show cold or else hat in a new div be low the number generator*/
function displayRandomNumber(){
    let randomNumber=Math.floor(Math.random()*41)-20;
    document.getElementById('num').innerHTML=randomNumber;
    console.log(randomNumber);
    if(randomNumber>1){
        document.getElementById('nurr').innerHTML='Hot'
    }else{
        document.getElementById('nurr').innerHTML="Cold"
    }
}