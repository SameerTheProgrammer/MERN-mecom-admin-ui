// import React from "react";

function HomePage() {
    return (
        <>
            <div>Hello from home page of route path "/"</div>
            {/* {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                    <React.Fragment key={index}>
                        {index % 20 === 0 && index ? "more" : "..."}
                        <br />
                    </React.Fragment>
                ))
            } */}
        </>
    );
}

export default HomePage;
