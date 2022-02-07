import React from "react";
import LowerSquiggle from "../../utils/LowerSquiggle/index";
import StaffList from "../../utils/StaffList/index";
import "./style.scss";

class Staff extends React.Component {
    render() {
        return (
            <>
                <h1>Staff</h1>
                <LowerSquiggle>
                    <h2>About our staff</h2>
                    <p>Where would our newspaper be without our wonderful staff? Each staff member is critical to the success of our team as a whole. Here at KA News, we value each and every dedicated member of our team. Go ahead and meet them!</p>
                </LowerSquiggle>
                <StaffList staff={[
                    {
                        name: "Quinn",
                        position: "CEO",
                        about: "Original founder and CEO of KA News.",
                        image: "https://cdn.kastatic.org/images/avatars/svg/leaf-grey.svg"
                    },
                    {
                        name: "Foo",
                        position: "Test",
                        about: "I am a commonly used fake variable in coding examples. ",
                        image: "https://cdn.kastatic.org/images/avatars/svg/leaf-grey.svg"
                    },
                    {
                        name: "Foo",
                        position: "Test",
                        about: "I am a commonly used fake variable in coding examples. ",
                        image: "https://cdn.kastatic.org/images/avatars/svg/leaf-grey.svg"
                    },
                    {
                        name: "Foo",
                        position: "Test",
                        about: "I am a commonly used fake variable in coding examples. ",
                        image: "https://cdn.kastatic.org/images/avatars/svg/leaf-grey.svg"
                    }
                ]}></StaffList>
            </>
        );
    }
}

export default Staff;