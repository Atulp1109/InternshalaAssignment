import React from "react";
import Navigation from "./Navigation"
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NewsCard() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Row>
          <Col>
            <Card className="mb-3  my-3" style={{ width: "18rem" , margin: "auto" }}>
              <Card.Img
                variant="top"
                src="news1.png"
                style={{ height: "10rem"}}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  PayPal enables transfer of digital currencies to external
                  wallets
                </Card.Title>
                <Card.Text>
                  The move comes after nearly two years since PayPal enabled
                  users to buy and sell crypto on its platform...
                </Card.Text>
                <div className="d-grid">
                <Link className="d-grid Link" to="/News1"><Button variant="primary">Read More</Button></Link> 
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-3 my-3" style={{ width: "18rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="news2.png"
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  Italian Parliament Approves 26% Crypto-Gains Tax in 2023
                  Budget
                </Card.Title>
                <Card.Text>
                  Prime Minister Giorgia Meloni's new bill also includes an
                  incentive for those declaring crypto for tax...
                </Card.Text>
                <div className="d-grid">
                <Link className="d-grid Link" to="/News2"><Button variant="primary">Read More</Button></Link> 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-3 my-3" style={{ width: "18rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="news3.png"
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  Microstrategy Buys More Bitcoin — Company's Crypto Holdings
                  Grow to 132,500 BTC
                </Card.Title>
                <Card.Text>
                  Microstrategy is now holding approximately 132,500 bitcoin...
                </Card.Text>
                <div className="d-grid">
                <Link className="d-grid Link" to="/News3"><Button variant="primary">Read More</Button></Link>                 </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card className="mb-3 my-3" style={{ width: "18rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="news4.png"
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022
                </Card.Title>
                <Card.Text>
                  2022 has been a rough and tough year for investors, traders,
                  cryptocurrency businesses, and...
                </Card.Text>
                <div className="d-grid">
                <Link className="d-grid Link" to="/News4"><Button variant="primary">Read More</Button></Link>                 </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-3 my-3" style={{ width: "18rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src="news5.png"
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  Mango Markets Exploiter Eisenberg Arrested in Puerto Rico
                </Card.Title>
                <Card.Text>
                  The investor drained $110 million in cryptocurrencies from the...
                </Card.Text>
                <div className="d-grid">
                <Link className="d-grid Link" to="/News5"><Button variant="primary">Read More</Button></Link>                 </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
