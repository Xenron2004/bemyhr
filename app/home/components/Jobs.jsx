"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  DollarSign,
  Clock,
  Users,
  ChevronDown,
  Star,
  ExternalLink,
} from "lucide-react";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const jobCategories = [
    { id: "cruise", name: "Cruise Line Hospitality", count: 45 },
    { id: "oil-gas", name: "Oil & Gas Sector", count: 32 },
    { id: "hotel", name: "Hotel & Restaurant", count: 28 },
    { id: "housekeeping", name: "Housekeeping & F&B", count: 19 },
    { id: "industrial", name: "Industrial & Marine", count: 23 },
  ];

  const jobs = [
    {
      id: 1,
      title: "Jobs in Hospitality Sector",
      company: "Royal Caribbean International",
      location: "Worldwide",
      salary: "$65,000 - $85,000",
      type: "cruise",
      experience: "senior",
      skills: ["Communication", "Team Management", "Customer Service"],
      urgent: false,
      posted: "2 days ago",
      applicants: 24,
      link: "https://forms.gle/QsJmBKD2b2ktWJJo9",
    },
    {
      id: 2,
      title: "Jobs in Offshore Companies",
      company: "ExxonMobil",
      location: "Middle East & Europe",
      salary: "$75,000 - $95,000",
      type: "oil-gas",
      experience: "mid",
      skills: ["Safety Management", "Risk Assessment", "Technical Skills"],
      urgent: false,
      posted: "1 week ago",
      applicants: 18,
      link: "https://forms.gle/D9eXpiyFztwRQj3p6",
    },
    {
      id: 3,
      title: "Jobs in Cruise Lines",
      company: "Huntington Ingalls Industries",
      location: "Worldwide",
      salary: "$55,000 - $70,000",
      type: "industrial",
      experience: "mid",
      skills: ["Communication", "Team Management", "Multitasking"],
      urgent: false,
      posted: "3 days ago",
      applicants: 31,
      link: "https://forms.gle/CCHcZNcaRLeiEcHd7",
    },
    {
      id: 4,
      title: "Jobs in New Zealand",
      company: "",
      location: "New Zealand",
      salary: "$55,000 - $70,000",
      type: "industrial",
      experience: "mid",
      skills: ["Communication", "Team Management", "Multitasking"],
      urgent: false,
      posted: "1 day ago",
      applicants: 41,
      // link: "https://forms.gle/CCHcZNcaRLeiEcHd7",
    },
    // {
    //   id: 4,
    //   title: 'Hotel General Manager',
    //   company: 'Marriott International',
    //   location: 'Las Vegas, NV',
    //   salary: '$80,000 - $120,000',
    //   type: 'hotel',
    //   experience: 'senior',
    //   skills: ['Operations Management', 'P&L Management', 'Staff Leadership'],
    //   urgent: false,
    //   posted: '5 days ago',
    //   applicants: 42,
    //   link: 'https://careers.marriott.com/job/hotel-general-manager'
    // },
    // {
    //   id: 5,
    //   title: 'Executive Housekeeper',
    //   company: 'Four Seasons Hotels',
    //   location: 'New York, NY',
    //   salary: '$50,000 - $65,000',
    //   type: 'housekeeping',
    //   experience: 'mid',
    //   skills: ['Housekeeping Operations', 'Quality Control', 'Team Training'],
    //   urgent: false,
    //   posted: '1 week ago',
    //   applicants: 15,
    //   link: 'https://careers.fourseasons.com/job/executive-housekeeper'
    // },
    // {
    //   id: 6,
    //   title: 'Permit Receiver - Oil Refinery',
    //   company: 'Chevron Corporation',
    //   location: 'Richmond, CA',
    //   salary: '$60,000 - $75,000',
    //   type: 'oil-gas',
    //   experience: 'entry',
    //   skills: ['Permit Management', 'Safety Protocols', 'Documentation'],
    //   urgent: true,
    //   posted: '4 days ago',
    //   applicants: 22,
    //   link: 'https://careers.chevron.com/job/permit-receiver'
    // },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesType =
      selectedJobType === "all" || job.type === selectedJobType;
    const matchesExperience =
      selectedExperience === "all" || job.experience === selectedExperience;

    return matchesSearch && matchesType && matchesExperience;
  });

  const handleApply = (jobLink) => {
    window.open(jobLink, "_blank");
  };

  return (
    <div id="jobs" className="max-w-7xl mt-[80px] w-11/12 mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Dream Job
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover exciting career opportunities in hospitality, oil & gas,
          marine, and industrial sectors
        </p>
      </div>

      {/* Job Categories Overview */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {jobCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
              <p className="text-blue-600 font-medium">{category.count} Jobs</p>
            </div>
          ))}
        </div> */}

      {/* Job Listings */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
          >
            {/* Job Card Header */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    {job.urgent && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  {/* <p className="text-gray-600 font-medium mb-1">{job.company}</p> */}
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {/* <Star className="h-5 w-5" /> */}
                </button>
              </div>

              {/* Job Details */}
              <div className="space-y-3 mb-4">
                {/* <div className="flex items-center text-green-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-medium">{job.salary}</span>
                  </div> */}

                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Posted {job.posted}</span>
                  <span className="mx-2">•</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{job.applicants} applicants</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleApply(job.link)}
                  className="flex-1 bg-[#0146B1] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ExternalLink className="h-4 w-4" />
                </button>
                {/* <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Save
                  </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
