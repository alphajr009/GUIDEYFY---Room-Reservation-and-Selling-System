import React from 'react'
import './analytics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faDollarSign, faHandHoldingDollar, faChartLine } from '@fortawesome/free-solid-svg-icons'

function Analytics() {
  return (

    <div>
      <div className="containerAvi">
        <div className="ViewCountsAvi">
          View Counts (90 Days) 275
          <i class="iconavi"><FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff", }} /></i>
          
        </div>
        <div className="RevenueAvi">
          Revenue Rs.45000
          <i class="iconavi"><FontAwesomeIcon icon={faDollarSign} style={{ color: "#ffffff", }} /></i>
          
        </div>
        <div className="FeesAvi">
          Fees 45%
          <i class="iconavi"><FontAwesomeIcon icon={faHandHoldingDollar} style={{ color: "#ffffff", }} /></i>
          
        </div>
        <div className="ProfitAvi">
          Profit 48%
          <i class="iconavi"><FontAwesomeIcon icon={faChartLine} style={{ color: "#ffffff", }} /></i>
          
        </div>
      </div>

      <div>
        <table className="PerformanceOverviewAvi">
          <tbody>
            <tr>
              <th>Performance Overview</th>
              <th>Based On The Past Bookings (30 Days)</th>
            </tr>
            <tr>
              <td>Occupancy Rate</td>
              <td>04</td>
            </tr>
            <tr>
              <td>Rooms Revenue</td>
              <td>Rs.7800.00</td>
            </tr>
            <tr>
              <td>Average DailyRate</td>
              <td>Rs.260.00</td>
            </tr>
            <tr>
              <td>Cancellations</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button class="GenerateReportButtonAvi">Generate Report</button>
      </div>
    </div>

  )
}

export default Analytics