import React from 'react';

import logoImg from '../../../img/logo-artwork-manager-white.png';
import SystemMessage from '../../notifications/system/components/SystemMessage';
import News from '../../news/containers/News';

/**
 * @description Auth layout
 * @param {Function} WrappedComponent
 * @return {Layout}
 */
const AuthLayout = WrappedComponent => {
  function Layout(props) {
    return (
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-12 col-md-10 px-md-5">
              <div className="row">
                <div className="col-12 sm-center">
                  <img src={logoImg} alt="logo" className="img-fluid" />
                  <div className="py-3 d-md-none" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 align-self-center d-none d-md-block">
                  <News />
                </div>
                <div className="col-md-6 col-12 sm-flex-center">
                  <div className="float-md-right">
                    <div className="auth-login-system-message text-center">
                      <SystemMessage />
                    </div>
                    <WrappedComponent {...props} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr className="d-none d-md-block" />
                  <div className="py-3 d-md-none" />
                </div>

                <div className="col-md-6 col-12 sm-center bottom-link">
                  <a href="http://www.managedartwork.com/" target="_blanko">
                    ©2017 Managed Artwork
                  </a>
                </div>
                <div className="col-md-6 col-12 sm-center bottom-link">
                  <div className="float-md-right ">
                    <a
                      href="http://media.artworkmanager.com.s3-us-west-2.amazonaws.com/documents/files/clientservices/TermsOfService.pdf"
                      target="_blanko"
                    >
                      Terms of Service
                    </a>
                  </div>
                </div>

                <div className="col-12 d-md-none  d-block">
                  <div className="py-3" />
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </div>
    );
  }

  return Layout;
};
export default AuthLayout;
