import React from 'react';

const AddJobPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 p-10 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">Post a New Job</h2>
        
        <form className="space-y-6">
          <div className="space-y-4">
            <label className="block text-lg font-medium text-blue-700">Job Title</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Job Title" />

            <label className="block text-lg font-medium text-blue-700">Job Description</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Describe the responsibilities and requirements" rows="4"></textarea>

            <label className="block text-lg font-medium text-blue-700">Required Skills</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="E.g., JavaScript, React, Node.js" />

            <label className="block text-lg font-medium text-blue-700">Salary Range</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="E.g., $50,000 - $70,000" />

            <label className="block text-lg font-medium text-blue-700">Location</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="E.g., Remote, New York, USA" />

            <label className="block text-lg font-medium text-blue-700">Application Deadline</label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" />

            <label className="block text-lg font-medium text-blue-700">Company Website</label>
            <input type="url" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="https://yourcompany.com" />
          </div>

          <button type="submit" className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Submit Job Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddJobPage;
