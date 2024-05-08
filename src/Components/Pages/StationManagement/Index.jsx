import React from "react";
import { formatCoin } from "../../FormatterCoin";

function Index({ patents }) {
  return (
    <main>
      <section className="py-2">
        <div className="container">
          <div className="product_bant_flex">
            <div className="product_bant_item">
              <div
                className="new_bant_area"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <h2>Ürün İstasyonu Oluştur</h2>
                <p>
                  <span>{formatCoin(20000)}</span>
                  {/* {console.log(formatCoin)} */}
                  {/* formatter.format(20000) */}
                </p>
              </div>
            </div>
            <div className="product_bant_item">
              <video
                src="https://storage.acerapps.io/app-1528/out/station.mp4"
                autoPlay
                muted
                loop
              ></video>
              <div className="status">Bu İstasyon Çalışıyor</div>
              <div className="station_info">
                <div className="icon">?</div>
                <div className="info">
                  Bu istasyon x ürününü üretiyor.
                  <p>
                    Ürün başı <span>x</span> TL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                İstasyonda Üretilecek Ürünü Seç
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {patents
                ? patents.map((data, key) => (
                    <li key={key}>{data.patentName}</li>
                  ))
                : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Kapat
              </button>
              <button type="button" className="btn btn-primary">
                Oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
