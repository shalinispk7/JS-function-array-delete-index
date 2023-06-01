// Delete index element
// let arr=[1,5,7,34,56];
// let userVal=parseInt(prompt("Enter Index value"));
// function duplicate(arr,userVal){
	// let result=[];
	// for(i=0;i<arr.length;i++){
		// let exists=false; //flag //booolean variable  
			// for(j=0;j<result.length;j++){
				// if(arr[i]===userVal){
					// exists=true;
					// break;
				// }
			// }
			// if(!exists){
				// result.push(arr[i]);
			// }
		// }
		// return result;
// }
// document.write("The elements in array are: "+arr+" <br>")
// document.write("Deleted Index elements "+duplicate(arr,userVal));

// Delete index element 

let arr=[0,1,2,2,4,5];
let user=parseInt(prompt("Enter the index value"))

function deleteIndex(arr,user){
let result=[];
	for(i=0;i<arr.length;i++){
  	if(i!=user){
    	result.push(arr[i])
    }
  }
  return result; 
}
document.write("The elements in the array are: "+arr+"<br>")
document.write("User index value "+user+"<br>")
document.write("Deleted index value "+deleteIndex(arr,user))



