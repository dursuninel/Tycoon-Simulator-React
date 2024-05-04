import './App.css';
import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Home/Index';
import StationManagement from './Components/Pages/StationManagement/Index';


function Employee(name, production) {
  this.name = name;
  this.production = production;
}

function App() {

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
      <div className='d-flex w-100'>

        <div className="">
          <ul>
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
          </ul>
        </div>

        <div className="w-100">
          <Routes>
            <Route path="/" element={<Home employees={employees}
              productCount={productCount}
              productionSpeed={productionSpeed}
              rawMaterials={rawMaterials}
              rawMaterialsUsing={rawMaterialsUsing}
              producedLimit={producedLimit}
              gameSpeed={gameSpeed}
              employeesCount={employeesCount}
              setEmployees={setEmployees}
              setProductCount={setProductCount}
              setProductionSpeed={setProductionSpeed}
              setRawMaterials={setRawMaterials}
              setRawMaterialsUsing={setRawMaterialsUsing}
              setProducedLimit={setProducedLimit}
              setGameSpeed={setGameSpeed}
              setEmployeesCount={setEmployeesCount}
              Employee={Employee} />} />
            <Route path="/station-management" element={<StationManagement />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
