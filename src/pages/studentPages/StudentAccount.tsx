import React from 'react';
import { feesData } from '../../data/mockData';
import { Calendar, Key } from 'lucide-react';
import DataTable from '../../components/DataTable';

const StudentAccount: React.FC = () => {

    const FeeColumns: Column<typeof feesData.monthlyPaymentHistory[0]>[] = [
        { header: "Month", key: "month" },
        { header: "Date", key: "date" },
        { header: "Amount", key: "amount", render: (value) => `Rs. ${(value as number).toLocaleString()}` },
        { header: "Transaction ID", key: "transactionId" },
        {
            header: "Status",
            key: "status",
            render: (value) => (
                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${value === "paid" ? "bg-green-100 text-green-800" : "bg-danger text-white"
                    }`}>
                    {(value as string).toUpperCase()}
                </span>
            )
        },
    ];


    // 2️⃣ Pass rows
    const FeeRows = feesData.monthlyPaymentHistory;

    return (
        <div className="bg-page">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
                    Accounts and Fees
                </h1>
                <p className="text-text-muted mt-1">
                    Track your account details
                </p>
            </div>

            <div className="bg-card  mb-6 rounded-lg shadow-md">
                <div className="border-b border-ui-border p-6">
                    <h3 className="text-xl font-bold text-text-main">Current Month Payment</h3>
                </div>
                <div className="p-6">
                    <div className="bg-primary-muted border border-primary rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">{feesData.currentMonth}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-text-muted">Amount Due</span>
                                <span className="font-bold text-text-main">Rs. {feesData.currentMonthFee.amount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-muted">Due Date</span>
                                <span className="font-semibold text-text-main">{feesData.currentMonthFee.dueDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-muted">Payment Status</span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-muted text-primary">
                                    {feesData.currentMonthFee.status.toUpperCase()}
                                </span>
                            </div>
                            {feesData.currentMonthFee.fine > 0 && (
                                <div className="flex justify-between pt-2 border-t border-danger">
                                    <span className="text-text-muted">Late Fine</span>
                                    <span className="font-semibold text-danger">Rs. {feesData.currentMonthFee.fine.toLocaleString()}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-card  shadow-md rounded-xl   ">
                <div className="border-b border-ui-border p-6">
                    <h3 className="text-xl font-bold text-text-main">Payment History</h3>
                </div>
                <div className="overflow-x-auto hide-scrollbar">
                    <DataTable
                        rows={FeeRows}
                        columns={FeeColumns}
                    />
                </div>
            </div>
        </div>
    )
}

export default StudentAccount;