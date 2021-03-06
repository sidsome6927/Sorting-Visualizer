import React, {useState} from 'react'
import './left.scss';
import {insertionSort} from '../../Algorithms/insertion-sort'
import {mergeSort} from '../../Algorithms/merge-sort'
import {quickSort} from '../../Algorithms/quick-sort'
import { bubbleSort } from '../../Algorithms/bubbe-sort';
import {selectionSort} from '../../Algorithms/selection-sort';
import {heapSort} from '../../Algorithms/heap-sort';



function Left(
    {
    size,setsize,
    state,
    playing,setplaying,
    sethistory,
    setindex,
    setSpeed,
    })  {  

const [algo, setAlgo] = useState("");

function _handleChange(event){
    console.log(event.target.value + " selected");
    setAlgo(event.target.value);
}

const handleClick = () => {

    switch(algo){
       
        case "InsertionSort":{
            console.log("inside insertion switch");
            sethistory(insertionSort(state))
            setplaying(true);
            break;
        }
        case "MergeSort":{
            sethistory(mergeSort(state))
            setplaying(true);
            break;
        }
        case "QuickSort":{
            sethistory(quickSort(state))
            setplaying(true);
            break;
        }
        case "BubbleSort" : {
            sethistory(bubbleSort(state))
            setplaying(true)
            break;
        }
        case "SelectionSort" : {
            sethistory(selectionSort(state))
            setplaying(true);
            break;
        }
        case "HeapSort" : {
            sethistory(heapSort(state))
            setplaying(true)
            break;
        }

        default :{
            sethistory(insertionSort(state))
            setplaying(true);
        }
       
    }
    
 

}    

function updateSize(newSize){
  setsize(newSize); 
  console.log(newSize);
}


let timeOut;
function handleInputChange(e){
    if(timeOut !== undefined){
        clearTimeout(timeOut);
    }
    timeOut = setTimeout(()=>updateSize(e.target.value),500);
}

function handleSpeedChange(event){
    setSpeed(event.target.value);
}
    return (
        <div className='left'>
            <h1 >SORTING <br /> VISUALIZATION</h1>
            
            <div className="left__controler">

                <div>Input Size</div>
                <div> <input type='range' min='5' max='50'  onChange={handleInputChange} ></input> </div>

                <div>Sorting Algorithm</div>
                <div><select name="Sorting Algo" onChange={_handleChange}>
                       <option value="BubbleSort">Bubble Sort</option>
                       <option value="InsertionSort">Insertion Sort</option>
                       <option value="MergeSort">Merge Sort</option>
                       <option value="QuickSort">Quick Sort</option>
                       <option value="SelectionSort">Selection Sort</option>
                       <option value="HeapSort">Heap Sort</option>
                     </select>
                </div>

                <div>Speed</div> 
                <div>
                    <input type="range" id="vol" name="vol" min="200" max="1000" onChange = {handleSpeedChange}></input>
                </div>


            </div>

            <button onClick={handleClick} disabled={playing}>Start</button>
        </div>
    )
}



export default Left
