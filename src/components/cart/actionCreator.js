export default {
    addAction(p){
        return {
            type:"ADD",
            p
        }
    },
    comput(n,id){
        return {
            type:'COMPUT',
            n,
            id
        }
    },
    remove(id){
        return {
            type:'DEL',
            id
        }
    }
}