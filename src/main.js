
import React, { useState } from "react";
import Chart from "react-apexcharts";
import './css/chartist.css';
import './css/style.css';
import './css/font.css';
import './css/responsive.css';
const Apps = () => {
     const [state, setState] = useState(
          {
               options: {
                    chart: {
                         id: "basic-bar",
                         fontFamily: 'vazir',
                         toolbar: {
                              show: false,
                              offsetX: 0,
                              offsetY: 0,
                              tools: {
                                   download: true,
                                   selection: true,
                                   zoom: true,
                                   zoomin: true,
                                   zoomout: true,
                                   pan: true,
                                   reset: true | '<img src="/static/icons/reset.png" width="20">',
                                   customIcons: []
                              }
                         },
                         grid: {
                              show: false,      // you can either change hear to disable all grids
                              xaxis: {
                                lines: {
                                  show: false  //or just here to disable only x axis grids
                                 }
                               },  
                              yaxis: {
                                lines: { 
                                  show: false  //or just here to disable only y axis
                                 }
                               },   
                            },
                    },
                    xaxis: {
                         categories: ["7/1", "7/10", "7/18", "7/25", "7/30"],
                         
                    },
                 
                    dataLabels: {
                         textAnchor: 'middle',
                         distributed: true,
                         offsetX: 0,
                         offsetY: 0,
                         style: {
                              fontSize: '13px',
                              fontWeight: '100',

                         },
                         background: {
                              enabled: true,
                              foreColor: '#fff',
                              padding: 4,
                              borderRadius: 2,
                              borderWidth: 1,
                              borderColor: '#fff',
                              opacity: 0.9,
                              dropShadow: {
                                   enabled: false,
                                   top: 2,
                                   left: 1,
                                   blur: 1,
                                   color: '#000',
                                   opacity: 0.45
                              }
                         },
                         dropShadow: {
                              enabled: false,
                              top: 1,
                              left: 1,
                              blur: 1,
                              color: '#000',
                              opacity: 0.45
                         }
                    }

               },
               series: [
                    {
                         name: "???????? ????",
                         data: [1000, 2500, 3000, 1200, 1700]
                    }
               ],
               

          }
     )

     return (<div className={"ChartBox"}>
          <Chart
               options={state.options}
               series={state.series}
               type="area"
               width="102%"
               height="260"
          />
     </div>)
}

let vector = require('./img/Vector.png');
const Main = () => {
     return <main className={"general_main"}>
          <h2 className={"main_title"}>???????? ????????</h2>

          <div className={"main_img"}>
               <img src={vector} alt={"main_img"} />
               <h3>?????? ?????? ???????? ???? ???????????????? !</h3>
               <span>?????????? ???? ????????!</span>
          </div>

          <div className={"chart"}>
               <h4 className={"tblBoxTitle"}>???????????? ?????????? ???????? ????!</h4>

               <div className={"chartBody"}>

                    <Apps />
               </div>



          </div>

          <div className={"tblBox"}>
               <h4 className={"tblBoxTitle"}>???????? ?????? ???????????????? ?????????? ?????? ??????!</h4>
               <table className={"table_1"}>
                    <thead>
                         <th>?????????? ???????????? ????????</th>
                         <th>?????? ????????</th>
                         <th>??????????</th>
                         <th>????????</th>
                         <th></th>

                    </thead>
                    <tbody>
                         <tr>
                              <td>14 ???????????? 1401</td>
                              <td>???????? ?????????????? ???? ????????</td>
                              <td>20%</td>
                              <td>130.000</td>
                              <td><span>????????</span></td>
                         </tr>

                         <tr>
                              <td>12 ?????????? 1401</td>
                              <td>????????   ???????????? ??????????</td>
                              <td>45%</td>
                              <td>45.000</td>
                              <td><span>????????</span></td>
                         </tr>

                         <tr>
                              <td className={"no-b-border"}>15 ?????? 1401</td>
                              <td className={"no-b-border"}>???????? ?????????????? ???? ????????</td>
                              <td className={"no-b-border"}>15%</td>
                              <td className={"no-b-border"}>50.000</td>
                              <td className={"no-b-border"}><span>????????</span></td>
                         </tr>

                    </tbody>
               </table>
          </div>
     </main>
}

export default Main;