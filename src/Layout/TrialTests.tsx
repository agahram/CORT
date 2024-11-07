import React from "react";
import { Card, Row } from "react-bootstrap";
import { widgetexchange } from "Common/data/exchange";
import { Link } from "react-router-dom";

export default function TrialTests() {
  //   const router = useRouter();

  //   function handleClusterDetails() {
  //     router.push("/connections/details");
  //   }
  return (
    <div>
      <Row>
        {widgetexchange.map((card: any, index: any) => (
          <div key={index} className="col-xl-6 col-sm-6">
            <Card className={`card-${card.color} overflow-hidden`}>
              <div className="position-absolute top-0 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="350"
                  height="200"
                  preserveAspectRatio="none"
                  viewBox="0 0 350 200"
                >
                  {/* SVG Paths */}
                </svg>
              </div>
              <Card.Body>
                <h4 className="text-reset mb-4" style={{ fontWeight: 600 }}>
                  {card.title}
                </h4>
                <h5 className="text-reset mb-0" style={{ fontWeight: 400 }}>
                  {card.value}
                </h5>
                <div className="display-6 mt-3">
                  {/* <i className={`ph ${card.icon}`}></i> */}
                  <button
                    className="btn btn-info"
                    style={{ letterSpacing: 1, fontWeight: 500 }}
                  >
                    Start
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
}
