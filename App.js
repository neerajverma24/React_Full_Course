// import logo from './logo.svg';
import './App.css';
import Student from './Student';
import StudentClass from './StudentClass';
import StudentEventFunction from './StudentEventFunction';
import StudentEventFunctionClass from './StudentEventFunctionClass';
import StudentParentProps from './StudentParentProps';
import StudentChildProps from './StudentChildProps';
import StudentParentPropsClass from './StudentParentPropsClass';
import StudentChildPropsClass from './StudentChildPropsClass';
import StudentState from './StudentState';
import StudentStateClass from './StudentStateClass';
import StudentGetInputData from './StudentGetInputData';
import StudentShowHide from './StudentShowHide';
import StudentForm from './StudentForm';
import ReactJsLifeCycleMethodClass from './ReactJsLifeCycleMethodClass';
import StudentApiData from './StudentApiData';
import StudentApiDataClass from './StudentApiDataClass';
import ReactJsLifeCycleMethodClass2 from './ReactJsLifeCycleMethodClass2';
import StudentComponentWillUnmountClass from './StudentComponentWillUnmountClass'
import StudentUseEffectIntro from './StudentUseEffectIntro';
import ReactJSLifeCycleMethod from './ReactJSLifeCycleMethod';
import Exercise1 from './Exercise1';
import StudentDesignWork from './StudentDesignWork';
import StudentPureComponentClass from './StudentPureComponentClass'
import Ex2PureComponentClass from './Ex2PureComponentClass'
import StudentUseMemo from './StudentUseMemo';
import StudentRefClass from './StudentRefClass';
import StudentUseRef from './StudentUseRef';
import StudentParentForwardRef from './StudentParentForwardRef';
import Ex3ForwardParentRef from './Ex3ForwardParentRef';
import Ex4FormSubmit from './Ex4FormSubmit';
import StudentMemo from './StudentMemo';
import StudentUseCallBack from './StudentUseCallBack';
import StudentComponentC from './StudentComponentC';
// import { createContext } from 'react';    // For class 16
import StudentUseReducer from './StudentUseReducer';
import StudentRouting from './StudentRouting'
import ExStudentFormTask from './ExStudentFormTask';

import Grocery from './Grocery'
import Form1 from './Student Forms/Form1'

// import { useState } from 'react';    // For Class 7


// const DataItem = createContext()    // FOR CLASS 16   // always use this part outside the function , otherwise it will give the error

function App() {

  // const [course, setCourse] = useState('javaScript')             // FOR CLASS 7

  return (
    <div className="App">
      <h2 >Welcome to React JS</h2>

      {/*  CLASS 1 =================================  */}
      {/* <Student /> */}
      {/* {<StudentClass /> } */}


      {/* CLASS 2  ================================== */}
      {/* <StudentEventFunction /> */}
      {/* <StudentEventFunctionClass /> */}


      {/* CLASS 3   =============================== */}
      {/* <StudentParentProps />
      <StudentChildProps />     */}

      {/* <StudentParentPropsClass />
      <StudentChildPropsClass /> */}



      {/* CLASS 4  ========================================*/}
      {/* <StudentState /> */}
      {/* <StudentStateClass /> */}


      {/* CLASS 5  =======================================  */}
      {/* < StudentGetInputData /> */}


      {/* CLASS 6  =======================================  */}
      {/* <StudentShowHide /> */}
      {/* <StudentForm /> */}


      {/* CLASS 7  =======================================  */}
      {/* Topic : React js library method   (check image from google first to start this topic) */}
      {/* <ReactJsLifeCycleMethodClass  /> */}

      {/* Uncomment this file to practice for 'PREVIOUS PROPS'  & above uncomment useState and import {useState}  */}
      {/* <ReactJsLifeCycleMethodClass passData={course} />
      <p>Course : {course}</p>
      <button onClick={() => setCourse('React JS')} >Update Props</button> */}


      {/* CLASS 8 ============================================ */}
      {/* <StudentApiData /> */}
      {/* <StudentApiDataClass />      */}


      {/* CLASS 9 ============================================       use both the class to practice lectures..*/}
      {/* <ReactJsLifeCycleMethodClass2 /> */}
      {/* <StudentComponentWillUnmountClass /> */}


      {/* CLASS 10 */}
      {/* <StudentUseEffectIntro /> */}
      {/* agar 'use' naam ka keyword laga hoga to samjh lena ki wo Hook hai.. */}


      {/* CLASS 11 */}
      {/* <ReactJSLifeCycleMethod /> */}
      {/* <Exercise1 /> */}


      {/* CLASS 12 */}
      {/* <StudentDesignWork /> */}
      {/* StudentDesignWork.css  */}
      {/* custom.module.css */}

      {/* CLASS 13 */}
      {/* <StudentPureComponentClass /> */}
      {/* <Ex2PureComponentClass /> */}
      {/* <StudentUseMemo /> */}



      {/* CLASS 14 */}
      {/* <StudentRefClass />    */}
      <StudentUseRef />


      {/* CLASS 15 */}
      {/* <StudentParentForwardRef />               // <StudentChildForwardRef />*/}
      {/* <Ex3ForwardParentRef />                   // <Ex3ForwardChildRef />*/}
      {/* <Ex4FormSubmit /> */}


      {/* CLASS 15 */}
      {/* <StudentMemo />                      // <StudentMemoComponent       */}
      {/* <StudentUseCallBack />               // <StudentUseCallBackComponent /> */}

      {/* CLASS 16 */}
      {/* <StudentComponentA        if you want to use A and B components, you can also use it by using import method../> */}

      {/* <StudentComponentB /> */}

      {/* <DataItem.Provider value={"javaScript"}>
        <StudentComponentC />
      </DataItem.Provider> */}

      {/* CLASS 17 */}
      {/* <StudentUseReducer /> */}

      {/* CLASS 18 */}
      {/* <StudentRouting /> */}
      {/* 1.   NOTE :  INSTALL ROUTER FIRST, write in Terminal : npx i react-router-dom, &
          2.   File used   :  Home.js ,  About.js , Services.js , Contact.js */}


      {/* CLASS 19 */}
      {/* <ExStudentFormTask /> */}
      {/* <Grocery />       This exercise is from w3School */}


      {/* After this all classes done in the project folder... */}


      {/* Practicing the Form from Student Form Folder */}
      {/* <Form1 /> */}

    </div>
  );
}

// export { DataItem };    // FOR CLASS 16

export default App;