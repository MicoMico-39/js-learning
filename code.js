
dineroCof= parseFloat(prompt("cuanto dinero tenes cof"));
dineroRob= parseFloat(prompt("cuanto dinero tenes rob"));
dineroPed= parseFloat(prompt("cuanto dinero tenes ped"));

// dineroCof= parseInt(dineroCof);
// dineroRob= parseInt(dineroRob);
// dineroPed= parseInt(dineroPed);


dineroCalc(dineroCof,"cof");
dineroCalc(dineroRob,"rob");
dineroCalc(dineroPed,"ped");


function dineroCalc(dinero,name){
   console.log(name+dinero);
    if(dinero>=0.6 && dinero<1){
        alert(`${name} comprate el helado de agua`);
        dinero-=0.6;
        alert(`te sobra ${dinero}`);
        console.log("dinero final"+dinero);
    }else if(dinero>=1 && dinero<1.6){
        alert(`${name} comprate el helado de helado1`);
        dinero-=1;
        alert(`te sobra ${dinero}`);
        console.log("dinero final"+dinero);
    }else if(dinero>=1.6 && dinero<1.7){
        alert(`${name} comprate el helado de helado2`);
        dinero-=1.6;
        alert(`te sobra ${dinero}`);
        console.log("dinero final"+dinero);
       
    }else if(dinero>=1.7 && dinero<1.8){
        alert(`${name} comprate el helado de helado3`);
        dinero-=1.7;
        alert(`te sobra ${dinero}`);
        console.log("dinero final"+dinero);
    }else if(dinero>=1.8 && dinero<2.9){
        alert(`${name} comprate el helado de helado4 o helado5`);
        dinero-=1.8;
        alert(`te sobra ${dinero}`);
        console.log("dinero final"+dinero);
    }else if(dinero>=2.9 ){
        alert(`${name} dineroo`)
    }else{
        alert(`${name} no tienes dinero suficiente`);
    }
}
