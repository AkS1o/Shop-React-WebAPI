import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";

import APIService from "../../../services/APIService";

import { loginBuyer, changeCurrentBuyerVM } from "../../../actions/BuyerListAction"

class Profile extends Component {
    state = {
        Name: this.props.CurrentBuyer.Name,
        Email: this.props.CurrentBuyer.Email,
        Surname: this.props.CurrentBuyer.Surname,
        Nickname: this.props.CurrentBuyer.Nickname,

        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    onGetSurname = (e) => {
        const surname = e.target.value;
        this.setState({
            Surname: surname
        })
    }

    onGetNickname = (e) => {
        const nickname = e.target.value;
        this.setState({
            Nickname: nickname
        })
    }

    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }

    UpdateBuyer = (e) => {
        e.preventDefault();
        const { Name, Surname, Email, Nickname } = this.state;

        let NewBuyer = this.props.CurrentBuyer;
        NewBuyer.Name = Name;
        NewBuyer.Surname = Surname;
        NewBuyer.Email = Email;
        NewBuyer.Nickname = Nickname;

        let NewBuyerVm = this.props.CurrentBuyerVM;
        NewBuyerVm.Name = Name;
        NewBuyerVm.Surname = Surname;
        NewBuyerVm.Email = Email;
        NewBuyerVm.Nickname = Nickname;

        this.props.loginBuyer(NewBuyer);
        this.props.changeCurrentBuyerVM(NewBuyerVm);
        APIService.updateBuyer(NewBuyer);

        APIService.fetchCurentBuyer().then(data => {
            /*this.props.loginBuyer(data.Buyer);*/
            console.log("fetchCurentBuyer from change buyer", data.Buyer);
        })

        this.setState({
            isRedirect: true
        })
    }

    render() {

        let { Name, Surname, Nickname, Email } = this.state;
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/user/personal" />
        }

        return (
            <Fragment>
                <section>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="title-line">Change Account Info</h2>
                            <form method="post" enctype="multipart/form-data" onSubmit={this.UpdateBuyer}>
                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-group mt-3">
                                            <label>NicName</label>
                                            <input defaultValue={Nickname} onChange={this.onGetNickname}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-group mt-3">
                                            <label>Emain</label>
                                            <input defaultValue={Email} onChange={this.onGetEmail}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-group mt-3">
                                            <label>FirstName</label>
                                            <input defaultValue={Name} onChange={this.onGetName}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-group mt-3">
                                            <label>LastName</label>
                                            <input defaultValue={Surname} onChange={this.onGetSurname}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link to="/user/" class="btn btn-outline-white mx-2">Back</Link>
                                    <input type="submit" class="btn btn-primary mx-2" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Fragment >
        )
    }
}

const mapStateToProps = ({ BuyerListReducer }) => {
    const { CurrentBuyerVM, CurrentBuyer } = BuyerListReducer;
    return { CurrentBuyerVM, CurrentBuyer }
}

const mapDispatchToProps = {
    loginBuyer,
    changeCurrentBuyerVM
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
