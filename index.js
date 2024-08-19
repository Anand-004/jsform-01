function prod(){
    alert("calculating")
    var no1=document.getElementById("input1").value
    var no2=document.getElementById("input2").value
    var product=parseInt(no1)+parseInt(no2)
    document.getElementById("res").innerHTML=product

}

function getyear(str1){
    let year = str1.slice(0,4)
    var byear=Number(year)
    return byear
}

function calcage(b_year1){
    const d = new Date()
    let cur_year=d.getFullYear()
    let age=parseInt(cur_year)-parseInt(b_year1)
    return parseInt(age)

}

function bioData(){
    var name1 =document.getElementById("fname").value
    var name2 =document.getElementById("sname").value
    var fname=name1+" "+name2
    var drno =document.getElementById("dno").value
    var str =document.getElementById("st").value
    var lam =document.getElementById("lm").value
    var dt =document.getElementById("dt").value
    var pinc =document.getElementById("pin").value
    var pl =document.getElementById("place").value
    var adrs= drno+" "+str+"\n"+lam+" "+pl+"\n"+dt+" -"+pinc
    var dat =document.getElementById("date").value
    var b_year=getyear(dat)
    var age=calcage(b_year)
    // console.log(typeof(b_year))



    document.getElementById("fullname").innerHTML=fname
    document.getElementById("addr").innerHTML=adrs
    document.getElementById("dob").innerHTML=age
    // const d=new Date()
    // console.log(d)



}