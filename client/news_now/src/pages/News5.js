import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function News4() {
  return (
    <div>
      <Navigation/>
      <div className="NewsImg">
        <img src="News5.png" alt="img1" />
      </div>
      <h3 className="my-2 text-center">
        Mango Markets Exploiter Eisenberg Arrested in Puerto Rico
      </h3>
      <p className="newsPara">
        The investor drained $110 million in cryptocurrencies from the platform.
        Avraham Eisenberg, the crypto investor whose “highly profitable trading
        strategy” drained DeFi trading platform Mango Markets of crypto worth
        $110 million, was arrested Monday in Puerto Rico, court documents said.
        The self-described game theorist admitted his role in draining Mango
        Markets’ treasury shortly after the incident in mid-October, and may now
        be the first U.S. resident to face charges for his role in manipulating
        a decentralized-finance trading platform. Eisenberg faces charges of
        commodities fraud and commodities manipulation, according to a filing
        unsealed Tuesday. The charges could see punishments ranging from fines
        to prison time. A deposition signed by FBI Special Agent Brandon Racz
        alleges Eisenberg “willfully and knowingly” manipulated the sale of a
        commodity – namely futures contracts on Mango Markets. “Eisenberg
        engaged in a scheme involving the intentional and artificial
        manipulation of the price of perpetual futures contracts on a
        cryptocurrency exchange called Mango Markets, and other manipulative and
        deceptive devices and contrivances.”
      </p>

      <div className="d-grid m-3">
        <Link className="d-grid Link" to="/">
          <Button variant="danger">Go Back</Button>
        </Link>
      </div>
    </div>
  );
}
