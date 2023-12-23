import React from 'react'
import './StudentDesignWork.css';
import style from './custom.module.css'

function StudentDesignWork() {
    return (
        <>
            <h2 style={{ color: "Blue", border: '1px solid red' }}>Student Design Work</h2>
            <p className='para1'>This is a simple Paragraph 1</p>
            <p className={style.para2}>This is a simple Paragraph 2</p>

            {/* Exercise :  2, 3 component Header-Footer naam ke alag alag or usko import karwa do 1 hi file me */}
        </>
    )
}

export default StudentDesignWork