import { Fragment } from "react";

import SitebarAdmin from "../../components/Sitebar/SitebarAdmin/SitebarAdmin"
import TableProducts from "../../components/Table/TableProducts/TableProducts"

const Admin = () => {
    return (
        <Fragment>
            <main className="container-fluid">
                <div className="row">
                    <aside className="col-2">
                        <SitebarAdmin />
                    </aside>
                    <section className="col-10">
                        <TableProducts />
                    </section>
                </div>
            </main>
        </Fragment>
    )
}

export default Admin;