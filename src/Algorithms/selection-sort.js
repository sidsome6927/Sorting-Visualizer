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
            history.push(
                arr.map((a)=>{
                   return {...a};
                } )
              )
            if(arr[j].value < arr[i].value)
            {
                arr[j].color ='#DC143C';    
                arr[i].color ='#DC143C';
                history.push(
                    arr.map((a)=>{
                       return {...a};
                    } )
                   )
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            else
            {
                arr[i].color ='#32CD32';   
                arr[j].color ='#32CD32';
                history.push(
                    arr.map((a)=>{
                      return {...a};
                    } )
                   );
            }
            arr[i].color ='#293451';  
            arr[j].color ='#293451';
            history.push(
             arr.map((a)=>{
          return {...a};
       } )
      );
        }
    }
    history.push(
        arr.map((a)=>{
           return {...a, color : "#32CD32"};
        } )
   )
    history.push(
        arr.map((a)=>{
           return {...a};
        } )
   )
    return history;
}