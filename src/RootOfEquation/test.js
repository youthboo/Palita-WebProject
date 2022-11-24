const func = (x) =>{
    var tmp;
    tmp = (x*x*x*x)-13;
    return tmp;
}

var xl=1.5;
var xr=2.0;
var xm=1000000;
var err=0.000001;
var check=0,check_xm,check_xr;

while(Math.abs(xm-check)>=err){
    check = xm;
    xm = (xl+xr)/2;
    check_xm = func(xm);
    check_xr = func(xr);
    if(check_xm*check_xr>0){
        xr = xm;
    }
    else{
        xl = xm;
    }
    console.log(xm);
}

console.log(xm);

