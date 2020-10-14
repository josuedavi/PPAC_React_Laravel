import React from 'react';
import '../../../public/css/event.css';

class Event extends React.Component {
    render() {
        return (

                <div className="container gallery-containers">

                    <h1 id="ue">Upcoming Events</h1>

                    <p id="click" className="page-descriptions text-centers">Click On Images For More Information</p>

                    <div className="tz-gallerys">

                        <div className="row">

                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <a className="lightbox" href="https://www.philaphotoarts.org/programs/oh-snap/">
                                        <img className="mx-auto d-block" src="https://www.philaphotoarts.org/wp-content/uploads/2020/02/ohsnap-214x160.jpg" alt="Park" />
                                    </a>
                                    <div className="caption ">
                                        <h3>Oh, Snap!</h3>
                                        <p id="click">February 15 – June 20</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <a className="lightbox " href="https://www.philaphotoarts.org/event/ten-years/">
                                        <img className="mx-auto d-block" src="https://www.philaphotoarts.org/wp-content/uploads/2020/01/Photo-4-214x160.jpg" alt="Bridge" />
                                    </a>
                                    <div className="caption">
                                        <h3>Ten Years</h3>
                                        <p id="click">March 12 – May 2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <a className="lightbox" href="https://www.philaphotoarts.org/event/thursday-night-photo-talk/">
                                        <img className="mx-auto d-block" src="https://www.philaphotoarts.org/wp-content/uploads/2020/03/flag_v3-214x160.jpg" alt="Tunnel" />
                                    </a>
                                    <div className="caption">
                                        <h3>Thursday Night Photo Talk 4/9</h3>
                                        <p id="click">April 9th</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <a className="lightbox" href="https://www.philaphotoarts.org/wp-content/uploads/2020/03/portrait-04-214x160.jpg">
                                        <img className="mx-auto d-block" src="https://www.philaphotoarts.org/wp-content/uploads/2020/03/portrait-04-214x160.jpg" alt="Coast" />
                                    </a>
                                    <div className="caption">
                                        <h3>Thursday Night Photo Talk 4/16</h3>
                                        <p id="click">April 16th</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <a className="lightbox" href="https://www.philaphotoarts.org/wp-content/uploads/2020/02/NicholasMuellner_MakingDoubles-02295-1-214x160.jpg">
                                        <img className="mx-auto d-block" src="https://www.philaphotoarts.org/wp-content/uploads/2020/02/NicholasMuellner_MakingDoubles-02295-1-214x160.jpg" alt="Rails" />
                                    </a>
                                    <div className="caption">
                                        <h3>Thursday Night Photo Talk 4/23</h3>
                                        <p id="click">April 23rd</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <a className="lightbox" href="https://www.philaphotoarts.org/wp-content/uploads/2020/03/PetePin_talk-214x160.jpg">
                                        <img className="mx-auto d-block" src="https://www.philaphotoarts.org/wp-content/uploads/2020/03/PetePin_talk-214x160.jpg" alt="Traffic" />
                                    </a>
                                    <div className="caption">
                                        <h3>Thursday Night Photo Talk 4/30</h3>
                                        <p id="click">April 30th</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

        );
    }
}

export default Event;
