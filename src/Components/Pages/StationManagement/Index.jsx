import React from 'react'

function Index() {
    return (
        <main>
            <section class="py-2">
                <div class="container">
                    <div class="product_bant_flex">
                        <div class="product_bant_item">
                            <div class="new_bant_area">
                                <h2>
                                    Ürün Bandı Oluştur
                                </h2>
                                <p>
                                    <span>100.000</span> TL
                                </p>

                            </div>
                        </div>
                        <div class="product_bant_item">
                            <video src="https://storage.acerapps.io/app-1528/out/station.mp4" autoplay muted loop></video>
                            <div class="status">
                                Bu İstasyon Çalışıyor
                            </div>
                            <div class="station_info">
                                <div class="icon">
                                    ?
                                </div>
                                <div class="info">
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
