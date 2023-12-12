import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const PricingBox = ({ plans }) => {
  return (
    <div className="card border border-primary">
      <div className="card-header">
      </div>
      <div className="card-body">
        <div className="row">
          {plans.map((plan) => (
            <div className="col-md-4 mb-3" key={plan.plan}>
              <div className="card h-100 text-center">
                <div className="card-header">
                  <h3 className="card-title">{plan.plan}</h3>
                  <h4 className="card-subtitle">${plan.price}/month</h4>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {plan.features.map((feature) => (
                      <li className="list-group-item" key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary btn-block">
                    Button
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const pricingPlans = [
    {
      plan: "FREE",
      price: 0,
      features: [
        "✔ Single User",
        "✔ 50GB Storage",
        "✔ Unlimited Public Projects",
        "✔ Community Access",
        "X Unlimited Private Projects",
        "X Dedicated Phone Support",
        "X Free Subdomain",
        "X Monthly Status Reports"
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        "✔ 5 Users",
        "✔ 50GB Storage",
        "✔ Unlimited Public Projects",
        "✔ Community Access",
        "✔ Unlimited Private Projects",
        "✔ Dedicated Phone Support",
        "✔ Free Subdomain",
        "X Monthly Status Reports"
              ],
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        "✔ Single User",
        "✔ 50GB Storage",
        "✔ Unlimited Public Projects",
        "✔ Community Access",
        "✔ Unlimited Private Projects",
        "✔ Dedicated Phone Support",
        "✔ Free Subdomain",
        "✔ Monthly Status Reports"
      ],
    },
  ];

  return (
    <div className="container">
      <PricingBox plans={pricingPlans} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App