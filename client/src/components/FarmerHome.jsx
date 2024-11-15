import { Col, Container, Row } from 'react-bootstrap'
import './FarmerHome.css'
import bananaImg from '../assets/images/banana.jpg';

export default function FarmerHome() {
    return (<>
        <div className='farm-farmer-home'>
            <div className="farm-farmer-home-top">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="text-left text-white">
                                <div className="hero-innner-last-child">
                                    <h6 className="nt-hero-subtitle">FARM</h6>
                                    <h1 className="nt-hero-title h1">PRODUCTS</h1>
                                    <p className="nt-hero-description">Organic products can save your body and live</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="farm-farmer-home-bottom">
                <div className='cont'>
                <h1>Products</h1>
                <div>
                    <button className='btn btn-danger'>Add Product</button>
                </div>
                </div>           
                <Container>
                    <Row>
                        <Col xs = {12}>
                        <div className="card">
                                    <div className="card-body">
                                        <img src={bananaImg} width={200} height={200}/>
                                        <h5 className="card-title">Fresh Banana</h5>
                                        <p className="card-text">$12.5</p>
                                        <p className="card-text">x200</p>
                                        <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                            <div className="btn-group me-2" role="group" aria-label="First group">
                                                <button type="button" className="btn btn-outline-secondary menu-remove">Edit</button>
                                                <button type="button" className="btn btn-outline-danger menu-add">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>)
}