import React from 'react'
import Avatar from '../../../components/base/Avatar';
import { useState } from 'react';
import { Card, Dropdown, Form, Nav } from 'react-bootstrap';
import avatar from '../../../assets/img/team/72x72/57.webp';
import FeatherIcon from 'feather-icons-react';
import { Link, useNavigate } from 'react-router-dom';
import Scrollbar from '../../../components/base/Scrollbar';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const ProfileDropdownMenu = ({ className }: { className?: string }) => {
  const { loading, error, userInfo } = useSelector((state: any) => state.user)
  let navigate = useNavigate();
  const [navItems] = useState([
    {
      label: 'Profile',
      icon: 'user',
      link: "/profile"
    },
    {
      label: 'Orders',
      icon: 'pie-chart'
    },
    {
      label: 'Wishlist',
      icon: 'pie-chart',
      link: "/wishlist"
    },
    // {
    //   label: 'Posts & Activity',
    //   icon: 'lock'
    // },
    // {
    //   label: 'Settings & Privacy ',
    //   icon: 'settings',
    // },
    {
      label: 'Help Center',
      icon: 'help-circle'
    },
    // {
    //   label: 'Language',
    //   icon: 'globe'
    // }
  ]);


  const handleNavItemClick = (link: any) => {
    if (!userInfo) {
      navigate('/sign-in')
      return
    }
    navigate(link)
  }

  return (
    <Dropdown.Menu
      align="end"

      className={classNames(
        className,
        'navbar-top-dropdown-menu navbar-dropdown-caret py-0 dropdown-profile shadow border'
      )}
    >
      <Card className="position-relative border-0">
        <Card.Body className="p-0">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2 pt-4 pb-3">
            <Avatar src={avatar} size="xl" />
            <h6 className="text-body-emphasis">Hello!</h6>
          </div>
          {/* <div className="mb-3 mx-3">
            <Form.Control
              type="text"
              placeholder="Update your status"
              size="sm"
            />
          </div> */}
          <div style={{ height: '9rem' }}>
            <Scrollbar>
              <Nav className="nav flex-column mb-2 pb-1">
                {navItems.map(item => (
                  <Nav.Item key={item.label}>
                    <Nav.Link
                      onClick={() => handleNavItemClick(item.link)}
                      // href={item?.link} 
                      className="px-3">
                      <FeatherIcon
                        icon={item.icon}
                        size={16}
                        className="me-2 text-body"
                      />
                      <span className="text-body-highlight">{item.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Scrollbar>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-top border-translucent">
          {/* <Nav className="nav flex-column my-3">
            <Nav.Item>
              <Nav.Link href="#!" className="px-3">
                <FeatherIcon
                  icon="user-plus"
                  size={16}
                  className="me-2 text-body"
                />
                <span>Add another account</span>
              </Nav.Link>
            </Nav.Item>
          </Nav> */}
          {/* <hr /> */}


          <div className="px-3 my-3">
            <Link
              to={userInfo ? "/sign-out" : "sign-in"}
              className="btn btn-phoenix-secondary d-flex flex-center w-100"
            >
              <FeatherIcon icon="log-out" className="me-2" size={16} />
              {userInfo ? "Log out" : "Login"}

            </Link>
          </div>
          <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
            <Link className="text-body-quaternary me-1" to="#!">
              Privacy policy
            </Link>
            •
            <Link className="text-body-quaternary mx-1" to="#!">
              Terms
            </Link>
            •
            <Link className="text-body-quaternary ms-1" to="#!">
              Cookies
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default ProfileDropdownMenu;
