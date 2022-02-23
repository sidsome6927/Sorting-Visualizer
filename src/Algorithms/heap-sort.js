export const heapSort = (state) => {
    let history = [];
    const arr = state.map((objarr) => objarr);

    history.push(
        arr.map( obj => {
            return {...obj}
        })
    );
    heap_sort(arr);

}
const max_heapify= (n,i,arr,history) => {
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && arr[l].value>arr[largest].value)
    {
        if(largest!=i)
        {
            arr[largest].color = '#293451';
            history.push(
                arr.map( obj => {
                    return {...obj}
                })
            );
        }

        largest=l;

        arr[largest].color = '#DC143C';
        history.push(
            arr.map( obj => {
                return {...obj}
            })
        );
    }

    if(r<n && arr[r].value>arr[largest].value)
    {
        if(largest!=i)
        {
            arr[largest].color = '#293451';
            history.push(
                arr.map( obj => {
                    return {...obj}
                })
            );
        }

        largest=r;

        arr[largest].color = '#DC143C';
        history.push(
            arr.map( obj => {
                return {...obj}
            })
        );
    }

    if(largest!==i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
    }
    const swap =(i,j,arr,history) => {
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    const heap_sort = (arr) => {
    for(var i=Math.floor(arr.size/2)-1;i>=0;i--)
    {
        max_heapify(arr.size,i);
    }

    for(var i=arr.size-1;i>0;i--)
    {
        swap(0,i);
        max_heapify(i,0);
    }
}