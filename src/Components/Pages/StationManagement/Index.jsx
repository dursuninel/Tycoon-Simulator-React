import React from 'react'

function Index() {
    return (
        <main>
            <section className="py-2">
                <div className="container">
                    <div className="product_bant_flex">
                        <div className="product_bant_item">
                            <div className="new_bant_area">
                                <h2>
                                    Ürün Bandı Oluştur
                                </h2>
                                <p>
                                    <span>100.000</span> TL
                                </p>

                            </div>
                        </div>
                        <div className="product_bant_item">
                            <video src="https://storage.acerapps.io/app-1528/out/station.mp4" autoPlay muted loop></video>
                            <div className="status">
                                Bu İstasyon Çalışıyor
                            </div>
                            <div className="station_info">
                                <div className="icon">
                                    ?
                                </div>
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
        </main>
    )
}

export default Index
