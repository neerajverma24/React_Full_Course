function StudentChildProps(getProps) {

    console.log(getProps.sendProps);
    
    return (
        <>
            <h3>Student Child Props</h3>
            <p>{getProps.sendProps}</p>
        </>
    )
}

export default StudentChildProps;