function div(a,b){
    var divResult = a/b;
    return divResult;
}

function product(a,b,c,d,e){
    var productResult = a*b*c*d*e;
    return productResult;
}

// console.log(div(5,2));
// console.log(product(5,2,3,1,4));

function check11(num){
    if(num%11==0){
        var result=  "divisible by 11";
    }else{
        var result=  "Not divisible by 11";
    }

    return result;
}

console.log(check11(22));

function sumeven(a,b){
    var sum=a+b;
    var result;
    if(sum%2==0){
        result="Doggo";
    }else{
        result="Catto";
    }

    return result;
}

console.log(sumeven(2,2));

//---Write a function that takes fruitnames ,if fruitname is apple return applejuice

// if the fruit is orange return not apple juice

function fruit(fruitnames){
    var msg="out of choise";
    if(fruitnames=="apple"){
        msg="applejuice";
    }
    if(fruitnames=="orange"){
        msg="not apple juice";
    }
    return msg;
}

console.log(fruit("orane"));