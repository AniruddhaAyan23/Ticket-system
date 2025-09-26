import React from 'react';

const Tickets = () => {
    const tickets = [
        {
            id: "#1001",
            title: "Login Issues - Can't Access Account",
            description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
            priority: "HIGH PRIORITY",
            status: "Open",
            assignee: "John Smith",
            date: "1/15/2024"
        },
        {
            id: "#1002",
            title: "Payment Failed - Card Declined",
            description: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
            priority: "HIGH PRIORITY",
            status: "Open",
            assignee: "Sarah Johnson",
            date: "1/16/2024"
        },
        {
            id: "#1003",
            title: "Unable to Download Invoice",
            description: "Customer cannot download their January invoice from the billing section. The download button is...",
            priority: "MEDIUM PRIORITY",
            status: "In-Progress",
            assignee: "Michael Brown",
            date: "1/17/2024"
        },
        {
            id: "#1004",
            title: "Incorrect Billing Address",
            description: "Customer's billing address shows a different city. They updated it but it still displays the old one.",
            priority: "LOW PRIORITY",
            status: "Open",
            assignee: "Emily Davis",
            date: "1/18/2024"
        },
        {
            id: "#1005",
            title: "App Crash on Launch",
            description: "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
            priority: "HIGH PRIORITY",
            status: "Open",
            assignee: "David Wilson",
            date: "1/19/2024"
        },
        {
            id: "#1006",
            title: "Refund Not Processed",
            description: "Customer requested a refund two weeks ago but has not received the amount yet.",
            priority: "MEDIUM PRIORITY",
            status: "In-Progress",
            assignee: "Sophia Taylor",
            date: "1/20/2024"
        },
        {
            id: "#1007",
            title: "Two-Factor Authentication Issue",
            description: "Customer is not receiving 2FA codes on their registered phone number.",
            priority: "HIGH PRIORITY",
            status: "Open",
            assignee: "James Anderson",
            date: "1/21/2024"
        },
        {
            id: "#1008",
            title: "Unable to Update Profile Picture",
            description: "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
            priority: "LOW PRIORITY",
            status: "Open",
            assignee: "Olivia Martinez",
            date: "1/22/2024"
        },
        {
            id: "#1009",
            title: "Subscription Auto-Renewal",
            description: "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
            priority: "MEDIUM PRIORITY",
            status: "In-Progress",
            assignee: "Liam Thomas",
            date: "1/17/2024"
        },
        {
            id: "#1010",
            title: "Missing Order Confirmation Email",
            description: "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
            priority: "MEDIUM PRIORITY",
            status: "Open",
            assignee: "Isabella Garcia",
            date: "1/24/2024"
        }
    ];

    const getStatusBadge = (status) => {
        const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";
        switch (status) {
            case "Open":
                return `${baseClasses} bg-green-100 text-green-800`;
            case "In-Progress":
                return `${baseClasses} bg-yellow-100 text-yellow-800`;
            case "Closed":
                return `${baseClasses} bg-gray-100 text-gray-800`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800`;
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "HIGH PRIORITY":
                return "text-red-600";
            case "MEDIUM PRIORITY":
                return "text-yellow-600";
            case "LOW PRIORITY":
                return "text-green-600";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Customer Tickets Section - 2 columns */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Tickets</h2>

                        {/* 2-column grid for ticket cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tickets.map((ticket) => (
                                <div key={ticket.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="font-medium text-gray-900 text-sm">{ticket.title}</h3>
                                            <div className={getStatusBadge(ticket.status)}>
                                                <div className="w-2 h-2 bg-current rounded-full mr-1.5"></div>
                                                {ticket.status}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {ticket.description}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <div className="flex items-center space-x-4">
                                            <span className="font-medium text-gray-700">{ticket.id}</span>
                                            <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                                                {ticket.priority}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span>{ticket.assignee}</span>
                                            <div className="flex items-center">
                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {ticket.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Task Status Section - 1 column */}
                    <div className="lg:col-span-1">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Task Status</h2>
                        <p className="text-sm text-gray-600 mb-4">Select a ticket to add to Task Status.</p>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="font-medium text-gray-900 mb-2">Resolved Task</h3>
                            <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;