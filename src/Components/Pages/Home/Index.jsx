import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Index({
    productCount,
    productionSpeed,
    rawMaterials,
    rawMaterialsUsing,
    producedLimit,
    gameSpeed,
    employeesCount,
    setProductCount,
    setRawMaterials,
    setProducedLimit
}) {


    const [isLimit, setIsLimit] = useState(false);

    function workingActivitiesFunction() {
        if (rawMaterials > 0 && rawMaterials > rawMaterialsUsing) {
            let produced_items = Math.min(
                productionSpeed,
                Math.floor(rawMaterials / rawMaterialsUsing)
            );

            if (productCount > producedLimit || (productCount + produced_items) > producedLimit) {
                // Depo sınırının üstünde kalan ürünleri kaldırdık ve hammadelerini iade ettik.
                let excessProducts = productCount - producedLimit;
                setRawMaterials(rawMaterials + excessProducts * rawMaterialsUsing);
                setProductCount(producedLimit);
                setIsLimit(true)
                console.log("Depo Sınırı Doldu")
                console.log(excessProducts * rawMaterialsUsing);
            }
            else {
                setProductCount(productCount + produced_items);
                setRawMaterials(rawMaterials - produced_items * rawMaterialsUsing);
            }



        } else {
            console.log("Hammaddeler tükendi.");
        }
    }

    useEffect(() => {
        if (producedLimit > productCount) {
            setIsLimit(false)
        }
    }, [producedLimit]);

    useEffect(() => {
        let workingActivities;
        if (!isLimit) {
            workingActivities = setInterval(
                workingActivitiesFunction,
                gameSpeed
            );
        }


        return () => {
            clearInterval(workingActivities);
        };
    }, [
        rawMaterials,
        rawMaterialsUsing,
        productionSpeed,
        productCount,
        gameSpeed,
        isLimit
    ]);



    function handleRawMaterialAddition(event) {
        event.preventDefault();
        let amount = parseInt(event.target.elements.addRawMaterial_amount.value, 10);
        if (!isNaN(amount)) {
            setRawMaterials(rawMaterials + amount);
        }
    }

    return (
        <main>
            <section className="py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ürün Sayısı</h5>
                                    <p className="text-center mb-0" id="product_count">
                                        {productCount}
                                    </p>
                                    <div className='product_limit_viewer'><span style={{ width: `${(productCount / producedLimit) * 100}%`, backgroundColor: (productCount / producedLimit) * 100 <= 50 ? "green" : (productCount / producedLimit) * 100 > 50 && (productCount / producedLimit) * 100 <= 80 ? "yellow" : (productCount / producedLimit) * 100 > 80 ? "red" : "black" }}></span></div>
                                </div>
                                <div className='card-footer'>
                                    <div className="btn btn-primary w-100">
                                        Üretim Hızı: <span id="production_speed">{productionSpeed}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-success w-100 mt-1"
                                onClick={() => setProducedLimit(producedLimit + 50)}
                            >
                                Limiti 50 arttır
                            </button>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Çalışan İşci</h5>
                                    <p className="text-center mb-0" id="employee_count">
                                        {employeesCount}
                                    </p>
                                </div>
                                <div className='card-footer'>
                                    <NavLink to={"human-resources"} className="btn btn-primary w-100">
                                        İşçi Satın Al
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ham Madde</h5>
                                    <p className="text-center mb-0" id="raw_materials">
                                        {rawMaterials}
                                    </p>
                                </div>
                                <div className='card-footer'>
                                    <div className="btn btn-primary w-100">
                                        Materyal Kullanım Hızı:{" "}
                                        <span id="raw_material_using_speed">
                                            {productionSpeed * rawMaterialsUsing}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <form
                                className="addRawMaterial_form mt-2 w-100 d-flex flex-column"
                                onSubmit={handleRawMaterialAddition}
                            >
                                <input
                                    type="number"
                                    id="addRawMaterial_amount"
                                    placeholder="Ham Madde Adedi"
                                    className="w-100 px-3"
                                />
                                <button className="btn btn-success mt-1" type="submit">
                                    Ham Madde Ekle
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Index;
