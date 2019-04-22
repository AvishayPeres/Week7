class UniqueArray {
    constructor() {
        this.arr = []
        this.length = 0
        this.obj = {}
    }

    _isPrimitive(item) {
        return (item !== Object(item))
    }

    add(item) {
        if(this._isPrimitive) {
            if(!this.exists(item)) {
                this.arr[this.length] = item
                this.length++
                this.obj[item] = 1
            }
        }
    }

    showAll() {
        console.log(this.arr)
    }

    exists(item) {
        if(this.obj[item]){
            return true
        } else {
            return false
        }
    }

    get(index) {
        if(index <= (this.length - 1)){
            return this.arr[index]
        } else {
            return -1
        }
    }

}

const uniqueStuff = new UniqueArray()

uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"