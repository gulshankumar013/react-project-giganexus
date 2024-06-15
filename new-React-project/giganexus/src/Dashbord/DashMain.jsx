import React, { useState, useEffect } from 'react';
import "../Dashbord/dasMain.css";
import { Link } from 'react-router-dom';
import { BsBell, BsCalendarCheck, BsChevronRight, BsCloudDownload, BsColumns, BsColumnsGap, BsEmojiSmile, BsFilter, BsLayoutSidebar, BsLayoutThreeColumns, BsList, BsPlus, BsSearch } from 'react-icons/bs';
import { BiSolidDollarCircle, BiSolidDoughnutChart, BiSolidGroup, BiSolidLogOutCircle, BiSolidMessageDots, BiSolidShoppingBag } from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';


const DasMain = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [searchFormVisible, setSearchFormVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
      const li = item.parentElement;
      item.addEventListener('click', () => {
        allSideMenu.forEach(i => {
          i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
      });
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarHidden(true);
      } else if (window.innerWidth > 576) {
        setSearchFormVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleSearchForm = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormVisible(!searchFormVisible);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section id="sidebar" className={sidebarHidden ? 'hide' : ''}>
        <a href="#" className="brand">
          <BsEmojiSmile/>
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className={activeMenu === 'dashboard' ? 'active' : ''}>
            <Link to="#" onClick={() => setActiveMenu('dashboard')}>
              <BsCalendarCheck/>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className={activeMenu === 'store' ? 'active' : ''}>
            <Link to="#" onClick={() => setActiveMenu('store')}>
              <BiSolidShoppingBag />
              <span className="text">My Store</span>
            </Link>
          </li>
          <li className={activeMenu === 'analytics' ? 'active' : ''}>
            <Link to="#" onClick={() => setActiveMenu('analytics')}>
              <BiSolidDoughnutChart />
              <span className="text">Analytics</span>
            </Link>
          </li>
          <li className={activeMenu === 'message' ? 'active' : ''}>
            <Link to="#" onClick={() => setActiveMenu('message')}>
              <BiSolidMessageDots />
              <span className="text">Message</span>
            </Link>
          </li>
          <li className={activeMenu === 'team' ? 'active' : ''}>
            <Link to="#" onClick={() => setActiveMenu('team')}>
              <BiSolidGroup />
              <span className="text">Team</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li className={activeMenu === 'settings' ? 'active' : ''}>
            <Link to="#" onClick={() => setActiveMenu('settings')}>
            <IoSettingsSharp/>
              <span className="text">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="logout">
              <BiSolidLogOutCircle/>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <BsList className="bx bx-menu" onClick={toggleSidebar} />
          <Link to="#" className="nav-link">Categories</Link>
          <form action="#">
            <div className={`form-input ${searchFormVisible ? 'show' : ''}`}>
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn" onClick={toggleSearchForm}>
                {searchFormVisible ? <BsX /> : <BsSearch />}
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" onClick={toggleDarkMode} />
          <Link to="#" className="notification">
            <BsBell/>
            <span className="num">8</span>
          </Link>
          <Link to="#" className="profile">
            <img src="img/people.png" alt="profile" />
          </Link>
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">Dashboard</Link>
                </li>
                <li><BsChevronRight/></li>
                <li>
                  <Link to="#" className="active">Home</Link>
                </li>
              </ul>
            </div>
            <Link to="#" className="btn-download">
              <BsCloudDownload/>
              <span className="text">Download PDF</span>
            </Link>
          </div>

          <ul className="box-info">
            <li>
              <BsCalendarCheck/>
              <span className="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <BiSolidGroup/>
              <span className="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <BiSolidDollarCircle/>
              <span className="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <BsSearch/>
                <BsFilter/>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="user" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="user" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="user" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status process">Process</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="user" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="user" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <BsPlus/>
                <BsFilter/>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default DasMain;
