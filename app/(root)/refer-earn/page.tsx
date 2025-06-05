"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiCalendar,
  FiDownload,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { MdShare } from "react-icons/md";

const ReferAndEarn = () => {
  const [activeTab, setActiveTab] = useState("Banners");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const affiliateRewards = [
    { referrals: "1-5 Referrals", commission: "6% Commission" },
    { referrals: "6-25 Referrals", commission: "8% Commission" },
    { referrals: "25+ Referrals", commission: "10% Commission" },
  ];

  const dashboardStats = [
    {
      icon: <FiDollarSign className="w-5 h-5" />,
      value: "$1,240.50",
      label: "Total earnings",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "28",
      label: "Total referrals",
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      value: "64%",
      label: "Conversion rate",
    },
    {
      icon: <FiCalendar className="w-5 h-5" />,
      value: "$320.00",
      label: "This month",
    },
  ];

  const recentReferrals = [
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
    {
      name: "John Doe",
      date: "2023-04-01",
      status: "Active",
      commission: "$45.00",
    },
  ];

  const banners = [
    { size: "Banner 300x250", description: "Perfect for sidebar placement" },
    {
      size: "Banner 728x90",
      description: "Ideal for header or footer placement",
    },
    { size: "Banner 160x600", description: "Great for sidebar placement" },
  ];

  const faqItems = [
    {
      question: "How does the affiliate program work?",
      answer:
        "Our affiliate program allows you to earn commissions by referring new users to our platform. You'll receive a unique referral link to share.",
    },
    {
      question: "How much can I earn?",
      answer:
        "You can earn up to 10% commission based on your referral volume. The more referrals you bring, the higher your commission rate.",
    },
    {
      question: "When and how do I get paid?",
      answer:
        "Payments are processed monthly and sent to your preferred payment method. Minimum payout threshold is $50.",
    },
    {
      question: "How long does the referral cookie last?",
      answer:
        "Our referral cookies last for 30 days, giving your referrals plenty of time to sign up and be credited to your account.",
    },
    {
      question: "Can I promote the affiliate program on social media?",
      answer:
        "Yes, you can promote on social media platforms. We provide ready-to-use promotional materials to help you get started.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-card">
      {/* Header */}
      <div className="bg-card border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Refer & Earn
            </h1>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                Withdrawal Status
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                Share Link
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl bg-card mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="  border-gray-200 dark:border-gray-700 p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Share success, Grow together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
                Earn up to 10% commission for every successful referral - reward
                yourself while helping others discover our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Join now
                </button>
                <button className="text-primarbg-primary hover:text-blue-700 bg-card-foreground rounded-full dark:text-blue-400 dark:hover:text-blue-300 px-6 py-2 font-medium transition-colors">
                  Learn more
                </button>
              </div>
            </div>

            <div className="bg-card-foreground p-1 rounded-lg min-w-[300px] w-full xl:max-w-[500px]">
              <div className="bg-card rounded-lg p-6 ">
                <Image
                  src="/affiliate.svg"
                  alt="Affiliate Hero"
                  width={50}
                  height={50}
                  className=" mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Affiliate Rewards
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
                  How Our Commission Structure Works
                </p>
                <div className="space-y-3">
                  {affiliateRewards.map((reward, index) => (
                    <div
                      key={index}
                      className="bg-card-foreground p-1 rounded-[10px]"
                    >
                      <div className="flex justify-between items-center py-3 px-3 bg-card rounded-[10px]">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {reward.referrals}
                        </span>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          {reward.commission}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Your affiliate dashboard
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Track earnings and manage referrals
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-card-foreground rounded-[8px] p-1">
                <div className="bg-card rounded-[8px] border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 text-gray-600 dark:text-gray-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="bg-card rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Recent referrals
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your most recent referral activity
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-card-foreground border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    NAME
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    DATE
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    STATUS
                  </th>
                  <th className="text-right py-3 px-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    COMMISSION
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentReferrals.map((referral, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700"
                  >
                    <td className="py-3 px-6 text-sm text-gray-900 dark:text-white">
                      {referral.name}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-600 dark:text-gray-300">
                      {referral.date}
                    </td>
                    <td className="py-3 px-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        {referral.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-900 dark:text-white text-right">
                      {referral.commission}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Promotion Materials */}
        <div className="bg-card rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex items-center justify-between gap-4">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Promotion materials
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get creative with our ready-to-use assets
              </p>
            </div>
            <div className="flex items-center w-full md:w-fit justify-between mb-6">
              <div className="flex items-center text-nowrap space-x-1 bg-card-foreground rounded-full w-full p-1">
                {["Banners", "Email templates", "Social Media"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 xl:px-7 py-2 rounded-full flex-1 text-sm font-semibold transition ${
                      activeTab === tab
                        ? "bg-card text-foreground shadow-sm"
                        : "text-gray-500 dark:text-gray-300 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-32 mb-4 flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-500 text-sm text-center">
                      Banner Preview
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {banner.size}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {banner.description}
                  </p>
                  <button className="w-full bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <FiDownload className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-card-foreground rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Frequently asked questions
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Discover your promotion materials from here.
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 pb-4"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left py-2"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    {expandedFAQ === index ? (
                      <FiChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
