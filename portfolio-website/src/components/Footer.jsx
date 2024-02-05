import React from "react";

function Footer(){
    return(
        <div className="py-5 text-center">
            {/*Social icons*/}
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Gurraj Singh. All rights reserved.
            </p>
        </div>
    )
}
export default Footer