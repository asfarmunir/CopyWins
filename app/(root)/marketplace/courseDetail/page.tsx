"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiUsers,
  FiClock,
  FiPlay,
  FiCheck,
  FiSmartphone,
  FiMonitor,
  FiAward,
  FiShare2,
} from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const CourseDetail = () => {
  const [expandedSection, setExpandedSection] = useState("build-website");

  const courseData = {
    title: "Web development course",
    instructor: {
      name: "Jane Smith",
      role: "Tutor",
      rating: 4.6,
      avatar: "/instructor-avatar.jpg",
    },
    stats: {
      students: "8,245 Students",
      duration: "42 Hours",
      lectures: "185 Lectures",
    },
    pricing: {
      current: "$49.99",
      original: "$49.99",
      discount: "44% off",
      saleEnds: "2 days",
    },
    lastUpdated: "April 2023",
    includes: [
      { icon: FiClock, text: "42 hours on-demand video" },
      { icon: FiAward, text: "Certificate of completion" },
      { icon: FiCheck, text: "Full lifetime access" },
      { icon: FiSmartphone, text: "Access on mobile and TV" },
      { icon: FiPlay, text: "25 coding exercises" },
    ],
    tags: ["CSS", "Node.JS", "Node.JS", "HTML", "React", "Javascript"],
    description:
      "Dive into the world of web development with this beginner-friendly course designed to take you from a complete novice to a confident web creator. Learn the fundamentals of HTML, CSS, and JavaScript while building real-world projects. Understand how websites work behind the scenes, explore responsive design, and get hands-on with tools like Git, VS Code, and browser DevTools.",
    learningOutcomes: [
      {
        id: "build-website",
        title: "You will learn how to build a complete website from scratch",
        expanded: true,
      },
      {
        id: "programming-languages",
        title:
          "You will gain hands-on experience with core programming languages",
        expanded: false,
      },
      {
        id: "responsive-design",
        title:
          "You will master responsive design for mobile and tablet devices",
        expanded: false,
      },
    ],
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? "" : sectionId);
  };

  return (
    <div className="w-full bg-card h-full rounded-[10px] border flex flex-col gap-2 2xl:gap-4 p-3 2xl:p-4 3xl:p-5">
      {/* Header with Breadcrumb */}
      <div className="w-full flex items-center justify-between border-b border-[#E3E3E4] dark:border-[#0F2430] pb-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={35}
            priority
            className="md:hidden"
          />
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Marketplace</span>
            <span>›</span>
            <span className="text-foreground">Web development course</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 text-sm bg-card-foreground border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Start selling
          </button>
        </div>
      </div>

      {/* Main Course Content */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 mt-8 lg:grid-cols-3 gap-6">
        {/* Left Column - Course Details */}
        <div className="lg:col-span-2 space-y-6 bg-card-foreground rounded-[10px] border p-4 xl:p-6 2xl:p-8 ">
          {/* Course Header */}
          <div className="space-y-4">
            <h1 className="text-xl 2xl:text-2xl font-bold">
              {courseData.title}
            </h1>

            {/* Course Stats */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center  w-full justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <FiUsers size={16} />
                    <span>{courseData.stats.students}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <FiClock size={16} />
                    <span>{courseData.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <FiPlay size={16} />
                    <span>{courseData.stats.lectures}</span>
                  </div>
                </div>

                {/* Level and Language Tags */}
                <div className="flex items-center gap-2">
                  <span className="bg-primary/50 text-white  px-3 py-1 rounded-full text-sm font-semibold">
                    All levels
                  </span>
                  <span className="bg-card  text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                    English
                  </span>
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="flex items-center gap-3 py-4">
              {/* <Image
                src="/instructor-avatar.jpg"
                alt={courseData.instructor.name}
                width={50}
                height={50}
                className="rounded-full bg-card"
              /> */}
              <div className="relative w-12 h-12 rounded-full bg-card overflow-hidden">
                {/* <Image
                  src={courseData.instructor.avatar}
                  alt={courseData.instructor.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                /> */}
              </div>

              <div className="flex flex-col justify-start md:flex-row items-start md:items-center gap-2 md:gap-4">
                <div>
                  <h3 className="font-semibold">
                    {courseData.instructor.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {courseData.instructor.role}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-1 bg-yellow-50 dark:bg-yellow-800/70 px-2 py-1 rounded-full text-sm font-medium">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">
                    {courseData.instructor.rating}
                  </span>
                </div>
              </div>
              <div className="ml-auto text-sm text-gray-500 bg-card px-4 py-2 rounded-full font-semibold">
                Last updated: {courseData.lastUpdated}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description:</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {courseData.description}
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What you'll Learn</h2>
            <div className="space-y-1 bg-card-foreground rounded-[10px] border p-1">
              {courseData.learningOutcomes.map((outcome) => (
                <div
                  key={outcome.id}
                  className="bg-card rounded-[10px] overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(outcome.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-opacity-80 transition-colors"
                  >
                    <span className="font-medium text-sm 2xl:text-base">
                      {outcome.title}
                    </span>
                    {expandedSection === outcome.id ? (
                      <FiChevronUp
                        className="text-gray-500 flex-shrink-0 ml-2"
                        size={20}
                      />
                    ) : (
                      <FiChevronDown
                        className="text-gray-500 flex-shrink-0 ml-2"
                        size={20}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Purchase Card */}
        <div className="lg:col-span-1">
          <div className="bg-card-foreground rounded-[10px] border p-4 sticky top-4">
            {/* Course Type */}
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Full course
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold">
                {courseData.pricing.current}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {courseData.pricing.original}
              </span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-medium">
                {courseData.pricing.discount}
              </span>
            </div>

            {/* Sale Timer */}
            <div className="flex items-center gap-1 mb-6 text-sm text-gray-600 dark:text-gray-400">
              <FiClock size={14} />
              <span>Sale ends in {courseData.pricing.saleEnds}</span>
            </div>

            {/* Course Includes */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">The course includes:</h3>
              <div className="space-y-3">
                {courseData.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <FiCheck
                        className="text-green-600 dark:text-green-400"
                        size={12}
                      />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Buy now
              </button>
              <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 py-3 rounded-lg font-medium transition-colors">
                Add to cart
              </button>
            </div>

            {/* Tags */}
            <div className="space-y-3">
              <h3 className="font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {courseData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3">Share this course</h3>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FaTwitter className="text-blue-400" size={18} />
                </button>
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FaLinkedin className="text-blue-600" size={18} />
                </button>
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FaFacebook className="text-blue-700" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
