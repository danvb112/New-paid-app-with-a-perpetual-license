import "./LicensePriceChildren.scss";
import unitedStatesIcon from "../../assets/icons/united-states.svg";

type Currency = {
  icon: string;
  name: string;
};

type Quantity = {
  from: string;
  to: string;
};

interface LicensePriceChildren {
  currency: Currency;
  quantity: Quantity;
  value: string;
}

export function LicensePriceChildren({
  value,
  quantity,
  currency,
}: LicensePriceChildren) {
  return (
    <div className="license-container">
      <div className="license-type">
        <span>Standard Licenses</span>
      </div>
      <div>
        <span className="license-title">From</span>
        <span className="license-value">{quantity.from}</span>
        <span className="license-title">To</span>
        <span className="license-value">{quantity.to}</span>
      </div>
      <div>
        <span>-</span>
      </div>
      <div className="license-currency">
        <div className="license-currency-icon">
          <img src={unitedStatesIcon} />
        </div>
        <span className="license-currency-country-abbreviation">
          {currency.name}
        </span>
        <span className="license-currency-value">{value}</span>
      </div>
      <div>
        <span>-</span>
      </div>
      <div className="license-total">
        <span className="license-title">Total</span>
        <span className="license-value">{value}</span>
      </div>
    </div>
  );
}
