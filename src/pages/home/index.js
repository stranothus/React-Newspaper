import React from "react";
import Content from "../../utils/content";
import ImageHeader from "../../utils/ImageHeader/index";

class Home extends React.Component {
    render() {
        return (
            <>
                <ImageHeader src = "https://www.loc.gov/rr/european/libguides/russian-american-newspapers.jpg">Home</ImageHeader>
                <Content>
                    <p>KA News is Khan Academy's finest newspaper publication organization. We are devoted to bringing you the most recent happenings across the platform with special focus on the Computer Programming section of Khan Academy. </p>
                    <p>Each week, we bring a collection of the latest happens around the Khan Academy Computer Programming Platform so our readers can stay informed on the facts rather than the heresay. </p>
                </Content>
            </>
        );
    }
}

export default Home;