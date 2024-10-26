import React from 'react'
import './DropdownCustom.css'
export const DropdownCustom = () => {
  return (
    <divj className="dropdown">
      <button className="dropdown-toggle">
        <span className="dropdown-toggle-label">Select option</span>
        <span className="dropdown-toggle-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 10.586l4.929 4.929-4.929 4.93-4.929-4.929 4.929-4.93z" />
          </svg>
        </span>
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item">
          <span className="dropdown-item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M14 10h-4v4h4v-4zm0 10h-4v4h4v-4zm-6 0h-4v4h4v-4zm6 0h-4v4h4v-4z" />
            </svg>
          </span>
          <span className="dropdown-item-label">Video</span>
        </li>
        <li className="dropdown-item">
          <span className="dropdown-item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 14.586l4.929 4.929-4.929 4.93-4.929-4.929 4.929-4.93z" />
            </svg>
          </span>
          <span className="dropdown-item-label">Documents</span>
        </li>
      </ul>
    </div>
  )
}