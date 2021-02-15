const express  = require('express')
const body = require('body-parser')
const app = express()
app.use(body())

app.get('/',(req,res)=>{
    res.send("okay")
})
const PORT = process.env.PORT || 7500
app.listen(PORT,console.log("Server is running"))


//================================================Time from 12 hrs to 24 hrs========================================================
// var s = '12:40:22AM'

// var A = s.split(':')[0]
// console.log(s);
// if(A === '12'){
//     s = `00:${s.slice(3,10)}`
//     console.log(s);
// }
// console.log(s.slice(8,10));
// switch (s.slice(8,10)) {
//     case 'AM':
//         console.log(s.slice(0,8));
//         return s.slice(0,8)
//         break;
//         case 'PM':
//             console.log(`${parseInt(s) + 12}:${s.slice(3,8)}`);
//         return `${parseInt(s) + 12}:${s.slice(3,8)}`
//          break;

//     default:
//         break;
// }
//=======================================================================================================================================


//==============================================Array swap==========================================================================
//var arr = [ 2,3,1]
// var arr1 = arr.slice()
// var arr3 = arr.slice()
// arr.sort((a,b)=>a-b)
// var arr2 =  arr.slice().reverse()
// var count = [0,0]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== arr1[i]){
// arr1.splice(i, 1, arr1.splice(arr1.indexOf(arr[i]), 1, arr1[i])[0]);
//         count[0]=count[0]+1
//     }
//     if(arr2[i] !== arr3[i]){
// arr3.splice(i, 1, arr3.splice(arr3.indexOf(arr2[i]), 1, arr3[i])[0]);
//         count[1]=count[1] +1
//     }
// }
// count.sort((a,b)=>a-b)
// console.log(count);
// return count[0]
//========================================================================================================================================




