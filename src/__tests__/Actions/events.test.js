const add =(a,b)=> a+b;

test("add",()=>{
const result = add(3,5);
expect(result).toBe(8);
})
