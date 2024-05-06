import React from 'react'

function Index({
    coin,
    setCoin,
    Employee,
    employees,
    setEmployees,
    employeesCount,
    setEmployeesCount,
    setProductionSpeed,
    productionSpeed
}) {

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });


    function checkEmployee(amount) {
        try {
            setProductionSpeed(productionSpeed + amount);
        } catch (error) {
            console.log(error);
        }
    }

    function addEmployee(name, production, price) {
        let newEmployees = [...employees, new Employee(name, production)];
        setEmployees(newEmployees);
        setEmployeesCount(newEmployees.length);
        setCoin(coin - price)
        checkEmployee(production);
    }

    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-lg-3 col-md-6'>
                        <div className="card text-center">
                            <img src="https://storage.acerapps.io/app-1528/out/dusunsinif.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Düşük Sınıf İşçi</h5>
                                <p className="card-text">Saniye başına üretim +1</p>
                            </div>
                            <div className='card-footer'>
                                <span>
                                    {formatter.format(10000)}
                                </span>
                                <button className='btn btn-success w-100' disabled={coin >= 10000 ? false : true} onClick={() => addEmployee("Name", 1, 10000)}>
                                    İşe Al
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className="card text-center">
                            <img src="https://storage.acerapps.io/app-1528/out/ortasinif.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Orta Sınıf İşçi</h5>
                                <p className="card-text">Saniye başına üretim +2</p>
                            </div>
                            <div className='card-footer'>
                                <span>
                                    {formatter.format(20000)}
                                </span>
                                <button className='btn btn-success w-100' disabled={coin >= 20000 ? false : true} onClick={() => addEmployee("Name", 2, 20000)}>
                                    İşe Al
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className="card text-center">
                            <img src="https://storage.acerapps.io/app-1528/out/yukseksinif.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Yüksek Sınıf İşçi</h5>
                                <p className="card-text">Saniye başına üretim +3</p>
                            </div>
                            <div className='card-footer'>
                                <span>
                                    {formatter.format(30000)}
                                </span>
                                <button className='btn btn-success w-100' disabled={coin >= 30000 ? false : true} onClick={() => addEmployee("Name", 3, 30000)}>
                                    İşe Al
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className="card text-center">
                            <img src="https://storage.acerapps.io/app-1528/out/yoneticisinif.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Yönetici</h5>
                                <p className="card-text">Saniye başına üretime +4</p>
                            </div>
                            <div className='card-footer'>
                                <span>
                                    {formatter.format(40000)}
                                </span>
                                <button className='btn btn-success w-100' disabled={coin >= 40000 ? false : true} onClick={() => addEmployee("Name", 4, 40000)}>
                                    İşe Al
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='d-flex'>
                <div className='w-50'>
                    <ul className='employee_list'>
                        <li>
                            <div className='employee_infos'>
                                <div>
                                    <img src="https://storage.acerapps.io/app-1528/out/dusuksinif.webp" alt="" />
                                </div>
                                <div className='employee_content'>
                                    <p>
                                        Düşük sınıf işçi al
                                    </p>
                                    <span>
                                        Saniye başına üretim +1
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-success'>
                                    <p>
                                        İşçi Al
                                    </p>
                                    <span>
                                        {formatter.format(2000)}
                                    </span>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='employee_infos'>
                                <div>
                                    <img src="https://storage.acerapps.io/app-1528/out/ortasinif.webp" alt="" />
                                </div>
                                <div className='employee_content'>
                                    <p>
                                        Orta sınıf işçi al
                                    </p>
                                    <span>
                                        Saniye başına üretim +2
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-success'>
                                    <p>
                                        İşçi Al
                                    </p>
                                    <span>
                                        {formatter.format(2000)}
                                    </span>
                                </button>
                            </div>

                        </li>
                        <li>
                            <div className='employee_infos'>
                                <div>
                                    <img src="https://storage.acerapps.io/app-1528/out/yukseksinif.webp" alt="" />
                                </div>
                                <div className='employee_content'>
                                    <p>
                                        Yüksek sınıf işçi al
                                    </p>
                                    <span>
                                        Saniye başına üretim +3
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-success'>
                                    <p>
                                        İşçi Al
                                    </p>
                                    <span>
                                        {formatter.format(2000)}
                                    </span>
                                </button>
                            </div>

                        </li>
                        <li>
                            <div className='employee_infos'>
                                <div>
                                    <img src="https://storage.acerapps.io/app-1528/out/yoneticisinif.webp" alt="" />
                                </div>
                                <div className='employee_content'>
                                    <p>
                                        Yönetici al
                                    </p>
                                    <span>
                                        Saniye başına üretime +4
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-success'>
                                    <p>
                                        İşçi Al
                                    </p>
                                    <span>
                                        {formatter.format(2000)}
                                    </span>
                                </button>
                            </div>

                        </li>
                    </ul>
                </div>

                <div className='w-50'>
                    asd
                </div>
            </div> */}

        </>
    )
}

export default Index
