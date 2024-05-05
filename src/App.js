import './App.css';
import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Home/Index';
import StationManagement from './Components/Pages/StationManagement/Index';
import HumanResources from './Components/Pages/HumanResources/Index';
import Patents from './Components/Pages/Patents/Index';
import Header from './Components/Layouts/Header';


function Employee(name, production) {
  this.name = name;
  this.production = production;
}

function App() {

  const [coin, setCoin] = useState(10000);


  const [employees, setEmployees] = useState([new Employee("Dursun", 1)]);
  const [productCount, setProductCount] = useState(0);
  const [productionSpeed, setProductionSpeed] = useState(1);
  const [rawMaterials, setRawMaterials] = useState(1500);
  const [rawMaterialsUsing, setRawMaterialsUsing] = useState(10);
  const [producedLimit, setProducedLimit] = useState(100);
  const [gameSpeed, setGameSpeed] = useState(1000);
  const [employeesCount, setEmployeesCount] = useState(employees.length);

  return (
    <>
      <Header coin={coin} />
      <div className='d-flex w-100'>

        <div className="">
          <ul className='navigate'>
            <li>
              <NavLink to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/station-management">
                İstasyon Yönetimi
              </NavLink>
            </li>
            <li>
              <NavLink to="/human-resources">
                İnsan Kaynakları
              </NavLink>
            </li>
            <li>
              <NavLink to="/patents">
                Ürün Patentleri
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-100">
          <Home


            productCount={productCount}
            productionSpeed={productionSpeed}
            rawMaterials={rawMaterials}
            rawMaterialsUsing={rawMaterialsUsing}
            producedLimit={producedLimit}
            setProducedLimit={setProducedLimit}

            gameSpeed={gameSpeed}
            setGameSpeed={setGameSpeed}

            employeesCount={employeesCount}

            setProductCount={setProductCount}
            setProductionSpeed={setProductionSpeed}

            setRawMaterials={setRawMaterials}
            setRawMaterialsUsing={setRawMaterialsUsing}
          />

          <Routes>
            {/* <Route path="/" element={} /> */}

            <Route path="/station-management" element={<StationManagement />} />


            <Route path="/human-resources" element={<HumanResources
              coin={coin}
              setCoin={setCoin}

              Employee={Employee}
              employees={employees}
              setEmployees={setEmployees}

              employeesCount={employeesCount}
              setEmployeesCount={setEmployeesCount}


              setProductionSpeed={setProductionSpeed}
              productionSpeed={productionSpeed}



            />} />

            <Route path="/patents" element={<Patents coin={coin}
              setCoin={setCoin} />} />


          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
