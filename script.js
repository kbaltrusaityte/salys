


var users = [
    {name: "Prancūzija", plotas: 551695, žmonių: 67.87},
    {name: "Ispanija", plotas: 505990, žmonių: 47.45},
    {name: "Anglija", plotas: 130395, žmonių: 56.48},
    {name: "Portugalija", plotas: 92212, žmonių: 10.34},
    {name: "Sakartvelas", plotas: 69700, žmonių: 4.01}
];

function plotasGyventojui(žmonių, plotas, žmogui){

    var žmogui = x.plotas / x.žmonių

    console.log("Šalis: " + x.name + ", joje gyvena " + x.žmonių + " mln. gyventojų.")
    console.log("Valstybės plotas: " + x.plotas + " km²" + ", plotas tenkantis vienam gyventojui: " + žmogui.toFixed(2) + "m²")
    console.log("=======")
}

for(var x of users){
    plotasGyventojui(x.name, x.žmonių, x.plotas, x.žmogui)
  }

