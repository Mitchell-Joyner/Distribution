const Queue = function(){
    let list = [];
    let size = 0;

    function enqueue(item){
        let last = size;
        list[last] = item;
        size++;
    }
    function dequeue(){
        if(isEmpty()){
            return undefined;
        }
        var x = list[0];
        for(let c=0;c<size;c++){
            list[c]=list[c+1];
        }
        size--;
        return x;
    }
    function getSize(){
        return size;
    }
    function isEmpty(){
        if(size==0){
            return true;
        }
        return false;
    }
    function print(){
        if(!isEmpty()){
            for(let c=0;c<size;c++){console.log(list[c]);}
        }
        else {
            console.log("empty queue");
        }
    }

    return {enqueue,dequeue,isEmpty,getSize,print};
};
module.exports = Queue;
