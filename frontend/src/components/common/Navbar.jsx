import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [Username, setUsername] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Get the username from localStorage
        const storedUsername = localStorage.getItem('Loggedinuser');
        if (storedUsername) {
            setUsername(storedUsername); // Set it in state if found
        }
    }, []);

    const handleLogout = () => {
        // Clear local storage and redirect to login page
        localStorage.removeItem('Loggedinuser');
        localStorage.removeItem('token');
        setUsername('');
        navigate('/login');
    };

    console.log(Username);
    return (
        <div className='bg-new w-full p-2.5 flex justify-between'>
            <div className='flex gap-28'>
                <div className='flex gap-1 md:ml-5 items-center'>
                    <Link to="/Home">
                    <img src='/newlogo.png' alt='Logo' className='w-12 h-12' />
                    </Link>
                    <Link to="/Home">
                    <img src='/newName.png' alt='Logo' className='h-14' />
                    </Link>
                </div>
                <div className='flex text-white gap-7 font-semibold items-center'>

                    <div className='group relative h-full flex items-center'>
                        <Link to="/Event">
                            <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                                EVENTS
                            </button>
                        </Link>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <Link to='/ranking'>
                        <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                            RANKINGS
                        </button>
                        </Link>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <Link to='/News'>
                            <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                                NEWS
                            </button>
                        </Link>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <Link to="/teamrequest">
                        <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                           TEAMS
                        </button>
                        </Link>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                </div>
            </div>
            <div
                className='relative text-black flex md:mr-8 items-center min-h-full'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/profile">
                <button className='bg-red-500 h-fit px-2.5 py-1 font-semibold hover:bg-red-400 duration-500 flex items-center gap-2 rounded-full'>
                <img src='/profilepic.png ' className='h-8 rounded-full'></img>
                    {Username || 'Login'}
                </button>
                </Link>

                {/* Show Logout option on hover */}
                {Username && isHovered && (
                    <div className='absolute top-10 right-0 bg-white text-black p-2 rounded-lg shadow-lg'>
                        
                        <button
                            className='hover:text-red-500 duration-300'
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar