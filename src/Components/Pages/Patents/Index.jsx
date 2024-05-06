import React from 'react'

function Index({ coin,
    setCoin,
    Patent,
    patents,
    setPatents }) {

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });


    let addPatent = (patentName, patentPrice, productPrice) => {
        // let newEmployees = [...employees, new Employee(name, production)];
        // setEmployees(newEmployees);
        
        // setPatents(patent => [...patent, {new Patent()}])
        // patentName: patentName, patentPrice: patentPrice, productPrice: productPrice
    }


    return (
        <>
            <div className='my-3'>
                <div className='container'>
                    <div className='row my-4 g-4'>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Default Patent 1</h5>
                                    <p className="card-text">Ürün Başına ₺2</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        Ücretsiz
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 0 ? false : true}>
                                        Patenti Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Default Patent 2</h5>
                                    <p className="card-text">Ürün Başına ₺5</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        Ücretsiz
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 0 ? false : true}>
                                        Patenti Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Başlangıç Patent</h5>
                                    <p className="card-text">Ürün Başına ₺10</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(5000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 5000 ? false : true}>
                                        Patenti Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Orta Patent</h5>
                                    <p className="card-text">Ürün Başına ₺20</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(15000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 15000 ? false : true}>
                                        Patenti Al
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Yüksek Patent</h5>
                                    <p className="card-text">Ürün Başına ₺30</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(30000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 30000 ? false : true}>
                                        Patenti Al
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="card text-center">
                                <img src="https://storage.acerapps.io/app-1528/out/pt.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Gelişmiş Patent</h5>
                                    <p className="card-text">Ürün Başına ₺50</p>
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        {formatter.format(60000)}
                                    </span>
                                    <button className='btn btn-success w-100' disabled={coin >= 60000 ? false : true}>
                                        Patenti Al
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
