import { Component } from "react";
import { Fragment } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import moment from 'moment';


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

        var imgPath = "../img/news/" + Image;

        return (
            <Fragment>
                <section className="news">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="post-header">
                                <div className="img-wrap">
                                    <img src={imgPath} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>{Name}</h3>
                                    <div className="meta">{moment(ReleaseDate).format("MMM Do YY")}</div>
                                    <div className="meta">{Publisher}</div>
                                </div>
                            </div>
                            <div>
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