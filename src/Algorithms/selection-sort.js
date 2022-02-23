export const selectionSort = (state) => {
    let history = [];
    const arr = state.map((objarr) => objarr);

    history.push(
        arr.map( obj => {
            return {...obj}
        })
    );
    for(var i=0;i<arr.length()-1;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            arr[i].color = 'white';
            arr[j].color = 'white';
            if(arr[j] < arr[i])
            {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return history;
}