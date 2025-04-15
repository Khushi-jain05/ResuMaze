function addNewWeField(){
    // console.log("adding")
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter Here')
    let weOb=document.getElementById('we')
    let weAddButtonOb=document.getElementById('weAddButton')  

    weOb.insertBefore(newNode,weAddButtonOb)

}
function addNewAQField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter Here')
    let aqOb=document.getElementById('aq')
    let aqAddButtonOb=document.getElementById('aqAddButton')  

    aqOb.insertBefore(newNode,aqAddButtonOb)

}
function generateCV(){
//    console.log('tufdg')
    let nameField=document.getElementById('nameField').value
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField
    document.getElementById('nameT2').innerHTML=nameField
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value
    document.getElementById('linkT').innerHTML=document.getElementById('linkField1').value
    document.getElementById('linkT1').innerHTML=document.getElementById('linkField2').value
    document.getElementById('linkT2').innerHTML=document.getElementById('linkField3').value
//Objective
document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value
let wes=document.getElementsByClassName("weField")
let str=""
for (let e of wes){
    str=str+`<li>${e.value}</li>`
}
document.getElementById('weT').innerHTML=str
let aqs=document.getElementsByClassName("aqField")
let str1=""
for (let a of aqs){
    str1=str1+`<li>${a.value}</li>`
}
document.getElementById('aqT').innerHTML=str1
let file=document.getElementById('imgField').files[0]
console.log(file)
let reader=new FileReader() 
reader.readAsDataURL(file)
console.log(reader.result)
 reader.onloadend =function(){
document.getElementById('imgTemplate').src=reader.result
 }

document.getElementById('cv-form').style.display="none"
document.getElementById('cv-template').style.display="block"

}
function printCV(){
window.print()
}
