import { memo } from 'react'
function StudentMemoComponent({ passItem }) {
    // console.log(getProps)
    console.log(passItem)
    console.log('StudentMemoComponent is working..')
    return (
        <>
            <h4>Student Memo Component</h4>
            {
                passItem.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        </>
    )
}

export default memo(StudentMemoComponent); 