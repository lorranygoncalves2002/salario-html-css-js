function calcular(){
    s=parseFloat(document.getElementById("sa").value);
    if(s<=1280){
        p=(20);
        a= (s*p)/100;
        sn=(s+a);
    }
    else if(s<1700) {
        p=(15);
        a=(s*p)/100;
        sn=(s+a)
    }
    else if(s<2500){
        p=(10);
        a=(s*p)/100;
        sn=(s+a);
    }
    else if(s>=2500){
        p=(5);
        a=(s*p)/100;
        sn=(s+a);
    }
        
   document.getElementById("p").value=p;
   document.getElementById("v").value=a;
   document.getElementById("sn").value=sn; 
  
        
}