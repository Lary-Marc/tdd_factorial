

// using recursion method to calculate factorial
// class MathsService {
//     factorial(num) {
//         if (num < 0) 
//             return null
//         else if (num == 0) 
//             return 1;
//         else {
//             return (num * this.factorial(num - 1));
//         }
        
//     }
    
// };


 //using the for loop to calculate factorial
class MathsService {
    factorial(num) {
        if (num < 0) 
            return null
       
        else {
            let fact =1
            for(let i =num; i>=1; i--){
                fact=fact*i
                
            }
            return fact
        }
        
    }
    
};

maths = new MathsService()
console.log(maths.factorial(4))

module.exports = MathsService




