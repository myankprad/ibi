const arr = [1, 2, 3, 4, 5]

const reverse = arr.reduce((res, curr)=>{
    return [curr, ...res]
}, [])
 console.log(reverse)