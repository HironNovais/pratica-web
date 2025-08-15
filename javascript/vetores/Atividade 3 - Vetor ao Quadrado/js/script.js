function procFormulario(){
    console.clear()
    let arr = []
    let i = 1

    while(arr.length < 11){
        arr[i] = i * i
        console.log(arr[i])
        i++
    }
    return false;
}