function Student() {
    /*   way 1
    return <h3>Function Component..</h3>
           <p>Hello Student</p>        // output : gives error because of <p> tag... there is no code execute once we use return... 
 
     


    /* way 2  : The correct syntax 
    return (<>
        <h3>Function Component..</h3>
        <p>Hello Student</p>     
    </>                             // output : result both
    )
    */


    /* way 3   
    return <div>
        <h3>Function Component...</h3>
        <p>Hello Student</p>
    </div>               // output : result both
 
    */


    /*  way 4   :    <>  </>    JSX   fragment

    return <>
        <h3>Function Component...</h3>
        <p>Hello Student</p>
    </>                  // output : result both
    
    */


    //{similarly for the Class Component}



}

export default Student