import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, removeJob, selectAllJobs } from '../../redux/features/jobSlice';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jobs = useSelector(selectAllJobs);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        job: '',
        desc: '',
        salary: ''
    });

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.age || !formData.job || !formData.desc || !formData.salary) {
            alert('Please fill all fields');
            return;
        }

        const newJob = {
            id: Date.now(),
            ...formData,
            user: currentUser.name,
            date: new Date().toLocaleString()
        };

        dispatch(addJob(newJob));
        setFormData({
            name: '',
            age: '',
            job: '',
            desc: '',
            salary: ''
        });
    };

    const handleDelete = (jobId) => {
        if (window.confirm('Are you sure you want to delete this job?')) {
            dispatch(removeJob(jobId));
        }
    };

    return (
        <div className="dashboard">
            <nav className="dashboard-nav">
                <h2>Welcome, {currentUser?.name || 'User'}</h2>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </nav>
            
            <div className="dashboard-content">
                <div className="job-form">
                    <h3>Add New Job</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Candidate Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="job"
                            placeholder="Job Title"
                            value={formData.job}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="desc"
                            placeholder="Job Description"
                            value={formData.desc}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="salary"
                            placeholder="Salary"
                            value={formData.salary}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Add Job</button>
                    </form>
                </div>

                <div className="job-list">
                    <h3>Job Listings ({jobs.length})</h3>
                    {jobs.length === 0 ? (
                        <p>No jobs added yet.</p>
                    ) : (
                        jobs.map(job => (
                            <div key={job.id} className="job-card">
                                <h4>{job.job}</h4>
                                <p><strong>Candidate:</strong> {job.name}</p>
                                <p><strong>Age:</strong> {job.age}</p>
                                <p><strong>Description:</strong> {job.desc}</p>
                                <p><strong>Salary:</strong> {job.salary}</p>
                                <button 
                                    onClick={() => handleDelete(job.id)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 