export const fruitMixin = {
    data(){
        return {
            fruites: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed:{
        filteredFruites(){
            return this.fruites.filter((el) =>{
                return el.match(this.filterText);
            })
        }
    }
};