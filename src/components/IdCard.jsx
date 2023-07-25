function IdCard(props){

    const{lastName, firstName, gender, height, birth, picture}=props;

    return(
        <div className="id-card">
            <img src={picture} alt={firstName +" " + lastName} />
            <div>
                <p>First name:{firstName}</p>
                <p>Last name:{lastName}</p>              
                <p>Gender:{gender}</p>
                <p>Height: {height}</p>
                <p>Birth:{birth.toDateString()}</p>
            </div>
        </div>
    );

}

export default IdCard;