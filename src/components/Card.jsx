import React from 'react'

function Card() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date()
    const monthName = month[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()
    const time = d.getTime()
    const hour = d.getHours()
    const min = d.getMinutes()
    const sec = d.getSeconds()

    const cardList = [
        {
            head: "23",
            para: "Bangalore"
        },
        {
            head: `${date} ${monthName} ${year}`,
            para: `${hour} : ${min} : ${sec}`
        },
        {
            head: "Built using",
            para: "React"
        }
    ]

    const backgroundColor = ["#8272DA", "#FD6663", "#FCA201"]

    return (
        <>
            <div className='flex justify-center gap-7 my-5 flex-wrap'>

                {cardList.map((card, index) => (
                    <div key={index} style={{ background: backgroundColor[index] }} className='px-10 py-5 border rounded-md text-center flex-grow'>
                        <h1 className='font-medium text-2xl'>{card.head}</h1>
                        <p>{card.para}</p>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Card