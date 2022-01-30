import React from "react";
import StaffList from "../../utils/StaffList/index";
import "./style.scss";

class Staff extends React.Component {
    render() {
        return (
            <>
                <h1>Staff</h1>
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