import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bike2 from '../images/rhyno_2.png';

function Compare() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4" style={{ color:'#424242' }}>Compare All Products</h1>
      <div className="text-center mb-4">
        <img src={bike2} alt="Comparison" className="img-fluid" />
      </div>
      <div className="text-center mb-4">
        <button className="btn btn-primary">Buy Now</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ color:'#424242' }}>Specification</th>
              <th scope="col" style={{ color:'#424242' }}>SE03 Lite</th>
              <th scope="col" style={{ color:'#424242' }}>SE03</th>
              <th scope="col" style={{ color:'#424242' }}>SE03 Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Battery</th>
              <td>1.8Kwh</td>
              <td>2.7Kwh</td>
              <td>2.7Kwh</td>
            </tr>
            <tr>
              <th>Battery Warranty</th>
              <td>3 Years</td>
              <td>3 Years</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <th>Battery Features</th>
              <td>LPF with 1500 Cycles<br />Active Balancing<br/>Waterproof(IP67)</td>
              <td>LPF with 1500 Cycles<br />Active Balancing<br/>Waterproof(IP67)</td>
              <td>LPF with 1500 Cycles<br />Active Balancing<br/>Waterproof(IP67)</td>
            </tr>
            <tr>
              <th>Charging time</th>
              <td>3 Hours</td>
              <td>4 Hours</td>
              <td>4 Hours</td>
            </tr>
            <tr>
              <th>Motor</th>
              <td>1500W</td>
              <td>1500W</td>
              <td>2000W</td>
            </tr>
            <tr>
              <th>Max Speed</th>
              <td>55kmph</td>
              <td>55kmph</td>
              <td>65kmph</td>
            </tr>
            <tr>
              <th>ECO Range</th>
              <td>100km</td>
              <td>150km</td>
              <td>120km</td>
            </tr>
            <tr>
              <th>Sports Range</th>
              <td>90km</td>
              <td>110km</td>
              <td>100km</td>
            </tr>
            <tr>
              <th>Turbo Range</th>
              <td>60km</td>
              <td>90km</td>
              <td>80km</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Compare;
