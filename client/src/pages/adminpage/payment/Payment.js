import { React, useState } from 'react'
import './payment.css'
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Payment() {

    const [activeTab, setActiveTab] = useState('Payment Summary');

    const reviewcolumns = [
        {
            title: 'Payout ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Seller Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Review Date',
            dataIndex: 'reviewDate',
            key: 'reviewDate'
        },
        {
            title: 'Confirm',
            dataIndex: 'confirm',
            key: <button className='btn-confirm payment'>Confirm</button>,
        }

    ];


    const historycolumns = [
        {
            title: 'Payout ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Seller Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Review Date',
            dataIndex: 'reviewDate',
            key: 'reviewDate'
        },
        {
            title: 'Payout Date',
            dataIndex: 'payoutdate',
            key: 'payoutdate',
        }

    ];


    return (


        <div className='admin-terminal-payment-containers'>
            {/* tab container */}
            <div className="tab-of-admin-payment">
                {/* container for payment summary */}
                <div
                    className={`tab-container-of-finance-payment-summary ${activeTab === 'Payment Summary' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Payment Summary')}
                >
                    <span className='tab-text-of-payment-summary'>Payment Summary</span>
                </div>

                {/* container for review payment */}


                <div
                    className={`tab-container-of-review-payments ${activeTab === 'Review Payments' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Review Payments')}
                >
                    <span className='tab-text-of-review-payments'>Review Payments</span>

                </div>
                {/* container for payment history */}


                < div
                    className={`tab-container-of-payment-history ${activeTab === 'Payment History' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Payment History')}
                >
                    <span className='tab-text-of-payment-history'>Payment History</span>
                </div>
            </div>

            {activeTab === 'Payment Summary' && (
                <div className='summary-of-payment'>
                    <div className='summary-of-payment-boxes-container'>
                        <div className='summary-of-payment-box-1'>
                            <span className='summary-of-total-funds'>
                                Total Funds
                            </span>
                            <span className='total-funds-of-payment-summary'>
                                Rs.600000
                            </span>
                        </div>
                        <div className='summary-of-payment-box-2'>
                            <span className='summary-of-total-fees'>
                                Fees
                            </span>
                            <span className='total-fees-of-payment-summary'>
                                Rs6000
                            </span>
                        </div>
                    </div>
                </div>
            )}


            {activeTab === 'Review Payments' && (
                <div className='search-bar-and-table-container'>
                    <div className='search-bar-and-table'>
                        <div className="search-bar">
                            <div className="admin-terminal-search-bar-payout-id">
                                <FontAwesomeIcon icon={faIdBadge} className="payments-payout-id-icon" />
                                <input
                                    type="text"
                                    placeholder="Payout ID"
                                    className="admin-terminal-payments-payout-id"
                                />
                            </div>
                            <div className="admin-terminal-search-bar-review-payment-seller-name">
                                <FontAwesomeIcon icon={faUser} className="payments-review-seller-name" />
                                <input
                                    type="text"
                                    placeholder="Seller Name"
                                    className="admin-terminal-payment-review-seller-name"
                                />
                            </div>
                            <div className='admin-payments-review-filter-search'>
                                <button className='btn-payment-review-search-admin-terminal'>
                                    <FontAwesomeIcon icon={faSearch} className="payments-review-search" />
                                </button>
                            </div>
                        </div>
                         <div className='table-of-review-payment'>
                     <Table columns={reviewcolumns} />
                 </div>
                    </div>
                </div>
                
            )}


            {activeTab === 'Payment History' && (
                <div className='table-of-payment-history'>
                    <Table columns={historycolumns} />
                </div>
            )}
        </div>
    )
}

export default Payment