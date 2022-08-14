const elementsValue = {
    row1: [{symbol: "H", group: "otrosNoMetales"}, {symbol: "He", group: "gasesNobles"}],
    row2: [{symbol: "Li", group: "alcalinos"}, {symbol: "Be", group: "alcalinoTerreos"}, {symbol: "B", group: "metaloides"}, {symbol: "C", group: "otrosNoMetales"}, {symbol: "N", group: "otrosNoMetales"}, {symbol: "O", group: "otrosNoMetales"}, {symbol: "F", group: "halogenos"}, {symbol: "Ne", group: "gasesNobles"}],
    row3: [{symbol: "Na", group: "alcalinos"}, {symbol: "Mg", group: "alcalinoTerreos"}, {symbol: "Al", group: "otrosMetales"}, {symbol: "Si", group: "metaloides"}, {symbol: "P", group: "otrosNoMetales"}, {symbol: "S", group: "otrosNoMetales"}, {symbol: "Cl", group: "halogenos"}, {symbol: "Ar", group: "gasesNobles"}],
    row4: [{symbol: "K", group: "alcalinos"}, {symbol: "Ca", group: "alcalinoTerreos"}, {symbol: "Sc", group: "metalesDeTransicion"}, {symbol: "Ti", group: "metalesDeTransicion"}, {symbol: "V", group: "metalesDeTransicion"}, {symbol: "Cr", group: "metalesDeTransicion"}, {symbol: "Mn", group: "metalesDeTransicion"}, {symbol: "Fe", group: "metalesDeTransicion"}, {symbol: "Co", group: "metalesDeTransicion"}, {symbol: "Ni", group: "metalesDeTransicion"}, {symbol: "Cu", group: "metalesDeTransicion"}, {symbol: "Zn", group: "metalesDeTransicion"}, {symbol: "Ga", group: "otrosMetales"}, {symbol: "Ge", group: "metaloides"}, {symbol: "As", group: "metaloides"}, {symbol: "Se", group: "otrosNoMetales"}, {symbol: "Br", group: "halogenos"}, {symbol: "Kr", group: "gasesNobles"}],
    row5: [{symbol: "Rb", group: "alcalinos"}, {symbol: "Sr", group: "alcalinoTerreos"}, {symbol: "Y", group: "metalesDeTransicion"}, {symbol: "Zr", group: "metalesDeTransicion"}, {symbol: "Nb", group: "metalesDeTransicion"}, {symbol: "Mo", group: "metalesDeTransicion"}, {symbol: "Tc", group: "metalesDeTransicion"}, {symbol: "Ru", group: "metalesDeTransicion"}, {symbol: "Rh", group: "metalesDeTransicion"}, {symbol: "Pd", group: "metalesDeTransicion"}, {symbol: "Ag", group: "metalesDeTransicion"}, {symbol: "Cd", group: "metalesDeTransicion"}, {symbol: "In", group: "otrosMetales"}, {symbol: "Sn", group: "otrosMetales"}, {symbol: "Sb", group: "metaloides"}, {symbol: "Te", group: "metaloides"}, {symbol: "I", group: "halogenos"}, {symbol: "Xe", group: "gasesNobles"}],
    row6: [{symbol: "Cs", group: "alcalinos"}, {symbol: "Ba", group: "alcalinoTerreos"}, {symbol: "La-Lu", group: "lantanidos"}, {symbol: "Hf", group: "metalesDeTransicion"}, {symbol: "Ta", group: "metalesDeTransicion"}, {symbol: "W", group: "metalesDeTransicion"}, {symbol: "Re", group: "metalesDeTransicion"}, {symbol: "Os", group: "metalesDeTransicion"}, {symbol: "Ir", group: "metalesDeTransicion"}, {symbol: "Pt", group: "metalesDeTransicion"}, {symbol: "Au", group: "metalesDeTransicion"}, {symbol: "Hg", group: "metalesDeTransicion"}, {symbol: "Tl", group: "otrosMetales"}, {symbol: "Pb", group: "otrosMetales"}, {symbol: "Bi", group: "otrosMetales"}, {symbol: "Po", group: "metaloides"}, {symbol: "At", group: "halogenos"}, {symbol: "Rn", group: "gasesNobles"}],
    row7: [{symbol: "Fr", group: "alcalinos"}, {symbol: "Ra", group: "alcalinoTerreos"}, {symbol: "Ac-Lr", group: "actinidos"}, {symbol: "Rf", group: "metalesDeTransicion"}, {symbol: "Db", group: "metalesDeTransicion"}, {symbol: "Sg", group: "metalesDeTransicion"}, {symbol: "Bh", group: "metalesDeTransicion"}, {symbol: "Hs", group: "metalesDeTransicion"}, {symbol: "Mt", group: "metalesDeTransicion"}, {symbol: "Ds", group: "metalesDeTransicion"}, {symbol: "Rg", group: "metalesDeTransicion"}, {symbol: "Cn", group: "metalesDeTransicion"}, {symbol: "Nh", group: "otrosMetales"}, {symbol: "Fi", group: "otrosMetales"}, {symbol: "Mc", group: "otrosMetales"}, {symbol: "Lv", group: "otrosMetales"}, {symbol: "Ts", group: "halogenos"}, {symbol: "Og", group: "gasesNobles"}],
    row8: [{symbol: "La", group: "lantanidos"}, {symbol: "Ce", group: "lantanidos"}, {symbol: "Pr", group: "lantanidos"}, {symbol: "Nd", group: "lantanidos"}, {symbol: "Pm", group: "lantanidos"}, {symbol: "Sm", group: "lantanidos"}, {symbol: "Eu", group: "lantanidos"}, {symbol: "Gd", group: "lantanidos"}, {symbol: "Tb", group: "lantanidos"}, {symbol: "Dy", group: "lantanidos"}, {symbol: "Ho", group: "lantanidos"}, {symbol: "Er", group: "lantanidos"}, {symbol: "Tm", group: "lantanidos"}, {symbol: "Yb", group: "lantanidos"}, {symbol: "Lu", group: "lantanidos"}],
    row9: [{symbol: "Ac", group: "actinidos"}, {symbol: "Th", group: "actinidos"}, {symbol: "Pa", group: "actinidos"}, {symbol: "U", group: "actinidos"}, {symbol: "Np", group: "actinidos"}, {symbol: "Pu", group: "actinidos"}, {symbol: "Am", group: "actinidos"}, {symbol: "Cm", group: "actinidos"}, {symbol: "Bk", group: "actinidos"}, {symbol: "Cf", group: "actinidos"}, {symbol: "Es", group: "actinidos"}, {symbol: "Fm", group: "actinidos"}, {symbol: "Md", group: "actinidos"}, {symbol: "No", group: "actinidos"}, {symbol: "Lr", group: "actinidos"}]
};

const ValidateRow1 = function(element){

    
    if(elementsValue.row1.length > element.length){
        elementsValue.row1.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row1.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow2 = function(element){

    
    if(elementsValue.row2.length > element.length){
        elementsValue.row2.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row2.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow3 = function(element){

    
    if(elementsValue.row3.length > element.length){
        elementsValue.row3.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row3.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow4 = function(element){

    
    if(elementsValue.row4.length > element.length){
        elementsValue.row4.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row4.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow5 = function(element){

    
    if(elementsValue.row5.length > element.length){
        elementsValue.row5.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row5.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow6 = function(element){

    
    if(elementsValue.row6.length > element.length){
        elementsValue.row6.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row6.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow7 = function(element){

    
    if(elementsValue.row7.length > element.length){
        elementsValue.row7.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row7.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow8 = function(element){

    
    if(elementsValue.row8.length > element.length){
        elementsValue.row8.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row8.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

const ValidateRow9 = function(element){

    
    if(elementsValue.row9.length > element.length){
        elementsValue.row9.forEach(object => {
            if(!element.find(item => item.symbol == object.symbol)){
                element.splice(elementsValue.row9.indexOf(object), 0, {symbol: "deleted", group: "deleted"});

                return element;
            }
        }) 
    } else {
        return element
    }

};

exports.ValidateRow1 = ValidateRow1;
exports.ValidateRow2 = ValidateRow2;
exports.ValidateRow3 = ValidateRow3;
exports.ValidateRow4 = ValidateRow4;
exports.ValidateRow5 = ValidateRow5;
exports.ValidateRow6 = ValidateRow6;
exports.ValidateRow7 = ValidateRow7;
exports.ValidateRow8 = ValidateRow8;
exports.ValidateRow9 = ValidateRow9;