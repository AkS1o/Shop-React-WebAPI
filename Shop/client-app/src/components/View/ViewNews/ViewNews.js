import { Component } from "react";
import { Fragment } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


class DetailsNews extends Component {
    state = {
        Id: this.props.CurrentNews.Id,//
        Name: this.props.CurrentNews.Name,//
        Publisher: this.props.CurrentNews.Publisher, //
        Description: this.props.CurrentNews.Description,//
        ShortDescription: this.props.CurrentNews.ShortDescription,
        Image: this.props.CurrentNews.Image,
        ReleaseDate: this.props.CurrentNews.ReleaseDate,

        isRedirect: false
    }
    render() {
        let { Name, Publisher, Description, ShortDescription, Image, ReleaseDate } = this.state;
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/admin" />
        }
        return (
            <Fragment>
                <section className="news">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="post-header">
                                <div className="img-wrap">
                                    <img src={Image} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>{Name}</h3>
                                    <div className="meta">{ReleaseDate}</div>
                                    <div className="meta">{Publisher}</div>
                                </div>
                            </div>
                            <div>
                            {/*    <p>*/}
                            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                            {/*        Sed augue velit, iaculis nec eleifend vel, facilisis sit*/}
                            {/*        amet sapien. Mauris efficitur urna tellus, ac iaculis*/}
                            {/*        libero elementum ac. Vivamus vehicula scelerisque tellus*/}
                            {/*        sed gravida. Vestibulum quis fermentum elit. Nam pretium*/}
                            {/*        justo eu dictum egestas. Morbi velit neque, commodo eget*/}
                            {/*        fermentum sit amet, pretium id nibh. Pellentesque non*/}
                            {/*        nisl non ex feugiat vestibulum. Integer facilisis nunc*/}
                            {/*        ut venenatis vulputate.*/}
                            {/*</p>*/}
                            {/*    <p>*/}
                            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                            {/*        Sed augue velit, iaculis nec eleifend vel, facilisis sit*/}
                            {/*        amet sapien. Mauris efficitur urna tellus, ac iaculis*/}
                            {/*        libero elementum ac. Vivamus vehicula scelerisque tellus*/}
                            {/*        sed gravida. Vestibulum quis fermentum elit. Nam pretium*/}
                            {/*        justo eu dictum egestas. Morbi velit neque, commodo eget*/}
                            {/*        fermentum sit amet, pretium id nibh. Pellentesque non*/}
                            {/*        nisl non ex feugiat vestibulum. Integer facilisis nunc*/}
                            {/*        ut venenatis vulputate.*/}
                            {/*</p>*/}
                            {/*    <p>*/}
                            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                            {/*        Sed augue velit, iaculis nec eleifend vel, facilisis sit*/}
                            {/*        amet sapien. Mauris efficitur urna tellus, ac iaculis*/}
                            {/*        libero elementum ac. Vivamus vehicula scelerisque tellus*/}
                            {/*        sed gravida. Vestibulum quis fermentum elit. Nam pretium*/}
                            {/*        justo eu dictum egestas. Morbi velit neque, commodo eget*/}
                            {/*        fermentum sit amet, pretium id nibh. Pellentesque non*/}
                            {/*        nisl non ex feugiat vestibulum. Integer facilisis nunc*/}
                            {/*        ut venenatis vulputate.*/}
                                {/*</p>*/}
                                { Description}
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { CurrentNews } = NewsListReducer;
    return { CurrentNews }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsNews);