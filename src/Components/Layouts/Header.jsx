import React from "react";
import { formatCoin } from "../FormatterCoin";
function Header({ coin }) {
  return (
    <>
      <header>
        <div className="header_flex">
          <div>
            <h1>TyconnTech</h1>
          </div>
          <div className="current_price">
            Güncel Para : <span>{formatCoin(coin)}</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
