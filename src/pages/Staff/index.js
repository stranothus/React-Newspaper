import React from "react";
import StaffList from "../../utils/StaffList/index";

class Staff extends React.Component {
    render() {
        return (
            <>
                <h1>Staff</h1>
                <StaffList staff={[
                    {
                        name: "Quinn",
                        position: "CEO",
                        about: "Original founder and CEO of KA News."
                    },
                    {
                        name: "Foo",
                        position: "Test",
                        about: "I am a commonly used fake variable in coding examples. "
                    }
                ]}></StaffList>
            </>
        );
    }
}

export default Staff;