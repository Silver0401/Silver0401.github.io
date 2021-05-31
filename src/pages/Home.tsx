import React from 'react'

// Components
import HRightBox from "./../components/Home/HRightBox"
import HLeftBox from "./../components/Home/HLeftBox"

const Home : React.FC = () => {
    return (
        <div id="HomePage">
            <HLeftBox/>
            <HRightBox/>
        </div>
    )
}

export default Home