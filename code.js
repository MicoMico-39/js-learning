
dineroCof= prompt("cuanto dinero tenes cof");
dineroRob= prompt("cuanto dinero tenes rob");
dineroPed= prompt("cuanto dinero tenes ped");

dineroCof= parseInt(dineroCof);
dineroRob= parseInt(dineroRob);
dineroPed= parseInt(dineroPed);


dineroCalc(dineroCof,"cof");
dineroCalc(dineroRob,"rob");
dineroCalc(dineroPed,"ped");


function dineroCalc(dinero,name){
   
    if(dinero>=0.6 && dinero<1){
        alert(`${name} comprate el helado de agua`);
        alert(`te sobra ${dinero-0.6}`);
    }else if(dinero>=1 && dinero<1.6){
        alert(`${name} comprate el helado de helado1`);
        alert(`te sobra ${dinero-1}`);
    }else if(dinero>=1.6 && dinero<1.7){
        alert(`${name} comprate el helado de helado2`);
        alert(`te sobra ${dinero-1.6}`);
    }else if(dinero>=1.7 && dinero<1.8){
        alert(`${name} comprate el helado de helado3`);
        alert(`te sobra ${dinero-1.7}`);
    }else if(dinero>=1.8 && dinero<2.9){
        alert(`${name} comprate el helado de helado4 o helado5`);
        alert(`te sobra ${dinero-1.8}`);
    }else if(dinero>=2.9 ){
        alert(`${name} dineroo`)
    }else{
        alert(`${name} no tienes dinero suficiente`);
    }
}
