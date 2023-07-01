
document.getElementById("one").addEventListener("click", function(){
    var chillertr=parseFloat(document.getElementById("tr").value);
    var temperature= parseFloat(document.getElementById("temdif").value);
    var dia= parseFloat(document.getElementById("pipedia").value);
    var length= parseFloat(document.getElementById("pipelength").value);
    var y=parseInt(24);
    var z=parseInt(9);
    var requiredflow= ((y*chillertr)/(temperature*z));
    var head= (length*requiredflow*requiredflow*5.16) /(10*dia*dia*dia);
    document.getElementById("req1").innerHTML = 'Pump Should be selected with Min flow' + " "+requiredflow+ " "+ "GPM"+ " "+"and"+" "+'head'+' '+head+" "+"mtr";
});

document.getElementById("two").addEventListener("click", function(){
    var chillertr2=parseFloat(document.getElementById("tr2").value);
    var mulfactor=parseFloat(document.getElementById("mulfac").value);
    var temperature2= parseFloat(document.getElementById("temdif2").value);
    var dia2= parseFloat(document.getElementById("pipedia2").value);
    var length2= parseFloat(document.getElementById("pipelength2").value);
    var y2=parseInt(24);
    var z2=parseInt(9);
    var requiredflow2= ((y2*chillertr2*mulfactor)/(temperature2*z2));
    var head2= (length2*requiredflow2*requiredflow2*5.16) /(10*dia2*dia2*dia2);
    document.getElementById("req2").innerHTML = 'Pump Should be selected with Min flow' + " "+requiredflow2+ " "+ "GPM"+ " "+'head'+' '+head2;
});

document.getElementById("three").addEventListener("click", function(){
    var frequency=parseFloat(document.getElementById("hz").value);
    var rpm=parseFloat(document.getElementById("rpm").value);
    var output= (rpm*50/frequency);
  
    document.getElementById("req3").innerHTML = 'Pump Should be set at' + " "+output+ " "+ "Hz"+ " "+'to get required RPM';
});

document.getElementById("four").addEventListener("click", function(){
    var flow=parseFloat(document.getElementById("flow").value);
    var inlet=parseFloat(document.getElementById("inlet").value);
    var outlet=parseFloat(document.getElementById("outlet").value);

    var output= (flow*9*3024*(outlet-inlet)/24);
  
    document.getElementById("req4").innerHTML = 'Cooling tower should be selected with heat rejection capaity of' + " "+ output + " "+ "Kcal/hr";});

