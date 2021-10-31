import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SitebarAdmin from "../../components/Sitebar/SitebarAdmin/SitebarAdmin"

import ViewsProduct from "../../components/View/ViewProduct/ViewProduct"
import MainProduct from "../Products/AdminProducts/MainProducts"
import AddProduct from "../Products/AdminProducts/AddProduct"
import EditProduct from "../Products/AdminProducts/EditProduct"
import DeleteProduct from "../Products/AdminProducts/DeleteProduct"

import MainGenres from "../Genre/MainGenres"
import AddGenre from "../Genre/AddGenre"

import MainPlatforms from "../Platform/MainPlatform"
import AddPlatform from "../Platform/AddPlatform"

import MainNews from "../News/AdminNews/MainNews"
import AddNews from "../News/AdminNews/AddNews"
import EditNews from "../News/AdminNews/EditNews"

const Admin = () => {
    return (
        <main className="container-fluid body-wrap">
            <SitebarAdmin />
            <section className="main-panel">
                <Switch>
                    <Route path="/admin/products" component={MainProduct} />
                    <Route path="/admin/views-product" component={ViewsProduct} />
                    <Route path="/admin/add-product" component={AddProduct} />
                    <Route path="/admin/edit-product" component={EditProduct} />
                    <Route path="/admin/delete-product" component={DeleteProduct} />

                    <Route path="/admin/genres" component={MainGenres} />
                    <Route path="/admin/add-genre" component={AddGenre} />

                    <Route path="/admin/platforms" component={MainPlatforms} />
                    <Route path="/admin/add-platform" component={AddPlatform} />

                    <Route path="/admin/news" component={MainNews} />
                    <Route path="/admin/add-news" component={AddNews} />
                    <Route path="/admin/edit-news" component={EditNews} />
                </Switch>
            </section>
        </main>
    )
}

export default Admin;