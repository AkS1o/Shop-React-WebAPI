// Import
import { Fragment } from "react";

// Import components
import NotFound from "../../components/NotFound/NotFound"

const NoMatchPage = () => {
    return(
        <Fragment>
            <main className="main">
                <NotFound />
            </main>
            
        </Fragment>
    )
}

export default NoMatchPage;