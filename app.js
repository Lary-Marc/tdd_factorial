



module.exports = class MathsService {
    factorial(num) {
        if (num < 0) 
            return -1
        else if (num == 0) 
            return 1;
        else {
            return (num * this.factorial(num - 1));
        }
    }
};


// 5!=5(5-1)(5-2)(5-3)(5-4)
// 5!=5*4*3*2*1
   
// 7!=7*6*5*4*3*2*1