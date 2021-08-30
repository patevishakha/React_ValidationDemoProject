import  "./SubmitButton.css";
import { useState } from "react";
import ErrorPopup from "./ErrorPopup";


const SubmitButton =(props)=>{
 
    const [nameInput, setNameInput] = useState('');  //name state
    const [ageInput, setAgeInput] = useState('');   //age state
    const [error, setError] = useState(''); //error state handling
   
    const onSubmittingValues=(event)=>{
        event.preventDefault();
        if(nameInput.trim().length===0 && ageInput.trim().length===0){
            setError(
                {
                    error_title : 'Error in Name and Age Field',
                    msg : 'Please Enter Valid Name and Age'
                });
               return;
         }
        if(nameInput.trim().length===0){
            setError(
                    {
                        error_title : 'Error in Name Field',
                        msg : 'Please Enter Valid Name'
                    });
            return;
        }
        if(ageInput.trim().length===0){
            setError(
                    {
                        error_title : 'Error in Age Field',
                        msg : 'Please Enter Valid Age'
                    });
            return;
        }
        if(+ageInput<=0){    //checking if length is not negative
            setError(
                    {
                        error_title : 'Error in Age Field',
                        msg : 'Please Enter Age >0'
                    });
            return;
        }
        
        console.log(nameInput);
        console.log(ageInput);
        props.onAddingUser(nameInput,ageInput);  //passing name and age entered by user to app.js

        // after entering name and age setting values to blank again
        setNameInput('');
        setAgeInput('');

    }

     //Name adding
     const onNameChangeHandler=(event)=>{
        setNameInput(event.target.value);
        console.log("In working onNameChangeHandler");
    }

     // age addding  
     const onAgeChangeHandler=(event)=>{
        setAgeInput(event.target.value);
        console.log("In working onAgeChangeHandler");
    }

    const cancelButtonClickHandler=()=>{
        setError(null);
    }

    return(

            <div>
                 {/* if error occured then display */}
                {error && <ErrorPopup error_title={error.error_title} msg={error.msg}  OnCancelingError = {cancelButtonClickHandler}></ErrorPopup>}  
               
                <div className="main-box">
                    <form onSubmit={onSubmittingValues}>
                        <div className="box1">
                        
                            <label htmlFor="username"> Name </label> 
                            <input name="username" type= "text" value={nameInput} onChange={onNameChangeHandler} />
            
                            <label htmlFor="userage"> Age </label>
                            <input name="userage" type= "number" value={ageInput} onChange={onAgeChangeHandler} />

                            <div className="btn" >
                                <button type="submit">SUBMIT</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        );
}

export default SubmitButton;