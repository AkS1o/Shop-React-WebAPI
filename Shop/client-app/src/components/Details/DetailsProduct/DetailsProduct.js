import { Fragment } from "react";

const DetailsProduct = () => {
    return (
        <Fragment>
            <section className="product">
                <div className="row">
                    <div className="col-6">
                        <img src="../img/battlefield-2042.jpg" alt="img" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <h2>battlefield 2042</h2>
                        <ul className="list-info">
                            <li><span>Genres</span>RPG, Open World, Adventure</li>
                            <li><span>Rating</span>4.5</li>
                            <li><span>Developer</span>DICE</li>
                            <li><span>Platform</span>PS4, Xbox One, PC, Stadia</li>
                            <li><span>Release Date</span>August 20, 2020</li>
                        </ul>
                        <div className="row">
                            <div className="col-3">
                                <button className="btn btn-outline-primary">Add to card</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="content">
                            <h3 className="title-line">About Game</h3>
                            <p>
                                Adapt and overcome in a world transformed by disorder.
                                With support for 128 players, Battlefield™ 2042 brings unprecedented
                                scale on vast battlegrounds. Players will take on several experiences
                                comprising elevated versions of Conquest and Breakthrough, Battlefield™
                                Portal; a new community-driven platform where players can create, share and
                                discover unexpected battles from Battlefield’s iconic past, present and
                                future, and Battlefield™ Hazard Zone; a tense, squad-focused survival
                                experience where every bullet, every skirmish, and every decision counts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="title-line">Minimum</h4>
                                <ul className="list-info">
                                    <li><span>OS:</span>64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10</li>
                                    <li><span>CPU:</span>Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940</li>
                                    <li><span>GPU:</span>Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870</li>
                                    <li><span>Memor:</span>6 GB</li>
                                    <li><span>Storage:</span>77GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="title-line">Recommended</h4>
                                <ul className="list-info">
                                    <li><span>OS:</span>64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10</li>
                                    <li><span>CPU:</span>Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz</li>
                                    <li><span>GPU:</span>Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290</li>
                                    <li><span>Memory:</span>8 GB</li>
                                    <li><span>Storage:</span>77GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default DetailsProduct;