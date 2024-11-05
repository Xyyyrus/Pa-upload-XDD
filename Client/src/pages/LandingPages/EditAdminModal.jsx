import React from 'react';
import { useTheme } from '../../contexts/ThemeContexts'; // Import useTheme

const EditAdminModal = ({ admin, onClose }) => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  if (!admin) return null; // Prevent rendering if admin is null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Edit Admin</h2>
        <form>
          <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Username:
            <input type='text' defaultValue={admin.username} className={`mt-1 p-2 rounded border ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} />
          </label>
          <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email:
            <input type='email' defaultValue={admin.email} className={`mt-1 p-2 rounded border ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} />
          </label>
          {/* Add more fields as necessary */}
          <div className='flex justify-end'>
            <button type='button' onClick={onClose} className={`mr-2 p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Close</button>
            <button type='submit' className={`p-2 rounded ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdminModal;
