let obj = {
    firstnName: 'Abhay',
    lastName: 'Abhay',
    address: '',
    printValue: function(){
       console.log(this.firstnName)
    }
}
obj.printValue();