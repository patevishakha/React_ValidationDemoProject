import './UserList.css';

const UserList =(props)=>{
       
    return(
        
        <div className="userlist">
            <ul>
                {
                    props.name_age_array.map((each_user) =>(
                        <li key={each_user.unique_id}> 
                            {each_user.Name} is {each_user.Age} yrs old
                        </li>
                    ))

                }
            </ul>
        </div>
    );
}

export default UserList;