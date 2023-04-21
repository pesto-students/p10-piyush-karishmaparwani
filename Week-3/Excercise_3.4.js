function createStack() { 
    let items = [];
    function push(item){
        items.push(item);
    }
    function pop() {
        return items.pop();
    }
    return {
        push,
        pop
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); 