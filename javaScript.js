//get model
let model=document.getElementById('simpleModel');
//get button
let modelBtn=document.getElementById('modelBtn');
// get close button
let closeBtn=document.getElementsByClassName('closeBtn')[0];

modelBtn.addEventListener('click',openModel);

closeBtn.addEventListener('click',closeModel);

window.addEventListener('click',outSideModel);

function openModel(){
    model.style.display='block';
}
function closeModel(){
    model.style.display='none';
    
}

function outSideModel(e){
    if(e.target==model){
        model.style.display='none';
        
    }
}