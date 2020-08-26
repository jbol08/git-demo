function calculateTaxes(income) {
    if (!Number.isFinite(income)){
        throw new Error ('bad income');
    }
    if (income > 30000) {
        return income * 0.25;
    }else {
        return income * 0.15;
    }
}  

function removeDupes(values) {
    return [...new Set(values)];
    }
    
function removeStringDupe(values) {
    const arr = [...new Set(values)]
    if (typeof values === 'string')
    return arr.join('');
    return arr;
}

function remove (arr,val){
    return arr.filter((el) => {
       return el !== val
    })
}


let usernames = [];
let input = document.getElementById('username');

function submitForm() {
    usernames.push(input.value)
}



