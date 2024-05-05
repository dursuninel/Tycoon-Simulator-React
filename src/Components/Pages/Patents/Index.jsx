import React from 'react'

function Index({ coin,
    setCoin }) {

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });


    return (
        <>
            <div className='my-3'>
                <div className='container'>
                    <div className='row my-4'>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Düşük</h5>
                                    <p className="card-text">Saniye başına üretim +1</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(10000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 10000 ? false : true}>
                                        İşe Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Orta</h5>
                                    <p className="card-text">Saniye başına üretim +2</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(20000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 20000 ? false : true}>
                                        İşe Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Yüksek</h5>
                                    <p className="card-text">Saniye başına üretim +3</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(30000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 30000 ? false : true}>
                                        İşe Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Yönetici</h5>
                                    <p className="card-text">Saniye başına üretime +4</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(40000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 40000 ? false : true} >
                                        İşe Al
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
