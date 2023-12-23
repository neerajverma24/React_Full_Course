import { memo } from 'react'
function StudentUseCallBackComponent({ passItem, addToCart }) {
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
            <button onClick={addToCart}>Add to Cart</button>
        </>
    )
}

export default memo(StudentUseCallBackComponent); 